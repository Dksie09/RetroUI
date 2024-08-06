import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  CSSProperties,
  useCallback,
  useRef,
  useEffect,
} from "react";
import styles from "./Dropdown.module.css";

interface DropdownContextType {
  isOpen: boolean;
  setIsOpen: React.Dispatch<React.SetStateAction<boolean>>;
  triggerWidth: number;
  setTriggerRef: (element: HTMLElement | null) => void;
}

const DropdownContext = createContext<DropdownContextType | null>(null);

export interface DropdownMenuProps {
  children: React.ReactNode;
  className?: string;
  bg?: string;
  textColor?: string;
  borderColor?: string;
  shadowColor?: string;
  style?: CSSProperties;
}

export const DropdownMenu: React.FC<DropdownMenuProps> = ({
  children,
  className = "",
  bg,
  textColor,
  borderColor,
  shadowColor,
  style,
  ...props
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [triggerWidth, setTriggerWidth] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const setTriggerRef = useCallback((element: HTMLElement | null) => {
    if (element) {
      setTriggerWidth(element.offsetWidth);
    }
  }, []);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const customStyle = {
    ...style,
    "--dropdown-custom-bg": bg,
    "--dropdown-custom-text": textColor,
    "--dropdown-custom-border": borderColor,
    "--dropdown-custom-shadow": shadowColor,
  } as CSSProperties;

  return (
    <DropdownContext.Provider
      value={{
        isOpen,
        setIsOpen,
        triggerWidth,
        setTriggerRef,
      }}
    >
      <div
        ref={dropdownRef}
        className={`${styles.dropdownMenu} ${className}`}
        style={customStyle}
        {...props}
      >
        {children}
      </div>
    </DropdownContext.Provider>
  );
};

export interface DropdownMenuTriggerProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  bg?: string;
  textColor?: string;
  shadow?: string;
  borderColor?: string;
}

export const DropdownMenuTrigger: React.FC<DropdownMenuTriggerProps> = ({
  children,
  className = "",
  bg,
  textColor,
  shadow,
  borderColor,
  style,
  ...props
}) => {
  const context = useContext(DropdownContext);

  const handleClick = () => {
    if (context) {
      context.setIsOpen((prev) => !prev);
    }
  };

  const svgString = useMemo(() => {
    const color = borderColor || "currentColor";
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="${color}"/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }, [borderColor]);

  const arrowSvg = useMemo(() => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512"><path d="M127 21h44v43h43v42h43v43h42v43h43v42h42v44h-42v43h-43v42h-42v43h-43v42h-43v43h-44z" fill="currentColor" /></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }, []);

  const customStyle = {
    ...style,
    "--button-custom-bg": bg,
    "--button-custom-text": textColor,
    "--button-custom-shadow": shadow,
    "--button-custom-border": borderColor,
    borderImageSource: svgString,
  } as CSSProperties;

  return (
    <button
      ref={context?.setTriggerRef}
      className={`${styles.pixelButton} ${styles.dropdownMenuTrigger} ${className}`}
      style={customStyle}
      onClick={handleClick}
      {...props}
    >
      {children}
      <div
        className={styles.dropdownArrow}
        style={{
          transform: context?.isOpen ? "rotate(90deg)" : "rotate(0deg)",
          maskImage: arrowSvg,
          WebkitMaskImage: arrowSvg,
          backgroundColor: "currentColor",
        }}
      />
    </button>
  );
};

export interface DropdownMenuContentProps {
  children: React.ReactNode;
  className?: string;
  bg?: string;
  textColor?: string;
  borderColor?: string;
  shadowColor?: string;
  style?: CSSProperties;
}

export const DropdownMenuContent: React.FC<DropdownMenuContentProps> = ({
  children,
  className = "",
  bg,
  textColor,
  borderColor,
  shadowColor,
  style,
  ...props
}) => {
  const context = useContext(DropdownContext);

  const borderSvg = useMemo(() => {
    const color = borderColor || "currentColor";
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="${color}"/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }, [borderColor]);

  const customStyle = {
    ...style,
    "--dropdown-content-custom-bg": bg,
    "--dropdown-content-custom-text": textColor,
    "--dropdown-content-custom-border": borderColor,
    "--dropdown-content-custom-shadow": shadowColor,
    borderImageSource: borderSvg,
    minWidth: context?.triggerWidth ? `${context.triggerWidth}px` : "auto",
  } as CSSProperties;

  if (!context?.isOpen) return null;

  return (
    <div
      className={`${styles.dropdownMenuContent} ${className}`}
      style={customStyle}
      {...props}
    >
      {children}
    </div>
  );
};

export const DropdownMenuLabel: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={`${styles.dropdownMenuLabel} ${className}`}>{children}</div>
);

export const DropdownMenuItem: React.FC<{
  children: React.ReactNode;
  className?: string;
}> = ({ children, className = "" }) => (
  <div className={`${styles.dropdownMenuItem} ${className}`}>{children}</div>
);

export const DropdownMenuSeparator: React.FC<{ className?: string }> = ({
  className = "",
}) => <div className={`${styles.dropdownMenuSeparator} ${className}`} />;

export default DropdownMenu;
