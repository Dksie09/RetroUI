import React from "react";
import styles from "./Button.module.css";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
  bg?: string;
  textColor?: string;
  shadow?: string;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  bg,
  textColor,
  shadow,
  style,
  ...props
}) => {
  const baseClasses = styles.pixelButton;
  const variantClasses =
    styles[`pixelButton${variant.charAt(0).toUpperCase() + variant.slice(1)}`];

  const customStyle = {
    ...style,
    ...(bg && { "--custom-bg": bg }),
    ...(textColor && { "--custom-text": textColor }),
    ...(shadow && { "--custom-shadow": shadow }),
  };

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      style={customStyle}
      {...props}
    >
      {children}
    </button>
  );
};

export { styles as ButtonStyles };
