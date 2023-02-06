import React, {forwardRef, ReactNode, ComponentPropsWithoutRef} from "react";
import "./style.css";
import cl from "clsx";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children?: ReactNode;
  variant: "primary" | "secondary" | "tertiary";
  size: "sm" | "md";
  colorScheme: "green" | "blue";
  isDisabled: boolean;
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = "sm",
      variant = "primary",
      colorScheme = "green",
      children,
      className,
      ...props
    },
    ref
  ) => {
    return (
      <button
        className={cl(
          className,
          "kvib-button",
          `kvib-button--${variant}`,
          `kvib-button--${size}`,
          `kvib-button--${colorScheme}`
        )}
        ref={ref}
        {...props}
      >
        {children && children}
      </button>
    );
  }
);
