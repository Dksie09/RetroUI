import React from "react";
import styles from "./Popup.module.css";

export interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
  title?: string;
  closeButtonText?: string;
  outerBg?: string;
  innerBg?: string;
  textColor?: string;
  borderColor?: string;
}

export const Popup: React.FC<PopupProps> = ({
  isOpen,
  onClose,
  className = "",
  children,
  title,
  closeButtonText = "X",
  outerBg,
  innerBg,
  textColor,
  borderColor,
}) => {
  if (!isOpen) return null;

  const customStyle = {
    "--custom-outer-bg": outerBg,
    "--custom-inner-bg": innerBg,
    "--custom-text": textColor,
    "--custom-border": borderColor,
  };

  return (
    <div
      className={`${styles.pixelPopupOverlay} ${className}`}
      onClick={onClose}
      style={customStyle as React.CSSProperties}
    >
      <div className={styles.pixelPopup} onClick={(e) => e.stopPropagation()}>
        <div className={styles.pixelPopupInner}>
          {title && <h2 className={styles.pixelPopupTitle}>{title}</h2>}
          <button className={styles.pixelPopupCloseButton} onClick={onClose}>
            {closeButtonText}
          </button>
          <div className={styles.pixelPopupContent}>{children}</div>
        </div>
      </div>
    </div>
  );
};

export { styles as PopupStyles };
export default Popup;
