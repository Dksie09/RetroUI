import React, { TextareaHTMLAttributes, forwardRef } from "react";
import styles from "./TextArea.module.css";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  bg?: string;
  textColor?: string;
  borderColor?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = "", bg, textColor, borderColor, style, ...props }, ref) => {
    const customStyle = {
      ...style,
      ...(bg && { "--custom-bg": bg }),
      ...(textColor && { "--custom-text": textColor }),
      ...(borderColor && { "--custom-border": borderColor }),
    };

    return (
      <textarea
        ref={ref}
        className={`${styles.pixelTextarea} font-minecraft ${className}`}
        style={customStyle}
        {...props}
      />
    );
  }
);

TextArea.displayName = "TextArea";

export { styles as TextAreaStyles };

export default TextArea;
