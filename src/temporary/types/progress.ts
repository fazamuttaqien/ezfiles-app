export interface ProgressProps {
  progress: number;
  animated?: boolean;
  className?: string;
}

export interface LineProgressBarProps extends ProgressProps {
  height?: number;
  backgroundColor?: string;
  progressColor?: string;
  showPercentage?: boolean;
}

export interface CircularProgressProps extends ProgressProps {
  size?: number;
  strokeWidth?: number;
  backgroundColor?: string;
  progressColor?: string;
  showPercentage?: boolean;
}

export interface LoadingSpinnerProps {
  size?: number;
  color?: string;
  strokeWidth?: number;
  speed?: "slow" | "medium" | "fast";
  variant?: "default" | "dots" | "pulse" | "bounce";
  className?: string;
}
