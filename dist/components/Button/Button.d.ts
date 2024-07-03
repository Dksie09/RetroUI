import React from "react";
import "./Button.css";
export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    variant?: "primary" | "secondary" | "outline";
}
export declare const Button: React.FC<ButtonProps>;
