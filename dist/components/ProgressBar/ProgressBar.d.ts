import React from "react";
import styles from "./ProgressBar.module.css";
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
export declare const ProgressBar: React.FC<ProgressBarProps>;
export { styles as ProgressBarStyles };
export default ProgressBar;
