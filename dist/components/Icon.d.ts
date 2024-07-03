import React from "react";
import { IconName } from "../icons";
export interface IconProps extends React.SVGProps<SVGSVGElement> {
    name: IconName;
    size?: "small" | "medium" | "large";
}
export declare const Icon: React.FC<IconProps>;
