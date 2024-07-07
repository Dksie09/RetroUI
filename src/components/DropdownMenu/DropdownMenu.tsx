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
    <button
      className={`${styles.pixelDropdownTrigger} flex items-center justify-between w-full`}
    >
      {children}
      <img
        src="/icons/new_play.png"
        alt="Toggle Dropdown"
        className={`${styles.pixelDropdownArrow} w-5 h-5 ml-2.5 transition-transform duration-300`}
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

  return (
    <div
      className={`${styles.pixelDropdownContent} absolute min-w-[200px] w-[110%] left-[-10px] z-10`}
    >
      {children}
    </div>
  );
};

export const DropdownMenuItem: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <a
      href="#"
      className={`${styles.pixelDropdownItem} block py-3 px-5 text-base transition-all duration-300 ease-in-out`}
    >
      {children}
    </a>
  );
};

export { styles as DropdownMenuStyles };
