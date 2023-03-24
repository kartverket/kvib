import { Button as ChakraButton, ButtonProps as ChakraButtonProps, forwardRef } from "@chakra-ui/react";

export type ButtonProps = Exclude<ChakraButtonProps, "colorScheme" | "size" | "variant"> & {
  size?: "sm" | "md";
  variant?: "primary" | "secondary" | "tertiary";
  colorScheme?: "green" | "blue";
};

export const Button = forwardRef<ButtonProps, "button">(
  (
    { children, size = "md", variant = "primary", colorScheme = "green", isDisabled, leftIcon, rightIcon, ...props },
    ref
  ) => {
    return (
      <ChakraButton
        {...props}
        ref={ref}
        size={size}
        variant={variant}
        colorScheme={colorScheme}
        isDisabled={isDisabled}
        leftIcon={leftIcon}
        rightIcon={rightIcon}
        position="relative"
      >
        {children}
      </ChakraButton>
    );
  }
);
