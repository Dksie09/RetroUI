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
      ...(borderColor && {
        "--custom-border-rgb": borderColor.startsWith("#")
          ? `${parseInt(borderColor.slice(1, 3), 16)},${parseInt(
              borderColor.slice(3, 5),
              16
            )},${parseInt(borderColor.slice(5, 7), 16)}`
          : borderColor,
      }),
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
