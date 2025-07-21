/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable @typescript-eslint/no-explicit-any */

"use client";

import React, { useState, useEffect, useCallback } from "react";
import { driver, DriveStep } from "driver.js";
import { Button } from "@/components/ui/button";
import {
  Play,
  Search,
  Bell,
  Settings,
  User,
  BarChart,
  DollarSign,
  CheckSquare,
  Plus,
  FileText,
  Users,
} from "lucide-react";

interface DynamicTourGuideProps {
  buttonText?: string;
  className?: string;
}

// Simulasi komponen yang berubah berdasarkan state
const DynamicDashboard: React.FC<{
  currentView: string;
  onViewChange: (view: string) => void;
}> = ({ currentView, onViewChange }) => {
  const views = {
    overview: {
      title: "Overview Dashboard",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-blue-50 p-4 rounded-lg" data-tour="analytics-card">
            <BarChart className="w-8 h-8 text-blue-600 mb-2" />
            <h3 className="font-medium text-blue-900">Analytics</h3>
            <p className="text-2xl font-bold text-blue-900">1,234</p>
          </div>
          <div className="bg-green-50 p-4 rounded-lg" data-tour="revenue-card">
            <DollarSign className="w-8 h-8 text-green-600 mb-2" />
            <h3 className="font-medium text-green-900">Revenue</h3>
            <p className="text-2xl font-bold text-green-900">$12,345</p>
          </div>
          <div className="bg-purple-50 p-4 rounded-lg" data-tour="tasks-card">
            <CheckSquare className="w-8 h-8 text-purple-600 mb-2" />
            <h3 className="font-medium text-purple-900">Tasks</h3>
            <p className="text-2xl font-bold text-purple-900">23</p>
          </div>
        </div>
      ),
    },
    projects: {
      title: "Projects Dashboard",
      content: (
        <div className="space-y-4">
          <div
            className="bg-white border rounded-lg p-4"
            data-tour="project-list"
          >
            <h3 className="font-medium mb-2">Active Projects</h3>
            <div className="space-y-2">
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span>Website Redesign</span>
                <span className="text-sm text-green-600">In Progress</span>
              </div>
              <div className="flex justify-between items-center p-2 bg-gray-50 rounded">
                <span>Mobile App</span>
                <span className="text-sm text-blue-600">Planning</span>
              </div>
            </div>
          </div>
          <button
            className="bg-blue-600 text-white px-4 py-2 rounded-lg flex items-center gap-2"
            data-tour="add-project"
          >
            <Plus className="w-4 h-4" />
            Add New Project
          </button>
        </div>
      ),
    },
    reports: {
      title: "Reports Dashboard",
      content: (
        <div className="space-y-4">
          <div
            className="bg-white border rounded-lg p-4"
            data-tour="report-generator"
          >
            <FileText className="w-8 h-8 text-gray-600 mb-2" />
            <h3 className="font-medium mb-2">Generate Reports</h3>
            <p className="text-gray-600 mb-4">
              Create custom reports for your data
            </p>
            <button className="bg-green-600 text-white px-4 py-2 rounded">
              Generate Report
            </button>
          </div>
          <div
            className="bg-white border rounded-lg p-4"
            data-tour="team-performance"
          >
            <Users className="w-8 h-8 text-orange-600 mb-2" />
            <h3 className="font-medium mb-2">Team Performance</h3>
            <p className="text-gray-600">Track your team&apos;s productivity</p>
          </div>
        </div>
      ),
    },
  };

  return (
    <div className="space-y-4">
      {/* Navigation untuk mengubah view */}
      <div className="flex gap-2 mb-4" data-tour="view-navigation">
        {Object.keys(views).map((view) => (
          <button
            key={view}
            onClick={() => onViewChange(view)}
            className={`px-3 py-1 rounded capitalize ${
              currentView === view
                ? "bg-blue-600 text-white"
                : "bg-gray-200 text-gray-700 hover:bg-gray-300"
            }`}
          >
            {view}
          </button>
        ))}
      </div>

      {/* Content yang berubah */}
      <div>
        <h2 className="text-xl font-semibold mb-4" data-tour="dynamic-title">
          {views[currentView as keyof typeof views].title}
        </h2>
        {views[currentView as keyof typeof views].content}
      </div>
    </div>
  );
};

