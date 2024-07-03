import React from "react";
import "./Input.css";

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
    <div className={`mx-1 pixel-container m-2 relative ${className}`}>
      <input
        className="w-full pr-7 plain-input pixel-input font-minecraft"
        {...props}
      />
      {icon && (
        <button className="pixel-input-icon-button" onClick={onIconClick}>
          <img src={icon} alt="Input icon" className="right-0 top-0 absolute" />
        </button>
      )}
    </div>
  );
};

export default Input;
