import { FC, ReactNode } from "react";
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
export declare const Bubble: FC<BubbleProps>;
export default Bubble;
export { styles as BubbleStyles };
