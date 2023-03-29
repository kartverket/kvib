import {
  Box,
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  Center,
  forwardRef,
  Spinner,
} from "@chakra-ui/react";

export type ButtonProps = Exclude<ChakraButtonProps, "colorScheme" | "size" | "variant" | "loadingText"> & {
  size?: "sm" | "md";
  variant?: "primary" | "secondary" | "tertiary";
  colorScheme?: "green" | "blue";
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
        leftIcon={
          isLoading && leftIcon ? (
            <Box visibility={isLoading ? "hidden" : "visible"} aria-hidden="true">
              {leftIcon}
            </Box>
          ) : (
            leftIcon
          )
        }
        rightIcon={
          isLoading && rightIcon ? (
            <Box visibility={isLoading ? "hidden" : "visible"} aria-hidden="true">
              {rightIcon}
            </Box>
          ) : (
            rightIcon
          )
        }
        position="relative"
      >
        {isLoading && (
          <Center position="absolute" right="0" paddingBottom={1} left="0" paddingTop={2}>
            <Spinner size="sm" />
          </Center>
        )}
        <Box visibility={isLoading ? "hidden" : "visible"}>{children}</Box>
      </ChakraButton>
    );
  }
);
