import React from "react";
import "./Button.css";

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
  const baseClasses = "font-minecraft pixel-button px-2 my-2 mx-3";
  const variantClasses =
    variant === "primary"
      ? "pixel-button-primary"
      : variant === "secondary"
      ? "pixel-button-secondary"
      : "pixel-button-outline";

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
