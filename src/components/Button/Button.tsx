import React from "react";
import styles from "./Button.module.css"; // Change the import to use .module.css

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: "primary" | "secondary" | "outline";
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = "primary",
  className = "",
  style,
  ...props
}) => {
  const baseClasses = `font-minecraft ${styles.pixelButton} px-2 my-2 mx-3`;
  const variantClasses =
    styles[`pixelButton${variant.charAt(0).toUpperCase() + variant.slice(1)}`];

  return (
    <button
      className={`${baseClasses} ${variantClasses} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </button>
  );
};

export { styles as ButtonStyles };
