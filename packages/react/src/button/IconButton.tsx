import { IconButton as ChakraIconButton, IconButtonProps as ChakraIconButtonProps, forwardRef } from "@chakra-ui/react";

export type IconButtonProps = Omit<
  ChakraIconButtonProps,
  | "colorScheme"
  | "size"
  | "variant"
  | "leftIcon"
  | "rightIcon"
  | "iconSpacing"
  | "isActive"
  | "loadingText"
  | "spinnerPlacement"
  | "icon"
  | "spinner"
> & {
  /**The variant of the IconButton*/
  variant: "ordinary" | "outlined";

  /**The size of the Button*/
  size: "sm" | "md" | "lg";

  /**The visual color appearance of the component*/
  colorScheme: "green" | "blue" | "gray" | "red";

  /**The icon to be used in the button.*/
  icon: string;

  /**A label that describes the button*/
  "aria-label": string;
};

export const IconButton = forwardRef<IconButtonProps, "button">(
  ({ size = "md", variant = "ordinary", colorScheme = "green", isDisabled, isLoading, ...props }, ref) => {
    return (
      <ChakraIconButton
        {...props}
        ref={ref}
        size={size}
        variant={variant}
        colorScheme={colorScheme}
        isDisabled={isDisabled || isLoading}
        aria-busy={isLoading}
        aria-label={"aria-label"}
        icon={<span className="material-symbols-outlined">{props.icon}</span>}
      ></ChakraIconButton>
    );
  }
);
