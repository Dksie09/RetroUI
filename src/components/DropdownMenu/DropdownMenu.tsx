import React, { ReactNode, useMemo } from "react";
import styles from "./DropdownMenu.module.css";

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
    <div className={`${styles.pixelDropdown} ${className}`} style={customStyle}>
      {children}
    </div>
  );
};

export const DropdownMenuTrigger: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  return (
    <button
      className={`${styles.pixelDropdownTrigger} flex items-center justify-between w-full`}
    >
      {children}
      <svg
        className={`${styles.pixelDropdownArrow} w-5 h-5 ml-2.5 transition-transform duration-300`}
        width="20"
        height="30"
        viewBox="0 0 300 449"
        fill="currentColor"
      >
        <path
          d="M514 2258 l1 -1753 248 -3 247 -2 0 250 0 250 244 0 c185 0 247 3
        253 13 4 6 8 118 8 247 l0 235 240 5 c132 3 246 9 253 13 9 6 12 67 12 248 l0
        239 238 0 c130 0 243 4 250 8 9 7 12 63 10 248 l-3 239 -247 3 -247 2 -3 244
        c-2 135 -7 248 -11 253 -5 4 -102 7 -215 5 -114 -1 -224 0 -244 3 l-37 7 1
        239 c1 131 -2 242 -6 247 -4 4 -118 8 -252 10 l-244 3 0 249 0 250 -248 0
        -248 0 0 -1752z"
        />
      </svg>
    </button>
  );
};

export const DropdownMenuContent: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
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
