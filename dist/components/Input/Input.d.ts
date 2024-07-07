import React from "react";
import styles from "./Input.module.css";
export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
    icon?: string;
    onIconClick?: () => void;
}
export declare const Input: React.FC<InputProps>;
export default Input;
export { styles as InputStyles };
