import React, {
  useState,
  createContext,
  useContext,
  ReactNode,
  useMemo,
} from "react";
import styles from "./DropdownMenu.module.css";

interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  bg?: string;
  textColor?: string;
  borderColor?: string;
  arrowColor?: string;
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
  arrowColor?: string;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  className = "",
  bg,
  textColor,
  borderColor,
  arrowColor,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const svgString = useMemo(() => {
    const color = borderColor || "currentColor";
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="${color}"/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }, [borderColor]);

  const customStyle = {
    "--dropdown-custom-bg": bg,
    "--dropdown-custom-text": textColor,
    "--dropdown-custom-border": borderColor,
    "--dropdown-custom-arrow": arrowColor,
    borderImageSource: svgString,
  };

  return (
    <DropdownContext.Provider
      value={{ isOpen, setIsOpen, bg, textColor, borderColor, arrowColor }}
    >
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
      <svg
        className={`${styles.pixelDropdownArrow} w-5 h-5 ml-2.5 transition-transform duration-300`}
        viewBox="0 0 20 20"
        fill="currentColor"
      >
        <path d="M5 7l5 5 5-5z" />
      </svg>
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
