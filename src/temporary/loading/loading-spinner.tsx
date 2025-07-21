import React from "react";

interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  speed?: "slow" | "medium" | "fast";
  variant?: "default" | "dots" | "pulse" | "bounce";
  className?: string;
}

export const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({
  size = 40,
  color = "#3b82f6",
  strokeWidth = 4,
  speed = "medium",
  variant = "default",
  className = "",
}) => {
  const getSpeedClass = () => {
    switch (speed) {
      case "slow":
        return "animate-spin-slow";
      case "fast":
        return "animate-spin-fast";
      default:
        return "animate-spin";
    }
  };

  if (variant === "dots") {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <div className="flex space-x-1">
          {[0, 1, 2].map((i) => (
            <div
              key={i}
              className={`w-2 h-2 rounded-full animate-bounce`}
              style={{
                backgroundColor: color,
                animationDelay: `${i * 0.1}s`,
                animationDuration: "1.4s",
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  if (variant === "pulse") {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <div
          className="rounded-full animate-pulse"
          style={{
            width: size,
            height: size,
            backgroundColor: color,
            animationDuration: "1.5s",
          }}
        />
      </div>
    );
  }

  if (variant === "bounce") {
    return (
      <div className={`inline-flex items-center justify-center ${className}`}>
        <div className="flex space-x-1">
          {[0, 1, 2, 3, 4].map((i) => (
            <div
              key={i}
              className="w-2 h-8 rounded-full animate-bounce"
              style={{
                backgroundColor: color,
                animationDelay: `${i * 0.1}s`,
                animationDuration: "1.2s",
              }}
            />
          ))}
        </div>
      </div>
    );
  }

  // Default circular spinner
  return (
    <div className={`inline-flex items-center justify-center ${className}`}>
      <div className={`${getSpeedClass()}`}>
        <svg
          width={size}
          height={size}
          viewBox="0 0 24 24"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* <circle
            cx="12"
            cy="12"
            r="10"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray="32"
            strokeDashoffset="32"
            opacity="0.3"
          /> */}
          <circle
            cx="12"
            cy="12"
            r="10"
            stroke={color}
            strokeWidth={strokeWidth}
            strokeLinecap="round"
            strokeDasharray="32"
            strokeDashoffset="24"
          />
        </svg>
      </div>
    </div>
  );
};
