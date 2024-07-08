import React from "react";
import styles from "./Button.module.css";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
    bg?: string;
    textColor?: string;
    shadow?: string;
}
export declare const Button: React.FC<ButtonProps>;
export { styles as ButtonStyles };
