import React from "react";

interface LineProgressBarProps {
  progress: number;
  height?: number;
  backgroundColor?: string;
  progressColor?: string;
  showPercentage?: boolean;
  animated?: boolean;
  className?: string;
}

export const LineProgressBar: React.FC<LineProgressBarProps> = ({
  progress,
  height = 8,
  backgroundColor = "#e5e7eb",
  progressColor = "#3b82f6",
  showPercentage = false,
  animated = true,
  className = "",
}) => {
  const clampedProgress = Math.max(0, Math.min(100, progress));

  return (
    <div className={`w-full ${className}`}>
      <div
        className="relative overflow-hidden rounded-full"
        style={{
          height: `${height}px`,
          backgroundColor,
        }}
      >
        <div
          className={`h-full rounded-full ${
            animated ? "transition-all duration-300 ease-out" : ""
          }`}
          style={{
            width: `${clampedProgress}%`,
            backgroundColor: progressColor,
          }}
        />
      </div>
      {showPercentage && (
        <div className="mt-2 text-sm text-gray-600 text-center">
          {Math.round(clampedProgress)}%
        </div>
      )}
    </div>
  );
};
