import React, { TextareaHTMLAttributes, forwardRef } from "react";
import "./TextArea.css";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`pixel-textarea m-2 font-minecraft ${className}`}
        {...props}
      />
    );
  }
);

TextArea.displayName = "TextArea";

export default TextArea;
