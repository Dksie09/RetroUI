import React from "react";
import styles from "./ProgressBar.css";
export interface ProgressBarProps {
    progress: number;
    className?: string;
    showPercentage?: boolean;
    color?: "primary" | "secondary";
    size?: "sm" | "md" | "lg";
}
export declare const ProgressBar: React.FC<ProgressBarProps>;
export { styles as ProgressBarStyles };
export default ProgressBar;
