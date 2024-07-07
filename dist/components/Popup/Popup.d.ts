import React from "react";
import styles from "./Popup.module.css";
export interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
    children: React.ReactNode;
    title?: string;
    closeButtonText?: string;
}
export declare const Popup: React.FC<PopupProps>;
export { styles as PopupStyles };
export default Popup;
