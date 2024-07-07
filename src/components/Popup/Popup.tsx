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
    <div
      className={`${styles.pixelPopupOverlay} ${className}`}
      onClick={onClose}
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
