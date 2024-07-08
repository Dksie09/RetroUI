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
      const color = borderColor || "rgb(var(--border-textarea-rgb, 0,0,0))";
      return `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='8' height='8'%3E%3Cpath d='M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z' fill='${encodeURIComponent(
        color
      )}'/%3E%3C/svg%3E")`;
    }, [borderColor]);

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
      "--border-image-source": svgString,
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
