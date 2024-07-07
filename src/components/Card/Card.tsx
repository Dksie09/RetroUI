import React, { FC, ReactNode } from "react";
import styles from "./Card.css";

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
  const baseClasses = `${styles.pixelCard} ${styles.fontMinecraft}`;
  const variantClasses =
    variant === "outline" ? styles.pixelCardOutline : styles.pixelCardDefault;

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
