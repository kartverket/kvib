import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";
import "./style.css";
import cl from "clsx";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children?: ReactNode;
  variant: "primary" | "secondary" | "tertiary";
  size: "sm" | "md";
  leftIcon?: string;
  rightIcon?: string;
  colorScheme: "green" | "blue";
  isDisabled: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = "sm",
      variant = "primary",
      colorScheme = "green",
      leftIcon,
      rightIcon,
      children,
      className,
      ...props
    },
    ref,
  ) => {
    return (
      <button
        className={cl(
          className,
          "kvib-button",
          `kvib-button--${variant}`,
          `kvib-button--${size}`,
          `kvib-button--${colorScheme}`,
        )}
        ref={ref}
        {...props}
      >
        {leftIcon && (
          <div className="kvib-button__icon kvib-button__icon--left">
            <span className="material-symbols-outlined">{leftIcon}</span>
          </div>
        )}
        {children && <span className="kvib-button__text">{children}</span>}
        {rightIcon && (
          <div className="kvib-button__icon kvib-button__icon--right">
            <span className="material-symbols-outlined">{rightIcon}</span>
          </div>
        )}
      </button>
    );
  },
);

export default Button;
