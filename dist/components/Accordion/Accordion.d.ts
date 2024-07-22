import React, { CSSProperties } from "react";
export interface AccordionProps {
    children: React.ReactNode;
    collapsible?: boolean;
    className?: string;
    bg?: string;
    textColor?: string;
    borderColor?: string;
    shadowColor?: string;
    style?: CSSProperties;
}
export declare const Accordion: React.FC<AccordionProps>;
export interface AccordionItemProps {
    children: React.ReactNode;
    value: string;
    bg?: string;
    textColor?: string;
    borderColor?: string;
    shadowColor?: string;
}
export declare const AccordionItem: React.FC<AccordionItemProps>;
export interface AccordionTriggerProps {
    children: React.ReactNode;
}
export declare const AccordionTrigger: React.FC<AccordionTriggerProps>;
export interface AccordionContentProps {
    children: React.ReactNode;
}
export declare const AccordionContent: React.FC<AccordionContentProps>;
export default Accordion;
