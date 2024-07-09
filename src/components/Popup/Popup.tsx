import React, { useMemo } from "react";
import styles from "./Popup.module.css";

export interface PopupProps {
  isOpen: boolean;
  onClose: () => void;
  className?: string;
  children: React.ReactNode;
  title?: string;
  closeButtonText?: string;
  bg?: string;
  baseBg?: string;
  overlayBg?: string;
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
  bg,
  baseBg,
  overlayBg,
  textColor,
  borderColor,
}) => {
  if (!isOpen) return null;

  const svgString = useMemo(() => {
    const color = borderColor || "currentColor";
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="${color}"/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }, [borderColor]);

  const customStyle = {
    "--popup-bg": bg,
    "--popup-base-bg": baseBg,
    "--popup-overlay-bg": overlayBg,
    "--popup-text": textColor,
    "--popup-border": borderColor,
    "--popup-border-svg": svgString,
  } as React.CSSProperties;

  return (
    <div
      className={`${styles.pixelPopupOverlay} ${className}`}
      onClick={onClose}
      style={customStyle}
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
