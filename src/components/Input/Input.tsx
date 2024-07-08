import React from "react";
import styles from "./Input.module.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  onIconClick?: () => void;
  bg?: string;
  textColor?: string;
  borderColor?: string;
}

export const Input: React.FC<InputProps> = ({
  className = "",
  icon,
  onIconClick,
  bg,
  textColor,
  borderColor,
  style,
  ...props
}) => {
  const customStyle = {
    ...style,
    ...(bg && { "--custom-bg": bg }),
    ...(textColor && { "--custom-text": textColor }),
    ...(borderColor && { "--custom-border": borderColor }),
  };

  return (
    <div
      className={`${styles.pixelContainer} relative mx-1 my-2 ${className}`}
      style={customStyle}
    >
      <input
        className={`${styles.pixelInput} w-full pr-7 font-minecraft`}
        {...props}
      />
      {icon && (
        <button
          className={`${styles.pixelInputIconButton} absolute right-0 top-0`}
          onClick={onIconClick}
          type="button"
        >
          <img src={icon} alt="Input icon" className="w-5 h-5" />
        </button>
      )}
    </div>
  );
};

export default Input;

export { styles as InputStyles };
