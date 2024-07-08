import React, { FC, ReactNode } from "react";
import styles from "./Card.module.css";

export interface CardProps {
  children: ReactNode;
  className?: string;
  variant?: "primary" | "secondary" | "outline";
  bg?: string;
  textColor?: string;
  shadow?: string;
  style?: React.CSSProperties;
}

export const Card: FC<CardProps> = ({
  children,
  className = "",
  variant = "primary",
  bg,
  textColor,
  shadow,
  style,
  ...props
}) => {
  const baseClasses = styles.pixelCard;
  const variantClasses =
    styles[`pixelCard${variant.charAt(0).toUpperCase() + variant.slice(1)}`];

  const customStyle = {
    ...style,
    ...(bg && { "--custom-bg": bg }),
    ...(textColor && { "--custom-text": textColor }),
    ...(shadow && { "--custom-shadow": shadow }),
  };

  return (
    <div
      className={`${baseClasses} ${variantClasses} ${className}`}
      style={customStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardHeader: FC<CardProps> = ({
  children,
  className = "",
  textColor,
  style,
  ...props
}) => {
  const customStyle = {
    ...style,
    ...(textColor && { "--custom-text": textColor }),
  };

  return (
    <div
      className={`${styles.pixelCardHeader} ${className}`}
      style={customStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export const CardTitle: FC<CardProps> = ({
  children,
  className = "",
  textColor,
  style,
  ...props
}) => {
  const customStyle = {
    ...style,
    ...(textColor && { "--custom-text": textColor }),
  };

  return (
    <h3
      className={`${styles.pixelCardTitle} ${className}`}
      style={customStyle}
      {...props}
    >
      {children}
    </h3>
  );
};

export const CardDescription: FC<CardProps> = ({
  children,
  className = "",
  textColor,
  style,
  ...props
}) => {
  const customStyle = {
    ...style,
    ...(textColor && { "--custom-text": textColor }),
  };

  return (
    <p
      className={`${styles.pixelCardDescription} ${className}`}
      style={customStyle}
      {...props}
    >
      {children}
    </p>
  );
};

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
  textColor,
  style,
  ...props
}) => {
  const customStyle = {
    ...style,
    ...(textColor && { "--custom-text": textColor }),
  };

  return (
    <div
      className={`${styles.pixelCardFooter} ${className}`}
      style={customStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

export { styles as CardStyles };
