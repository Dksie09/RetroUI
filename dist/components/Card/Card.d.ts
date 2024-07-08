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
export declare const Card: FC<CardProps>;
export declare const CardHeader: FC<CardProps>;
export declare const CardTitle: FC<CardProps>;
export declare const CardDescription: FC<CardProps>;
export declare const CardContent: FC<CardProps>;
export declare const CardFooter: FC<CardProps>;
export default Card;
export { styles as CardStyles };
