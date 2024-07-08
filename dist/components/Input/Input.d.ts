import React from "react";
import styles from "./Input.module.css";
export interface InputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, "style"> {
    icon?: string;
    onIconClick?: () => void;
    bg?: string;
    textColor?: string;
    borderColor?: string;
    style?: React.CSSProperties & {
        "--input-custom-bg"?: string;
        "--input-custom-text"?: string;
        "--input-custom-border"?: string;
    };
}
export declare const Input: React.FC<InputProps>;
export default Input;
export { styles as InputStyles };
