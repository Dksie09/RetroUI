import React from "react";
import "./Input.css";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: string;
    onIconClick?: () => void;
}
export declare const Input: React.FC<InputProps>;
export default Input;
