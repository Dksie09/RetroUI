import React, { ReactNode } from "react";
import styles from "./DropdownMenu.module.css";
export interface DropdownMenuProps {
    children: ReactNode;
    className?: string;
    bg?: string;
    textColor?: string;
    borderColor?: string;
}
export declare const DropdownMenu: React.FC<DropdownMenuProps>;
export declare const DropdownMenuTrigger: React.FC<{
    children: ReactNode;
}>;
export declare const DropdownMenuContent: React.FC<{
    children: ReactNode;
}>;
interface DropdownMenuItemProps {
    children: ReactNode;
    onClick?: () => void;
}
export declare const DropdownMenuItem: React.FC<DropdownMenuItemProps>;
export { styles as DropdownMenuStyles };
