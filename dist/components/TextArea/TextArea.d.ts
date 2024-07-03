import React, { TextareaHTMLAttributes } from "react";
import "./TextArea.css";
export interface TextAreaProps extends TextareaHTMLAttributes<HTMLTextAreaElement> {
}
export declare const TextArea: React.ForwardRefExoticComponent<TextAreaProps & React.RefAttributes<HTMLTextAreaElement>>;
export default TextArea;
