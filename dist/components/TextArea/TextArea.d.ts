import React, { TextareaHTMLAttributes } from "react";
import styles from "./TextArea.module.css";
export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
}
export declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
export { styles as TextAreaStyles };
export default TextArea;
