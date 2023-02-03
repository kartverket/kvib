import React, { forwardRef, ButtonHTMLAttributes } from "react";
import "./style.css";
import cl from "clsx";

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant: "primary" | "secondary" | "tertiary";
  size: "sm" | "md";
  color: "green" | "blue";
}

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      size = "sm",
      variant = "primary",
      color = "green",
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
          `kvib-button--${color}`
        )}
        ref={ref}
        {...props}
      >
        {children && children}
      </button>
    );
  }
);
