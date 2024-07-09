import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  CSSProperties,
} from "react";
import styles from "./DropdownMenu.module.css";

interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  bg?: string;
  textColor?: string;
}

const DropdownContext = createContext<DropdownContextType | undefined>(
  undefined
);

export interface DropdownMenuProps {
  children: ReactNode;
  className?: string;
  bg?: string;
  textColor?: string;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  className = "",
  bg,
  textColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const customStyle: CSSProperties = {
    ...(bg && { "--custom-bg": bg }),
    ...(textColor && { "--custom-text": textColor }),
  } as CSSProperties;

  return (
    <DropdownContext.Provider value={{ isOpen, setIsOpen, bg, textColor }}>
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
  const context = useContext(DropdownContext);
  if (!context)
    throw new Error("DropdownMenuTrigger must be used within a DropdownMenu");

  return (
    <button
      className={`${styles.pixelDropdownTrigger} flex items-center justify-between w-full`}
    >
      {children}
      <span className={`${styles.pixelDropdownArrow} ml-2.5 font-minecraft`}>
        &gt;
      </span>
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

export interface DropdownMenuItemProps {
  children: ReactNode;
  onClick?: () => void;
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  children,
  onClick,
}) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    if (onClick) {
      onClick();
    }
  };

  return (
    <button
      className={`${styles.pixelDropdownItem} block w-full text-left py-3 px-5 text-base transition-all duration-300 ease-in-out`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
};

export { styles as DropdownMenuStyles };
