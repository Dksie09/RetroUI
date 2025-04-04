import React, { FC, ReactNode, useMemo } from "react";
import styles from "./Bubble.module.css";

export interface BubbleProps {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
  direction: "left" | "right";
  borderColor?: string;
  bg?: string;
  textColor?: string;
}

export const Bubble = ({
  children,
  className = "",
  onClick,
  direction,
  borderColor = "#000000",
  bg = "#ffffff",
  textColor = "#000000",
}: BubbleProps): JSX.Element => {
  const svgString = useMemo(() => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8" viewBox="0 0 8 8"><path d="M3 1 h1 v1 h-1 z M4 1 h1 v1 h-1 z M2 2 h1 v1 h-1 z M5 2 h1 v1 h-1 z M1 3 h1 v1 h-1 z M6 3 h1 v1 h-1 z M1 4 h1 v1 h-1 z M6 4 h1 v1 h-1 z M2 5 h1 v1 h-1 z M5 5 h1 v1 h-1 z M3 6 h1 v1 h-1 z M4 6 h1 v1 h-1 z" fill="${borderColor}" /></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }, [borderColor]);

  const customStyle = {
    "--bubble-border-color": borderColor,
    "--bubble-bg-color": bg,
    "--bubble-text-color": textColor,
    "--bubble-border-image": svgString,
  } as React.CSSProperties;

  return (
    <div
      onClick={onClick}
      className={`${styles.balloon} ${styles[`from-${direction}`]} ${
        styles.roundedCorners
      } ${className}`}
      style={customStyle}
    >
      {children}
    </div>
  );
};

export default Bubble;

export { styles as BubbleStyles };
