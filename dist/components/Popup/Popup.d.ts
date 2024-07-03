import React from "react";
import "./Popup.css";
export interface PopupProps {
    isOpen: boolean;
    onClose: () => void;
    className?: string;
    children: React.ReactNode;
    title?: string;
    closeButtonText?: string;
}
export declare const Popup: React.FC<PopupProps>;
export default Popup;