export const DynamicTourGuide: React.FC<DynamicTourGuideProps> = ({
  buttonText = "Start Dynamic Tour",
  className,
}) => {
  const [currentView, setCurrentView] = useState("overview");
  const [driverInstance, setDriverInstance] = useState<any>(null);

  // Fungsi untuk menunggu elemen muncul
  const waitForElement = (
    selector: string,
    timeout = 5000
  ): Promise<Element> => {
    return new Promise((resolve, reject) => {
      const element = document.querySelector(selector);
      if (element) {
        resolve(element);
        return;
      }

      const observer = new MutationObserver(() => {
        const element = document.querySelector(selector);
        if (element) {
          observer.disconnect();
          resolve(element);
        }
      });

      observer.observe(document.body, {
        childList: true,
        subtree: true,
      });

      setTimeout(() => {
        observer.disconnect();
        reject(new Error(`Element ${selector} not found within ${timeout}ms`));
      }, timeout);
    });
  };

  // Definisi steps yang dinamis
  const getDynamicSteps = useCallback((): DriveStep[] => {
    const baseSteps: DriveStep[] = [
      {
        element: '[data-tour="search"]',
        popover: {
          title: "Search Feature",
          description:
            "Start with the search functionality to find anything quickly.",
          side: "bottom",
          align: "start",
        },
      },
      {
        element: '[data-tour="view-navigation"]',
        popover: {
          title: "Navigation Tabs",
          description:
            "These tabs switch between different dashboard views. We'll explore each one!",
          side: "bottom",
          align: "center",
        },
      },
    ];

    // Steps yang berubah berdasarkan currentView
    const viewSpecificSteps: { [key: string]: DriveStep[] } = {
      overview: [
        {
          element: '[data-tour="analytics-card"]',
          popover: {
            title: "Analytics Overview",
            description:
              "View your key metrics and performance indicators here.",
            side: "top",
            align: "center",
          },
        },
        {
          element: '[data-tour="revenue-card"]',
          popover: {
            title: "Revenue Tracking",
            description:
              "Monitor your financial performance and growth trends.",
            side: "top",
            align: "center",
          },
        },
      ],
      projects: [
        {
          element: '[data-tour="project-list"]',
          popover: {
            title: "Project Management",
            description:
              "Here you can see all your active projects and their status.",
            side: "top",
            align: "center",
          },
        },
        {
          element: '[data-tour="add-project"]',
          popover: {
            title: "Add New Project",
            description:
              "Click here to create a new project and start tracking it.",
            side: "left",
            align: "center",
          },
        },
      ],
      reports: [
        {
          element: '[data-tour="report-generator"]',
          popover: {
            title: "Report Generator",
            description:
              "Generate custom reports based on your data and requirements.",
            side: "right",
            align: "start",
          },
        },
        {
          element: '[data-tour="team-performance"]',
          popover: {
            title: "Team Performance",
            description:
              "Analyze how your team is performing and identify areas for improvement.",
            side: "top",
            align: "center",
          },
        },
      ],
    };

    // Combine base steps dengan view-specific steps
    return [...baseSteps, ...(viewSpecificSteps[currentView] || [])];
  }, [currentView]);

  // Custom hook untuk mengelola tour dengan state changes
  const startDynamicTour = useCallback(async () => {
    // Style injection (sama seperti sebelumnya)
    const styleId = "dynamic-tour-styles";
    if (!document.getElementById(styleId)) {
      const style = document.createElement("style");
      style.id = styleId;
      style.innerHTML = `
        .driver-popover {
          width: 400px !important;
          max-width: 90vw !important;
          min-width: 320px !important;
        }
        .driver-popover.driverjs-theme {
          background: #ffffff !important;
          border: 1px solid #e2e8f0 !important;
          border-radius: 12px !important;
          box-shadow: 0 20px 25px -5px rgba(0, 0, 0, 0.1) !important;
          padding: 0 !important;
        }
        .driver-popover-title {
          font-size: 18px !important;
          font-weight: 600 !important;
          color: #1e293b !important;
          margin: 0 0 12px 0 !important;
          padding: 20px 20px 0 20px !important;
        }
        .driver-popover-description {
          font-size: 14px !important;
          line-height: 1.6 !important;
          color: #64748b !important;
          margin: 0 !important;
          padding: 0 20px !important;
        }
        .driver-popover-footer {
          display: flex !important;
          gap: 8px !important;
          justify-content: flex-end !important;
          padding: 16px 20px 20px 20px !important;
          border-top: 1px solid #f1f5f9 !important;
          margin-top: 16px !important;
        }
        .driver-popover-footer button {
          padding: 8px 16px !important;
          border-radius: 6px !important;
          font-size: 13px !important;
          font-weight: 500 !important;
          cursor: pointer !important;
          transition: all 0.2s ease !important;
        }
        .driver-popover-next-btn {
          background: #3b82f6 !important;
          color: #ffffff !important;
          border: 1px solid #3b82f6 !important;
        }
        .custom-view-switch {
          background: #f59e0b !important;
          color: #ffffff !important;
          border: 1px solid #f59e0b !important;
        }
      `;
      document.head.appendChild(style);
    }

    // Membuat driver instance dengan handling dinamis
    const driverObj = driver({
      showProgress: true,
      showButtons: ["next", "close"],
      steps: getDynamicSteps(),
      progressText: "{{current}} of {{total}}",
      nextBtnText: "Next →",
      doneBtnText: "Finish ✓",
      popoverClass: "driverjs-theme",
      animate: true,
      smoothScroll: true,

      // Custom handler untuk steps yang memerlukan state change
      onNextClick: async (element, step, options) => {
        const stepIndex =
          typeof options.state.activeStep === "number"
            ? options.state.activeStep
            : 0;
        const currentStepElement = Array.isArray(options.config.steps)
          ? options.config.steps[stepIndex]
          : undefined;

        // Deteksi jika kita perlu mengubah view
        if (currentStepElement?.element === '[data-tour="view-navigation"]') {
          // Pindah ke view projects untuk step berikutnya
          setCurrentView("projects");

          // Tunggu elemen baru muncul
          try {
            await waitForElement('[data-tour="project-list"]', 3000);

            // Update steps untuk view baru
            const newSteps = getDynamicSteps();
            driverObj.setSteps(newSteps);
          } catch (error) {
            console.warn("Element not found, continuing tour...");
          }
        }

        // Jika kita di project view dan akan pindah ke reports
        else if (currentStepElement?.element === '[data-tour="add-project"]') {
          setCurrentView("reports");

          try {
            await waitForElement('[data-tour="report-generator"]', 3000);
            const newSteps = getDynamicSteps();
            driverObj.setSteps(newSteps);
          } catch (error) {
            console.warn("Element not found, continuing tour...");
          }
        }

        // Lanjutkan dengan behavior default
        driverObj.moveNext();
      },

      onPopoverRender: (popover, { config, state }) => {
        const stepIndex =
          typeof state.activeStep === "number" ? state.activeStep : 0;
        const currentStep = Array.isArray(config.steps)
          ? config.steps[stepIndex]
          : undefined;

        // Tambahkan button khusus untuk switching view jika diperlukan
        if (currentStep?.element === '[data-tour="view-navigation"]') {
          const switchButton = document.createElement("button");
          switchButton.innerText = "Switch to Projects";
          switchButton.className = "custom-view-switch";

          popover.footerButtons.insertBefore(switchButton, popover.nextButton);

          switchButton.addEventListener("click", async () => {
            setCurrentView("projects");
            await new Promise((resolve) => setTimeout(resolve, 100));
            driverObj.moveNext();
          });
        }
      },

      onDestroyed: () => {
        setDriverInstance(null);
      },
    });

    setDriverInstance(driverObj);
    driverObj.drive();
  }, [getDynamicSteps]);

  // Cleanup effect
  useEffect(() => {
    return () => {
      if (driverInstance) {
        driverInstance.destroy();
      }
    };
  }, [driverInstance]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      {/* Header */}
      <header className="bg-white shadow-sm rounded-lg mb-6 p-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            <h1 className="text-xl font-semibold text-gray-900">
              Dynamic Dashboard
            </h1>

            <div className="relative" data-tour="search">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-gray-400" />
              <input
                type="text"
                placeholder="Search..."
                className="pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-transparent"
              />
            </div>
          </div>

          <div className="flex items-center space-x-3">
            <Button
              onClick={startDynamicTour}
              variant="outline"
              size="sm"
              className={className}
            >
              <Play className="w-4 h-4 mr-2" />
              {buttonText}
            </Button>

            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full">
              <Bell className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full">
              <Settings className="w-5 h-5" />
            </button>
            <button className="p-2 text-gray-600 hover:text-gray-900 hover:bg-gray-100 rounded-full">
              <User className="w-5 h-5" />
            </button>
          </div>
        </div>
      </header>

      {/* Main Content */}
      <main className="bg-white rounded-lg shadow-sm p-6">
        <DynamicDashboard
          currentView={currentView}
          onViewChange={setCurrentView}
        />

        {/* Instructions */}
        <div className="mt-8 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
          <h4 className="font-medium text-yellow-800 mb-2">
            🔄 Dynamic Tour Guide Demo
          </h4>
          <p className="text-yellow-700 text-sm">
            This tour demonstrates how to handle components that change during
            the tour process. The tour will automatically switch between
            different dashboard views and wait for elements to appear.
          </p>
          <p className="text-yellow-700 text-sm mt-2">
            Current view: <strong>{currentView}</strong>
          </p>
        </div>
      </main>
    </div>
  );
};
