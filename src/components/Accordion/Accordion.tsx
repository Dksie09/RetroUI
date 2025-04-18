import React, {
  createContext,
  useContext,
  useState,
  useMemo,
  CSSProperties,
} from "react";
import styles from "./Accordion.module.css";

interface AccordionContextType {
  activeItem: string | null;
  activeItems: string[];
  setActiveItem: React.Dispatch<React.SetStateAction<string | null>>;
  setActiveItems: React.Dispatch<React.SetStateAction<string[]>>;
  bg?: string;
  textColor?: string;
  borderColor?: string;
  shadowColor?: string;
  collapsible: boolean;
}

const AccordionContext = createContext<AccordionContextType | null>(null);

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

export const Accordion = ({
  children,
  collapsible = true,
  className = "",
  bg,
  textColor,
  borderColor,
  shadowColor,
  style,
  ...props
}: AccordionProps): JSX.Element => {
  const [activeItem, setActiveItem] = useState<string | null>(null);
  const [activeItems, setActiveItems] = useState<string[]>([]);

  const customStyle = {
    ...style,
    "--accordion-custom-bg": bg,
    "--accordion-custom-text": textColor,
    "--accordion-custom-border": borderColor,
    "--accordion-custom-shadow": shadowColor,
  } as CSSProperties;

  return (
    <AccordionContext.Provider
      value={{
        activeItem: collapsible ? activeItem : null,
        activeItems: collapsible ? [] : activeItems,
        setActiveItem: collapsible ? setActiveItem : () => {},
        setActiveItems: collapsible ? () => {} : setActiveItems,
        bg,
        textColor,
        borderColor,
        shadowColor,
        collapsible,
      }}
    >
      <div
        className={`${styles.accordion} ${className}`}
        style={customStyle}
        {...props}
      >
        {children}
      </div>
    </AccordionContext.Provider>
  );
};

export interface AccordionItemProps {
  children: React.ReactNode;
  value: string;
  bg?: string;
  textColor?: string;
  borderColor?: string;
  shadowColor?: string;
}

const AccordionItemContext = createContext<{ value: string }>({ value: "" });

export const AccordionItem: React.FC<AccordionItemProps> = ({
  children,
  value,
  bg,
  textColor,
  borderColor,
  shadowColor,
}) => {
  const context = useContext(AccordionContext);
  const isActive = context?.collapsible
    ? context.activeItem === value
    : context?.activeItems.includes(value);

  const borderSvg = useMemo(() => {
    const color = borderColor || context?.borderColor || "currentColor";
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="8" height="8"><path d="M3 1h1v1h-1zM4 1h1v1h-1zM2 2h1v1h-1zM5 2h1v1h-1zM1 3h1v1h-1zM6 3h1v1h-1zM1 4h1v1h-1zM6 4h1v1h-1zM2 5h1v1h-1zM5 5h1v1h-1zM3 6h1v1h-1zM4 6h1v1h-1z" fill="${color}"/></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }, [borderColor, context?.borderColor]);

  const customStyle = {
    "--accordion-item-custom-bg": bg || context?.bg,
    "--accordion-item-custom-text": textColor || context?.textColor,
    "--accordion-item-custom-border": borderColor || context?.borderColor,
    "--accordion-item-custom-shadow": shadowColor || context?.shadowColor,
    borderImageSource: borderSvg,
  } as CSSProperties;

  return (
    <AccordionItemContext.Provider value={{ value }}>
      <div
        className={`${styles.accordionItem} ${isActive ? styles.active : ""}`}
        style={customStyle}
      >
        {children}
      </div>
    </AccordionItemContext.Provider>
  );
};

export interface AccordionTriggerProps {
  children: React.ReactNode;
}

export const AccordionTrigger: React.FC<AccordionTriggerProps> = ({
  children,
}) => {
  const context = useContext(AccordionContext);
  const item = useContext(AccordionItemContext);

  const isActive = context?.collapsible
    ? context.activeItem === item.value
    : context?.activeItems.includes(item.value);

  const handleClick = () => {
    if (!context) return;

    if (context.collapsible) {
      // Single item mode - only one can be open
      context.setActiveItem((prev) =>
        prev === item.value ? null : item.value
      );
    } else {
      // Multiple items mode
      context.setActiveItems((prev) => {
        if (prev.includes(item.value)) {
          // Remove this item
          return prev.filter((i) => i !== item.value);
        } else {
          // Add this item
          return [...prev, item.value];
        }
      });
    }
  };

  const arrowSvg = useMemo(() => {
    const svg = `<svg xmlns="http://www.w3.org/2000/svg" width="512" height="512"><path d="M127 21h44v43h43v42h43v43h42v43h43v42h42v44h-42v43h-43v42h-42v43h-43v42h-43v43h-44z" fill="currentColor" /></svg>`;
    return `url("data:image/svg+xml,${encodeURIComponent(svg)}")`;
  }, []);

  return (
    <button
      className={styles.accordionTrigger}
      onClick={handleClick}
      aria-expanded={isActive ? "true" : "false"}
    >
      <div
        className={styles.accordionArrow}
        style={{
          transform: isActive ? "rotate(90deg)" : "rotate(0deg)",
          maskImage: arrowSvg,
          WebkitMaskImage: arrowSvg,
          backgroundColor: "currentColor",
        }}
      />
      {children}
    </button>
  );
};

export interface AccordionContentProps {
  children: React.ReactNode;
}

export const AccordionContent: React.FC<AccordionContentProps> = ({
  children,
}) => {
  const context = useContext(AccordionContext);
  const item = useContext(AccordionItemContext);

  const isActive = context?.collapsible
    ? context.activeItem === item.value
    : context?.activeItems.includes(item.value);

  return (
    <div
      className={`${styles.accordionContent} ${isActive ? styles.active : ""}`}
      style={{
        maxHeight: isActive ? "1000px" : "0",
        opacity: isActive ? 1 : 0,
      }}
    >
      <div className={styles.accordionContentInner}>{children}</div>
    </div>
  );
};

export default Accordion;
