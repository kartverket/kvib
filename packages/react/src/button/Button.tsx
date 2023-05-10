import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  Center,
  forwardRef,
  Spinner,
  HStack,
} from "@chakra-ui/react";

export type ButtonProps = Omit<
  ChakraButtonProps,
  | "colorScheme"
  | "size"
  | "variant"
  | "leftIcon"
  | "rightIcon"
  | "iconSpacing"
  | "isActive"
  | "loadingText"
  | "spinnerPlacement"
> & {
  size?: "sm" | "md" | "lg";
  variant?: "primary" | "secondary" | "tertiary";
  colorScheme?: "green" | "blue";
  leftIcon?: string;
  rightIcon?: string;
};

export const Button = forwardRef<ButtonProps, "button">(
  (
    {
      children,
      size = "md",
      variant = "primary",
      colorScheme = "green",
      isDisabled,
      isLoading,
      leftIcon,
      rightIcon,
      ...props
    },
    ref
  ) => {
    return (
      <ChakraButton
        {...props}
        ref={ref}
        size={size}
        variant={variant}
        colorScheme={colorScheme}
        isDisabled={isDisabled || isLoading}
        aria-busy={isLoading}
      >
        {isLoading && (
          <Center position="absolute" right="0" left="0">
            <Spinner size="sm" />
          </Center>
        )}
        <HStack spacing={1} visibility={isLoading ? "hidden" : "visible"}>
          {leftIcon && <span className="material-symbols-outlined">{leftIcon}</span>}
          <Center className="text" as="span">
            {children}
          </Center>
          {rightIcon && <span className="material-symbols-outlined">{rightIcon}</span>}
        </HStack>
      </ChakraButton>
    );
  }
);
