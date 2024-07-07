import React, { FC, ReactNode } from "react";
import styles from "./Card.module.css";

export interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
}

export const Card: FC<CardProps> = ({
  children,
  className = "",
  variant = "primary",
  ...props
}) => {
  const baseClasses = styles.pixelCard;
  const variantClasses =
    styles[`pixelCard${variant.charAt(0).toUpperCase() + variant.slice(1)}`];

  return (
    <div className={`${baseClasses} ${variantClasses} ${className}`} {...props}>
      {children}
    </div>
  );
};

export const CardHeader: FC<CardProps> = ({
  children,
  className = "",
  ...props
}) => (
  <div className={`${styles.pixelCardHeader} ${className}`} {...props}>
    {children}
  </div>
);

export const CardTitle: FC<CardProps> = ({
  children,
  className = "",
  ...props
}) => (
  <h3 className={`${styles.pixelCardTitle} ${className}`} {...props}>
    {children}
  </h3>
);

export const CardDescription: FC<CardProps> = ({
  children,
  className = "",
  ...props
}) => (
  <p className={`${styles.pixelCardDescription} ${className}`} {...props}>
    {children}
  </p>
);

export const CardContent: FC<CardProps> = ({
  children,
  className = "",
  ...props
}) => (
  <div className={`${styles.pixelCardContent} ${className}`} {...props}>
    {children}
  </div>
);

export const CardFooter: FC<CardProps> = ({
  children,
  className = "",
  ...props
}) => (
  <div className={`${styles.pixelCardFooter} ${className}`} {...props}>
    {children}
  </div>
);

export default Card;

export { styles as CardStyles };
