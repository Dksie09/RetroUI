import React, { TextareaHTMLAttributes } from "react";
import styles from "./TextArea.module.css";
export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
    bg?: string;
    textColor?: string;
    borderColor?: string;
}
export declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
export { styles as TextAreaStyles };
export default TextArea;
