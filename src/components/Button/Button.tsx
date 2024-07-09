import React, { useMemo } from "react";
import styles from "./Button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bg?: string;
  textColor?: string;
  shadow?: string;
  borderColor?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  className = "",
  bg,
  textColor,
  shadow,
  borderColor,
  style,
  ...props
}) => {
  const svgString = useMemo(() => {
    const color = borderColor || "currentColor";
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="${color}"/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }, [borderColor]);

  const customStyle = {
    ...style,
    "--button-custom-bg": bg,
    "--button-custom-text": textColor,
    "--button-custom-shadow": shadow,
    "--button-custom-border": borderColor,
    borderImageSource: svgString,
  };

  return (
    <button
      className={`${styles.pixelButton} ${className} p-0`}
      style={customStyle}
      {...props}
    >
      {children}
    </button>
  );
};

export { styles as ButtonStyles };
