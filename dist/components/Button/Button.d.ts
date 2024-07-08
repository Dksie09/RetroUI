import React from "react";
import styles from "./Button.module.css";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    bg?: string;
    textColor?: string;
    shadow?: string;
    borderColor?: string;
}
export declare const Button: React.FC<ButtonProps>;
export { styles as ButtonStyles };
