import React from "react";
import styles from "./Input.module.css";

export interface InputProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  icon?: string;
  onIconClick?: () => void;
}

export const Input: React.FC<InputProps> = ({
  className = "",
  icon,
  onIconClick,
  ...props
}) => {
  return (
    <div className={`${styles.pixelContainer} relative mx-1 my-2 ${className}`}>
      <input
        className={`${styles.pixelInput} w-full pr-7 font-minecraft`}
        {...props}
      />
      {icon && (
        <button
          className={`${styles.pixelInputIconButton} absolute right-0 top-0`}
          onClick={onIconClick}
        >
          <img src={icon} alt="Input icon" />
        </button>
      )}
    </div>
  );
};

export default Input;

export { styles as InputStyles };
