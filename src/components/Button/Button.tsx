import React from "react";
import styles from "./Button.css";

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
    variant === "primary"
      ? styles.pixelButtonPrimary
      : variant === "secondary"
      ? styles.pixelButtonSecondary
      : styles.pixelButtonOutline;

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
