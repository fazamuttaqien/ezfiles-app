"use client";

import React, { useState } from "react";
import { TourGuide } from "@/temporary/components/tour-guide";
import TourUpload from "./tour/upload";
import TourProcess from "./tour/process";
import TourSuccess from "./tour/success";

const TourGuideComponent = () => {
  const [currentStep, setCurrentStep] = useState(0);
  const [showAllComponents, setShowAllComponents] = useState(true);

  // Define steps for each section
  const uploadSteps = [
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
  ];

  const processSteps = [
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
  ];

  const successSteps = [
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

  // Manual step navigation
  const nextStep = () => {
    if (currentStep < 2) {
      setCurrentStep(currentStep + 1);
    }
  };

  const prevStep = () => {
    if (currentStep > 0) {
      setCurrentStep(currentStep - 1);
    }
  };

  const renderCurrentSection = () => {
    switch (currentStep) {
      case 0:
        return (
          <div>
            <TourUpload />
            <TourGuide steps={uploadSteps} buttonText="Start Upload Tour" />
            <div className="flex gap-2 mt-4">
              <button
                onClick={nextStep}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Next: Processing Tour →
              </button>
            </div>
          </div>
        );
      case 1:
        return (
          <div>
            <TourProcess />
            <TourGuide
              steps={processSteps}
              buttonText="Start Processing Tour"
            />
            <div className="flex gap-2 mt-4">
              <button
                onClick={prevStep}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                ← Back to Upload
              </button>
              <button
                onClick={nextStep}
                className="px-4 py-2 bg-blue-500 text-white rounded"
              >
                Next: Success Tour →
              </button>
            </div>
          </div>
        );
      case 2:
        return (
          <div>
            <TourSuccess />
            <TourGuide steps={successSteps} buttonText="Start Success Tour" />
            <div className="flex gap-2 mt-4">
              <button
                onClick={prevStep}
                className="px-4 py-2 bg-gray-500 text-white rounded"
              >
                ← Back to Processing
              </button>
              <button
                onClick={() => setShowAllComponents(true)}
                className="px-4 py-2 bg-green-500 text-white rounded"
              >
                View All Components
              </button>
            </div>
          </div>
        );
      default:
        return <TourUpload />;
    }
  };

  // Toggle between step-by-step and all components view
  if (showAllComponents) {
    return (
      <>
        <div className="mb-4 p-4 bg-gray-100 rounded">
          <h2 className="text-lg font-semibold mb-2">Complete Tour Guide</h2>
          <button
            onClick={() => setShowAllComponents(false)}
            className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
          >
            Start Step-by-Step Tour
          </button>
          <TourGuide
            steps={[...uploadSteps, ...processSteps, ...successSteps]}
            buttonText="Start Complete Tour"
          />
        </div>
        <TourUpload />
        <TourProcess />
        <TourSuccess />
      </>
    );
  }

  return (
    <div>
      <div className="mb-4 p-4 bg-gray-100 rounded">
        <h2 className="text-lg font-semibold mb-2">
          Step {currentStep + 1} of 3:{" "}
          {["Upload", "Process", "Success"][currentStep]}
        </h2>
        <div className="w-full bg-gray-200 rounded-full h-2 mb-4">
          <div
            className="bg-blue-500 h-2 rounded-full transition-all duration-300"
            style={{ width: `${((currentStep + 1) / 3) * 100}%` }}
          ></div>
        </div>
      </div>
      {renderCurrentSection()}
    </div>
  );
};

export default TourGuideComponent;
