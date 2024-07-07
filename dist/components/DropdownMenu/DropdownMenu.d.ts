import React, { ReactNode } from "react";
import styles from "./DropdownMenu.css";
export interface DropdownMenuProps {
    children: ReactNode;
    className?: string;
}
export declare const DropdownMenu: React.FC<DropdownMenuProps>;
export declare const DropdownMenuTrigger: React.FC<{
    children: ReactNode;
}>;
export declare const DropdownMenuContent: React.FC<{
    children: ReactNode;
}>;
export declare const DropdownMenuItem: React.FC<{
    children: ReactNode;
}>;
export { styles as DropdownMenuStyles };
