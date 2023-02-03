import React, { forwardRef, ButtonHTMLAttributes } from "react";
import cl from "clsx";

export interface IconButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  variant?: "primary" | "secondary";
  size?: "sm" | "md";
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  (
    { size = "sm", variant = "primary", children, className, ...props },
    ref
  ) => {
    return (
      <button
        className={cl(
          className,
          `kvib-button--${variant}`,
          `kvib-button--${size}`
        )}
        ref={ref}
        {...props}
      >
        {children && children}
      </button>
    );
  }
);
