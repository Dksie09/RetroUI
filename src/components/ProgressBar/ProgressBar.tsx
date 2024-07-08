import React from "react";
import styles from "./ProgressBar.module.css";

// Define a custom type for our style object
type CustomCSSProperties = React.CSSProperties & {
  "--custom-bg"?: string;
  "--custom-bar-color"?: string;
  "--custom-text-color"?: string;
};

export interface ProgressBarProps {
  progress: number;
  className?: string;
  showPercentage?: boolean;
  showText?: boolean;
  color?: "primary" | "secondary";
  size?: "sm" | "md" | "lg";
  bg?: string;
  barColor?: string;
  textColor?: string;
}

export const ProgressBar: React.FC<ProgressBarProps> = ({
  progress,
  className = "",
  showPercentage = true,
  showText = true,
  color = "primary",
  size = "md",
  bg,
  barColor,
  textColor,
}) => {
  const clampedProgress = Math.min(Math.max(progress, 0), 100);

  const containerClasses = `${styles.pixelProgressbarContainer} ${
    styles[`pixelProgressbar${size.charAt(0).toUpperCase() + size.slice(1)}`]
  } ${className}`.trim();
  const barClasses = `${styles.pixelProgressbar} ${
    styles[`pixelProgressbar${color.charAt(0).toUpperCase() + color.slice(1)}`]
  }`;

  const customStyle: CustomCSSProperties = {
    ...(bg && { "--custom-bg": bg }),
    ...(barColor && { "--custom-bar-color": barColor }),
    ...(textColor && { "--custom-text-color": textColor }),
  };

  return (
    <div className={containerClasses} style={customStyle}>
      <div
        className={barClasses}
        style={{ width: `${clampedProgress}%` }}
      ></div>
      {(showPercentage || showText) && (
        <div className={styles.pixelProgressbarPercentage}>
          {showText && clampedProgress}
          {showPercentage && "%"}
        </div>
      )}
    </div>
  );
};

export { styles as ProgressBarStyles };
export default ProgressBar;
