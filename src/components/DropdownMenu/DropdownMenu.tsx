import React, { useState, createContext, useContext, ReactNode } from "react";
import styles from "./DropdownMenu.module.css";

interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
}

const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined
);

export interface DropdownMenuProps {
  children: ReactNode;
  className?: string;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  className = "",
}) => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen }}>
      <div className={`${styles.pixelDropdown} ${className}`}>{children}</div>
    </DropdownContext.Provider>
  );
};

export const DropdownMenuTrigger: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const context = useContext(DropdownContext);
  if (!context)
    throw new Error("DropdownMenuTrigger must be used within a DropdownMenu");

  return (
    <button className={styles.pixelDropdownTrigger}>
      {children}
      <img
        src="/icons/new_play.png"
        alt="Toggle Dropdown"
        className={styles.pixelDropdownArrow}
      />
    </button>
  );
};

export const DropdownMenuContent: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const context = useContext(DropdownContext);
  if (!context)
    throw new Error("DropdownMenuContent must be used within a DropdownMenu");

  return <div className={styles.pixelDropdownContent}>{children}</div>;
};

export const DropdownMenuItem: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <a href="#" className={styles.pixelDropdownItem}>
      {children}
    </a>
  );
};

export { styles as DropdownMenuStyles };
