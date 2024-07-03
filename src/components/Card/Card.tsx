import React, { FC, ReactNode } from "react";
import "./Card.css";

export interface CardProps {
  children: ReactNode;
  className?: string;
  style?: React.CSSProperties;
  variant?: "default" | "outline";
}

export const Card: FC<CardProps> = ({
  children,
  className = "",
  style,
  variant = "default",
  ...props
}) => {
  const baseClasses = "pixel-card font-minecraft";
  const variantClasses =
    variant === "outline" ? "pixel-card-outline" : "pixel-card-default";

  return (
    <div
      className={`${baseClasses} ${variantClasses} ${className}`}
      style={style}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: FC<CardProps> = ({
  children,
  className = "",
  ...props
}) => (
  <div className={`pixel-card-header ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle: FC<CardProps> = ({
  children,
  className = "",
  ...props
}) => (
  <h3 className={`pixel-card-title ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription: FC<CardProps> = ({
  children,
  className = "",
  ...props
}) => (
  <p className={`pixel-card-description ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent: FC<CardProps> = ({
  children,
  className = "",
  ...props
}) => (
  <div className={`pixel-card-content ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter: FC<CardProps> = ({
  children,
  className = "",
  ...props
}) => (
  <div className={`pixel-card-footer ${className}`} {...props}>
    {children}
  </div>
);

export default Card;
