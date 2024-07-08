import React, { FC, ReactNode, useMemo } from "react";
import styles from "./Card.module.css";

export interface CardProps {
  children: ReactNode;
  className?: string;
  bg?: string;
  textColor?: string;
  borderColor?: string;
  shadowColor?: string;
  style?: React.CSSProperties;
}

export const Card: FC<CardProps> = ({
  children,
  className = "",
  bg,
  textColor,
  borderColor,
  shadowColor,
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
    "--card-custom-bg": bg,
    "--card-custom-text": textColor,
    "--card-custom-border": borderColor,
    "--card-custom-shadow": shadowColor,
    borderImageSource: svgString,
  };

  return (
    <div
      className={`${styles.pixelCard} ${className}`}
      style={customStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export default Card;

export { styles as CardStyles };
