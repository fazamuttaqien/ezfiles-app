import React from "react";
import { LoadingSpinner } from "./loading-spinner";

interface LoadingOverlayProps {
  isLoading: boolean;
  message?: string;
  overlay?: boolean;
  spinnerProps?: {
    size?: number;
    color?: string;
    variant?: "default" | "dots" | "pulse" | "bounce";
    speed?: "slow" | "medium" | "fast";
  };
  className?: string;
}

export const LoadingOverlay: React.FC<LoadingOverlayProps> = ({
  isLoading,
  message = "Loading...",
  overlay = true,
  spinnerProps = {},
  className = "",
}) => {
  if (!isLoading) return null;

  const overlayClasses = overlay
    ? "fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50"
    : "flex items-center justify-center p-8";

  return (
    <div className={`${overlayClasses} ${className}`}>
      <div className="bg-white rounded-lg p-6 shadow-lg flex flex-col items-center">
        <LoadingSpinner {...spinnerProps} />
        {message && <p className="mt-4 text-gray-700 text-center">{message}</p>}
      </div>
    </div>
  );
};
