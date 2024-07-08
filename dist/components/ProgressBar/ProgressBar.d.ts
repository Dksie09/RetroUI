import React from "react";
import styles from "./ProgressBar.module.css";
export interface ProgressBarProps {
    progress: number;
    className?: string;
    size?: "sm" | "md" | "lg";
    color?: string;
    borderColor?: string;
}
export declare const ProgressBar: React.FC<ProgressBarProps>;
export { styles as ProgressBarStyles };
export default ProgressBar;
