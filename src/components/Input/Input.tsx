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
    <div className={`mx-1 ${styles.pixelContainer} m-2 relative ${className}`}>
      <input
        className={`w-full pr-7 ${styles.plainInput} ${styles.pixelInput} font-minecraft`}
        {...props}
      />
      {icon && (
        <button className={styles.pixelInputIconButton} onClick={onIconClick}>
          <img src={icon} alt="Input icon" className="right-0 top-0 absolute" />
        </button>
      )}
    </div>
  );
};

export default Input;

export { styles as InputStyles };
