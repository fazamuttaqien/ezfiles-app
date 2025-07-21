/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { driver, DriveStep } from "driver.js";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

import "driver.js/dist/driver.css";

interface TourGuideProps {
  steps: DriveStep[];
  buttonText?: string;
  buttonVariant?:
    | "default"
    | "destructive"
    | "outline"
    | "secondary"
    | "ghost"
    | "link";
  className?: string;
}

export const TourGuide: React.FC<TourGuideProps> = ({
  steps,
  buttonText = "Start Tour",
  buttonVariant = "outline",
  className,
}) => {
  const startTour = () => {
    const driverObj = driver({
      showProgress: true,
      showButtons: ["next", "close"],
      steps: steps,
      popoverClass: "driverjs-theme",
      progressText: "{{current}}",
      nextBtnText: "Next",
      doneBtnText: "Finish",
      onPopoverRender: (popover, { config, state }) => {
        if (driverObj.hasNextStep()) {
          const skipButton = document.createElement("button");
          skipButton.innerText = "Skip";
          popover.footerButtons.appendChild(skipButton);

          skipButton.addEventListener("click", () => {
            driverObj.destroy();
          });
        }
      },

      onDestroyed: () => {
        if (!driverObj.hasNextStep()) {
          driverObj.destroy();
        }
      },
    });

    driverObj.drive();
  };

  return (
    <Button
      onClick={startTour}
      variant={buttonVariant}
      size="sm"
      className={className}
    >
      <Play className="w-4 h-4 mr-2" />
      {buttonText}
    </Button>
  );
};
