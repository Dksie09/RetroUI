import React from "react";
import styles from "./ProgressBar.css";

export interface ProgressBarProps {
  progress: number;
  className?: string;
  showPercentage?: boolean;
  color?: "primary" | "secondary";
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

  const containerClasses = `${styles.pixelProgressbarContainer} ${
    styles[`pixelProgressbar${size.charAt(0).toUpperCase() + size.slice(1)}`]
  } ${className}`.trim();
  const barClasses = `${styles.pixelProgressbar} ${
    styles[`pixelProgressbar${color.charAt(0).toUpperCase() + color.slice(1)}`]
  }`;

  return (
    <div className={containerClasses}>
      <div
        className={barClasses}
        style={{ width: `${clampedProgress}%` }}
      ></div>
      {showPercentage && (
        <div className={styles.pixelProgressbarPercentage}>
          {clampedProgress}%
        </div>
      )}
    </div>
  );
};

export { styles as ProgressBarStyles };
export default ProgressBar;
