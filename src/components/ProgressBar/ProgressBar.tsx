import React from "react";
import "./ProgressBar.css";

export interface ProgressBarProps {
  progress: number;
  className?: string;
  showPercentage?: boolean;
  color?: "primary" | "secondary" | "success" | "danger";
  size?: "sm" | "md" | "lg";
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  className = "",
  showPercentage = true,
  color = "primary",
  size = "md",
}) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  const containerClasses =
    `pixel-progressbar-container pixel-progressbar-${size} ${className}`.trim();
  const barClasses = `pixel-progressbar pixel-progressbar-${color}`;

  return (
    <div className={containerClasses}>
      <div
        className={barClasses}
        style={{ width: `${clampedProgress}%` }}
      ></div>
      {showPercentage && (
        <div className="pixel-progressbar-percentage">{clampedProgress}%</div>
      )}
    </div>
  );
};

export default ProgressBar;
