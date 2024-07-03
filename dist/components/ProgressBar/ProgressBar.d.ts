import React from "react";
import "./ProgressBar.css";
export interface ProgressBarProps {
    progress: number;
    className?: string;
    showPercentage?: boolean;
    color?: "primary" | "secondary" | "success" | "danger";
    size?: "sm" | "md" | "lg";
}
export declare const ProgressBar: React.FC<ProgressBarProps>;
export default ProgressBar;
