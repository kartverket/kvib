import { ComponentPropsWithoutRef, forwardRef, ReactNode } from "react";
import { OverridableComponent } from "../utils";
import cl from "clsx";

export interface ButtonProps extends ComponentPropsWithoutRef<"button"> {
  children?: ReactNode;
  variant: "primary" | "secondary" | "tertiary";
  size: "sm" | "md";
  leftIcon?: string;
  rightIcon?: string;
  colorScheme: "green" | "blue";
  isDisabled: boolean;
  isLoading: boolean;
  loadingText: string;
}

export const Button: OverridableComponent<ButtonProps, HTMLButtonElement> = forwardRef(
  (
    {
      as: Component = "button",
      size = "sm",
      variant = "primary",
      colorScheme = "green",
      isDisabled,
      isLoading,
      loadingText,
      leftIcon,
      rightIcon,
      children,
      className,
      ...props
    },
    ref
  ) => {
    let childrenContent;
    if (children) {
      if (leftIcon || rightIcon) {
        childrenContent = <span className="kvib-button__text">{children}</span>;
      } else {
        childrenContent = children;
      }
    }

    let buttonContent;
    if (isLoading) {
      buttonContent = (
        <>
          <span className="kvib-button__spinner"></span>
          {loadingText && <span className="kvib-button__loading-text">{loadingText}</span>}
        </>
      );
    } else {
      buttonContent = (
        <>
          {leftIcon && <span className="material-symbols-outlined">{leftIcon}</span>}
          {childrenContent}
          {rightIcon && <span className="material-symbols-outlined">{rightIcon}</span>}
        </>
      );
    }

    return (
      <Component
        className={cl(
          className,
          "kvib-button",
          `kvib-button--${variant}`,
          `kvib-button--${size}`,
          `kvib-button--${colorScheme}`,
          {
            "is-disabled": isDisabled,
            "is-loading": isLoading,
            "has-icon": leftIcon || rightIcon,
          }
        )}
        ref={ref}
        disabled={isDisabled || isLoading ? true : undefined}
        {...props}
      >
        {buttonContent}
      </Component>
    );
  }
);

export default Button;
