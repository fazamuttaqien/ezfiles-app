"use client";

import { CircularProgress } from "../loading/circular-progress";
import { LineProgressBar } from "../loading/line-progress-bar";
import { LoadingOverlay } from "../loading/loading-overlay";
import { LoadingSpinner } from "../loading/loading-spinner";
import { useEffect, useState } from "react";

export default function ProgressPage() {
  const [progress, setProgress] = useState(0);
  const [isRunning, setIsRunning] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    let interval: NodeJS.Timeout;

    if (isRunning) {
      interval = setInterval(() => {
        setProgress((prev) => {
          if (prev >= 100) {
            setIsRunning(false);
            return 100;
          }
          return prev + 1;
        });
      }, 100);
    }

    return () => clearInterval(interval);
  }, [isRunning]);

  const startProgress = () => {
    setProgress(0);
    setIsRunning(true);
  };

  const resetProgress = () => {
    setProgress(0);
    setIsRunning(false);
  };

  const simulateLoading = async () => {
    setIsLoading(true);
    // Simulate API call
    await new Promise((resolve) => setTimeout(resolve, 3000));
    setIsLoading(false);
  };

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-3xl font-bold text-gray-900 mb-8 text-center">
          Progress Bar & Loading Components
        </h1>

        {/* Controls */}
        <div className="flex justify-center gap-4 mb-12">
          <button
            onClick={startProgress}
            disabled={isRunning}
            className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isRunning ? "Running..." : "Start Progress"}
          </button>
          <button
            onClick={resetProgress}
            className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
          >
            Reset
          </button>
          <button
            onClick={simulateLoading}
            disabled={isLoading}
            className="px-6 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 disabled:bg-gray-400 disabled:cursor-not-allowed transition-colors"
          >
            {isLoading ? "Loading..." : "Test Loading"}
          </button>
        </div>

        {/* Loading Spinners */}
        <div className="space-y-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Loading Spinners
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-4">Default Spinner</h3>
              <div className="flex justify-center">
                <LoadingSpinner />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-4">Large Spinner</h3>
              <div className="flex justify-center">
                <LoadingSpinner size={60} strokeWidth={6} />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-4">Fast Spinner</h3>
              <div className="flex justify-center">
                <LoadingSpinner speed="fast" color="#10b981" />
              </div>
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-lg font-medium mb-4">Slow Spinner</h3>
              <div className="flex justify-center">
                <LoadingSpinner speed="slow" color="#f59e0b" />
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-4">Spinner Variants</h3>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <LoadingSpinner variant="default" />
                <p className="mt-2 text-sm text-gray-600">Default</p>
              </div>
              <div className="text-center">
                <LoadingSpinner variant="dots" />
                <p className="mt-2 text-sm text-gray-600">Dots</p>
              </div>
              <div className="text-center">
                <LoadingSpinner variant="pulse" />
                <p className="mt-2 text-sm text-gray-600">Pulse</p>
              </div>
              <div className="text-center">
                <LoadingSpinner variant="bounce" />
                <p className="mt-2 text-sm text-gray-600">Bounce</p>
              </div>
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-4">
              Inline Loading Examples
            </h3>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <LoadingSpinner size={20} />
                <span className="text-gray-700">Loading data...</span>
              </div>
              <div className="flex items-center space-x-3">
                <LoadingSpinner variant="dots" size={20} />
                <span className="text-gray-700">Processing request...</span>
              </div>
              <div className="flex items-center space-x-3">
                <LoadingSpinner size={16} color="#10b981" />
                <span className="text-gray-700">Upload in progress...</span>
              </div>
            </div>
          </div>
        </div>

        {/* Line Progress Bars */}
        <div className="space-y-8 mb-12">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Line Progress Bars
          </h2>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-4">Default Progress Bar</h3>
            <LineProgressBar progress={progress} showPercentage />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-4">
              Custom Styled Progress Bar
            </h3>
            <LineProgressBar
              progress={progress}
              height={12}
              backgroundColor="#f3f4f6"
              progressColor="#10b981"
              showPercentage
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-4">Thick Progress Bar</h3>
            <LineProgressBar
              progress={progress}
              height={20}
              backgroundColor="#fef3c7"
              progressColor="#f59e0b"
              showPercentage
            />
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-4">
              Static Progress (No Animation)
            </h3>
            <LineProgressBar
              progress={75}
              height={10}
              backgroundColor="#fecaca"
              progressColor="#ef4444"
              showPercentage
              animated={false}
            />
          </div>
        </div>

        {/* Circular Progress */}
        <div className="space-y-8">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            Circular Progress
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center">
              <h3 className="text-lg font-medium mb-4">Default</h3>
              <CircularProgress progress={progress} />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center">
              <h3 className="text-lg font-medium mb-4">Large Size</h3>
              <CircularProgress
                progress={progress}
                size={120}
                strokeWidth={12}
                progressColor="#10b981"
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center">
              <h3 className="text-lg font-medium mb-4">Thin Stroke</h3>
              <CircularProgress
                progress={progress}
                size={100}
                strokeWidth={4}
                progressColor="#f59e0b"
              />
            </div>

            <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col items-center">
              <h3 className="text-lg font-medium mb-4">No Percentage</h3>
              <CircularProgress
                progress={progress}
                size={100}
                strokeWidth={10}
                progressColor="#ef4444"
                showPercentage={false}
              />
            </div>
          </div>

          <div className="bg-white p-6 rounded-lg shadow-sm">
            <h3 className="text-lg font-medium mb-4">
              Multiple Circular Progress
            </h3>
            <div className="flex justify-center gap-8">
              <div className="text-center">
                <CircularProgress
                  progress={25}
                  size={80}
                  strokeWidth={6}
                  progressColor="#3b82f6"
                  animated={false}
                />
                <p className="mt-2 text-sm text-gray-600">Task 1</p>
              </div>
              <div className="text-center">
                <CircularProgress
                  progress={60}
                  size={80}
                  strokeWidth={6}
                  progressColor="#10b981"
                  animated={false}
                />
                <p className="mt-2 text-sm text-gray-600">Task 2</p>
              </div>
              <div className="text-center">
                <CircularProgress
                  progress={90}
                  size={80}
                  strokeWidth={6}
                  progressColor="#f59e0b"
                  animated={false}
                />
                <p className="mt-2 text-sm text-gray-600">Task 3</p>
              </div>
            </div>
          </div>
        </div>

        {/* Usage Examples */}
        <div className="mt-12 bg-white p-6 rounded-lg shadow-sm">
          <h3 className="text-lg font-medium mb-4">Usage Examples</h3>
          <div className="bg-gray-100 p-4 rounded-lg">
            <pre className="text-sm text-gray-800 overflow-x-auto">
              {`// Line Progress Bar
              <LineProgressBar 
                progress={75} 
                height={10}
                backgroundColor="#e5e7eb"
                progressColor="#3b82f6"
                showPercentage={true}
                animated={true}
              />

              // Circular Progress
              <CircularProgress 
                progress={75} 
                size={100}
                strokeWidth={8}
                backgroundColor="#e5e7eb"
                progressColor="#3b82f6"
                showPercentage={true}
                animated={true}
              />

              // Loading Spinner
              <LoadingSpinner 
                size={40}
                color="#3b82f6"
                speed="medium"
                variant="default"
              />

              // Loading Overlay
              <LoadingOverlay
                isLoading={true}
                message="Please wait..."
                spinnerProps={{ size: 50, color: "#3b82f6" }}
              />`}
            </pre>
          </div>
        </div>
      </div>

      {/* Loading Overlay */}
      <LoadingOverlay
        isLoading={isLoading}
        message="Loading data, please wait..."
        spinnerProps={{ size: 50, color: "#3b82f6" }}
      />
    </div>
  );
}
