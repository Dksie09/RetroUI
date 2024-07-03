import React from "react";
import { Button } from "../Button/Button"; // Import the Button component
import "./Popup.css";

export interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
  title?: string;
  closeButtonText?: string;
}

export const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  className = "",
  children,
  title,
  closeButtonText = "X",
}) => {
  if (!isOpen) return null;

  return (
    <div className={`pixel-popup-overlay ${className}`} onClick={onClose}>
      <div className="pixel-popup" onClick={(e) => e.stopPropagation()}>
        {/* <div className="pixel-popup-middle"> */}
        <div className="pixel-popup-inner">
          {title && <h2 className="pixel-popup-title">{title}</h2>}
          <button className="pixel-popup-close-button" onClick={onClose}>
            X
          </button>
          <div className="pixel-popup-content">{children}</div>
        </div>
        {/* </div> */}
      </div>
    </div>
  );
};

export default Popup;
