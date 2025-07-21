"use client";

import React from "react";
import { TourGuide } from "@/temporary/components/tour-guide";
import TourUpload from "./tour/upload";
import TourProcess from "./tour/process";
import TourSuccess from "./tour/success";

const TourGuideComponent = () => {
  const steps = [
    {
      element: '[data-tour="fileupload-card"]',
      popover: {
        title: "File Upload",
        description:
          "Upload your files here by dragging and dropping or clicking to browse your computer.",
        side: "bottom",
        align: "start",
      },
    },
    {
      element: '[data-tour="filetype-card"]',
      popover: {
        title: "File Type Selection",
        description:
          "Choose the type of file you want to process. We support various formats including PDF, DOC, and images.",
        side: "bottom",
        align: "center",
      },
    },
    {
      element: '[data-tour="fileprocess-card"]',
      popover: {
        title: "File Processing",
        description:
          "Your file will be processed here. You can monitor the progress and status of the operation.",
        side: "left",
        align: "start",
      },
    },
    {
      element: '[data-tour="filesuccess-card"]',
      popover: {
        title: "Success Status",
        description:
          "Once your file is successfully processed, you'll see the confirmation here along with next steps.",
        side: "left",
        align: "center",
      },
    },
  ];

  return (
    <>
      {steps.map((step, index) => {
        <TourGuide steps={[step]} />;
        if (
          step.element === '[data-tour="fileupload-card"]' ||
          step.element === '[data-tour="filetype-card"]'
        ) {
          return (
            <React.Fragment key={index}>
              <TourUpload />
            </React.Fragment>
          );
        } else if (step.element === '[data-tour="fileprocess-card"]') {
          return (
            <React.Fragment key={index}>
              <TourProcess />
            </React.Fragment>
          );
        } else {
          return (
            <React.Fragment key={index}>
              <TourSuccess />
            </React.Fragment>
          );
        }
      })}
    </>
  );
};

export default TourGuideComponent;
