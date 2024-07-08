import React, { TextareaHTMLAttributes, forwardRef, useMemo } from "react";
import styles from "./TextArea.module.css";

export interface TextAreaProps
  extends TextareaHTMLAttributes<HTMLTextAreaElement> {
  bg?: string;
  textColor?: string;
  borderColor?: string;
}

export const TextArea = forwardRef<HTMLTextAreaElement, TextAreaProps>(
  ({ className = "", bg, textColor, borderColor, style, ...props }, ref) => {
    const svgString = useMemo(() => {
      const color = borderColor || "currentColor";
      const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="${color}"/></svg>`;
      return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
    }, [borderColor]);

    const customStyle = {
      ...style,
      "--textarea-custom-bg": bg,
      "--textarea-custom-text": textColor,
      "--textarea-custom-border": borderColor,
      borderImageSource: svgString,
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
