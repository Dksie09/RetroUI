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

  const { setIsOpen } = context;

  return (
    <button
      className={`${styles.pixelDropdownTrigger} flex items-center justify-between w-full`}
      onClick={() => setIsOpen((prev) => !prev)}
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

  const { isOpen } = context;

  if (!isOpen) return null;

  return (
    <div
      className={`${styles.pixelDropdownContent} absolute min-w-[200px] w-[110%] left-[-10px] z-10`}
    >
      {children}
    </div>
  );
};

interface DropdownMenuItemProps {
  children: ReactNode;
  onClick?: () => void;
  href?: string;
}

export const DropdownMenuItem: React.FC<DropdownMenuItemProps> = ({
  children,
  onClick,
  href,
}) => {
  const context = useContext(DropdownContext);
  if (!context)
    throw new Error("DropdownMenuItem must be used within a DropdownMenu");

  const { setIsOpen } = context;

  const handleClick = () => {
    if (onClick) onClick();
    setIsOpen(false);
  };

  const commonProps = {
    className: `${styles.pixelDropdownItem} block py-3 px-5 text-base transition-all duration-300 ease-in-out`,
    onClick: handleClick,
  };

  return href ? (
    <a href={href} {...commonProps}>
      {children}
    </a>
  ) : (
    <button type="button" {...commonProps}>
      {children}
    </button>
  );
};

export { styles as DropdownMenuStyles };
