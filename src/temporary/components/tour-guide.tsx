/* eslint-disable @typescript-eslint/no-unused-vars */

import React from "react";
import { driver, DriveStep } from "driver.js";
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";

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
  popoverWidth?: number | string; // Custom popover width
  popoverMaxWidth?: number | string; // Custom max width
}

export const TourGuide: React.FC<TourGuideProps> = ({
  steps,
  buttonText = "Start Tour",
  buttonVariant = "outline",
  className,
  popoverWidth = 350, // Default width
  popoverMaxWidth = 400, // Default max width
}) => {
  const startTour = () => {
    const styleId = "tour-guide-custom-styles";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        /* Custom popover dimensions */
        .driver-popover {
          width: ${
            typeof popoverWidth === "number"
              ? popoverWidth + "px"
              : popoverWidth
          } !important;
          max-width: ${
            typeof popoverMaxWidth === "number"
              ? popoverMaxWidth + "px"
              : popoverMaxWidth
          } !important;
          min-width: 380px !important;
        }

        /* Enhanced popover styling */
        .driver-popover.driverjs-theme {
          background: #ffffff !important;
          border: 1px solid #e2e8f0 !important;
          border-radius: 12px !important;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04) !important;
          padding: 0 !important;
        }

        /* Header styling */
        .driver-popover-title {
          font-size: 18px !important;
          font-weight: 600 !important;
          color: #1e293b !important;
          margin: 0 0 12px 0 !important;
          line-height: 1.4 !important;
          padding: 20px 20px 0 20px !important;
        }

        /* Description styling */
        .driver-popover-description {
          font-size: 14px !important;
          line-height: 1.6 !important;
          color: #64748b !important;
          margin: 0 !important;
          padding: 0 20px !important;
          word-wrap: break-word !important;
          hyphens: auto !important;
        }

        /* Progress text styling */
        .driver-popover-progress-text {
          font-size: 12px !important;
          color: #94a3b8 !important;
          font-weight: 500 !important;
          margin-bottom: 16px !important;
          padding: 0 20px !important;
        }

        /* Footer buttons container */
        .driver-popover-footer {
          display: flex !important;
          gap: 8px !important;
          justify-content: flex-end !important;
          align-items: center !important;
          padding: 16px 20px 20px 20px !important;
          border-top: 1px solid #f1f5f9 !important;
          margin-top: 16px !important;
        }

        /* Button styling */
        .driver-popover-footer button {
          padding: 8px 16px !important;
          border-radius: 6px !important;
          font-size: 13px !important;
          font-weight: 500 !important;
          border: 1px solid #e2e8f0 !important;
          background: #ffffff !important;
          color: #64748b !important;
          cursor: pointer !important;
          transition: all 0.2s ease !important;
        }

        .driver-popover-footer button:hover {
          background: #f8fafc !important;
          border-color: #cbd5e1 !important;
          color: #475569 !important;
        }

        /* Next button styling */
        .driver-popover-next-btn {
          background: #3b82f6 !important;
          color: #ffffff !important;
          border-color: #3b82f6 !important;
        }

        .driver-popover-next-btn:hover {
          background: #2563eb !important;
          border-color: #2563eb !important;
          color: #ffffff !important;
        }

        /* Done button styling */
        .driver-popover-done-btn {
          background: #10b981 !important;
          color: #ffffff !important;
          border-color: #10b981 !important;
        }

        .driver-popover-done-btn:hover {
          background: #059669 !important;
          border-color: #059669 !important;
          color: #ffffff !important;
        }

        /* Close button styling */
        .driver-popover-close-btn {
          width: 24px !important;
          height: 24px !important;
          position: absolute !important;
          top: 16px !important;
          right: 16px !important;
          padding: 0 !important;
          background: #f1f5f9 !important;
          border: none !important;
          border-radius: 50% !important;
          display: flex !important;
          align-items: center !important;
          justify-content: center !important;
          font-size: 14px !important;
          color: #64748b !important;
        }

        .driver-popover-close-btn:hover {
          background: #e2e8f0 !important;
          color: #475569 !important;
        }

        /* Arrow styling */
        .driver-popover-arrow-side {
          border-color: #e2e8f0 transparent !important;
        }

        .driver-popover-arrow {
          border-color: #ffffff transparent !important;
        }

        /* Responsive adjustments */
        @media (max-width: 640px) {
          .driver-popover {
            width: calc(100vw - 40px) !important;
            max-width: calc(100vw - 40px) !important;
            min-width: auto !important;
          }
          
          .driver-popover-title {
            font-size: 16px !important;
            padding: 16px 16px 0 16px !important;
          }
          
          .driver-popover-description {
            font-size: 13px !important;
            padding: 0 16px !important;
          }
          
          .driver-popover-progress-text {
            padding: 0 16px !important;
          }
          
          .driver-popover-footer {
            padding: 12px 16px 16px 16px !important;
          }
        }

        /* Custom skip button styling */
        .driver-popover-footer .skip-button {
          background: #fef2f2 !important;
          color: #dc2626 !important;
          border-color: #fecaca !important;
        }

        .driver-popover-footer .skip-button:hover {
          background: #fee2e2 !important;
          border-color: #fca5a5 !important;
          color: #b91c1c !important;
        }
      `;
      document.head.appendChild(style);
    }

    const driverObj = driver({
      showProgress: true,
      showButtons: ["next", "close"],
      steps: steps,
      progressText: "{{current}} of {{total}}",
      nextBtnText: "Next →",
      doneBtnText: "Finish ✓",
      popoverClass: "driverjs-theme",

      onPopoverRender: (popover, { config, state }) => {
        // Add custom skip button with better styling
        if (driverObj.hasNextStep()) {
          const skipButton = document.createElement("button");
          skipButton.innerText = "Skip Tour";
          skipButton.className = "skip-button";

          // Insert skip button at the beginning of footer buttons
          const footerButtons = popover.footerButtons;
          footerButtons.insertBefore(skipButton, footerButtons.firstChild);

          skipButton.addEventListener("click", () => {
            driverObj.destroy();
          });
        }

        // Add some padding to the description if it's long
        const description = popover.description;
        if ((description && description.textContent?.length) || 0 > 100) {
          description.style.marginBottom = "8px";
        }
      },

      onDestroyed: () => {
        if (!driverObj.hasNextStep()) {
          driverObj.destroy();
        }
      },

      // Additional styling options
      animate: true,
      smoothScroll: true,
      allowClose: true,
      stagePadding: 8,
      stageRadius: 8,
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
