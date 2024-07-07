import React, { TextareaHTMLAttributes, forwardRef } from "react";
import styles from "./TextArea.module.css";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = "", ...props }, ref) => {
    return (
      <textarea
        ref={ref}
        className={`${styles.pixelTextarea} ${className}`}
        {...props}
      />
    );
  }
);

TextArea.displayName = "TextArea";

export { styles as TextAreaStyles };

export default TextArea;
