import React, { createContext, useContext, ReactNode, useMemo } from "react";
import styles from "./DropdownMenu.module.css";

interface DropdownContextType {
  bg?: string;
  textColor?: string;
  borderColor?: string;
}

const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined
);

export interface DropdownMenuProps {
  children: ReactNode;
  className?: string;
  bg?: string;
  textColor?: string;
  borderColor?: string;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  className = "",
  bg,
  textColor,
  borderColor,
}) => {
  const svgString = useMemo(() => {
    const color = borderColor || "currentColor";
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="${color}"/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }, [borderColor]);

  const customStyle = {
    "--dropdown-custom-bg": bg,
    "--dropdown-custom-text": textColor,
    "--dropdown-custom-border": borderColor,
    borderImageSource: svgString,
  };

  return (
    <DropdownContext.Provider value={{ bg, textColor, borderColor }}>
      <div
        className={`${styles.pixelDropdown} ${className}`}
        style={customStyle}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export const DropdownMenuTrigger: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <div className={styles.pixelDropdownTrigger}>
      {children}
      <span className={styles.pixelDropdownArrow}>&gt;</span>
    </div>
  );
};

export const DropdownMenuContent: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return <div className={styles.pixelDropdownContent}>{children}</div>;
};

interface DropdownMenuItemProps {
  children: ReactNode;
  onClick?: () => void;
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  children,
  onClick,
}) => {
  return (
    <div className={styles.pixelDropdownItem} onClick={onClick}>
      {children}
    </div>
  );
};

export { styles as DropdownMenuStyles };
