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
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 382.000000 572.000000"
        preserveAspectRatio="xMidYMid meet"
      >
        <g
          transform="translate(0.000000,572.000000) scale(0.100000,-0.100000)"
          fill="#000000"
          stroke="none"
        >
          <path
            d="M655 2880 c0 -1972 2 -2232 15 -2240 23 -15 593 -13 608 2 9 9 12 94
12 319 l0 308 308 3 c169 2 313 7 319 11 10 6 13 81 13 317 l0 309 310 3 c263
3 312 5 320 18 6 9 10 145 10 318 l0 302 308 0 c226 0 311 3 320 12 17 17 17
599 0 616 -9 9 -94 12 -320 12 l-307 0 -3 309 c-2 170 -7 313 -11 318 -5 4
-148 9 -318 11 l-309 3 0 302 c0 173 -4 308 -10 317 -8 13 -57 15 -319 18
l-311 3 -2 317 -3 317 -315 3 -315 2 0 -2230z"
          />
        </g>
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
