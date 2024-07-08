import React, { FC, ReactNode } from "react";
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
export declare const Card: FC<CardProps>;
export default Card;
export { styles as CardStyles };
