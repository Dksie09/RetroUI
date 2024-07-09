import React, { createContext, useContext, ReactNode, useMemo } from "react";
import styles from "./DropdownMenu.module.css";

interface DropdownContextType {
  bg?: string;
  textColor?: string;
  borderColor?: string;
  svgString?: string;
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
    const color = borderColor || "rgb(0,0,0)";
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="${color}"/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }, [borderColor]);

  const contextValue = useMemo(
    () => ({ bg, textColor, borderColor, svgString }),
    [bg, textColor, borderColor, svgString]
  );

  return (
    <DropdownContext.Provider value={contextValue}>
      <div className={`${styles.pixelDropdown} ${className}`}>{children}</div>
    </DropdownContext.Provider>
  );
};

export const DropdownMenuTrigger: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const context = useContext(DropdownContext);
  const customStyle = {
    "--dropdown-custom-bg": context?.bg,
    "--dropdown-custom-text": context?.textColor,
    "--dropdown-custom-border": context?.borderColor,
    borderImageSource: context?.svgString,
  };

  return (
    <div className={styles.pixelDropdownTrigger} style={customStyle}>
      {children}
      <span className={styles.pixelDropdownArrow}>&gt;</span>
    </div>
  );
};

export const DropdownMenuContent: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const context = useContext(DropdownContext);
  const customStyle = {
    "--dropdown-custom-bg": context?.bg,
    "--dropdown-custom-text": context?.textColor,
    "--dropdown-custom-border": context?.borderColor,
    borderImageSource: context?.svgString,
  };

  return (
    <div className={styles.pixelDropdownContent} style={customStyle}>
      {children}
    </div>
  );
};

export const DropdownMenuItem: React.FC<{
  children: ReactNode;
  onClick?: () => void;
}> = ({ children, onClick }) => {
  return (
    <a className={styles.pixelDropdownItem} onClick={onClick}>
      {children}
    </a>
  );
};

export { styles as DropdownMenuStyles };
