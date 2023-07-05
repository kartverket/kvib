import {
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  Center,
  forwardRef,
  Spinner,
  HStack,
} from "@chakra-ui/react";
import { Icon } from "../icon";

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
  /**The size of the Button
   * @default green */
  size: "xs" | "sm" | "md" | "lg";

  /**The variant of the Button
   * @default solid */
  variant: "solid" | "outline" | "link";

  /**The visual color appearance of the component
   * @default green */
  colorScheme: "green" | "blue" | "gray" | "red";

  /**If added, the button will show an icon before the button's label.*/
  leftIcon?: string;

  /**If added, the button will show an icon after the button's label.*/
  rightIcon?: string;

  /**If true, the rightIcon/leftIcon in the button will be filled.
   * @default false */
  iconFill?: boolean;
};

export const Button = forwardRef<ButtonProps, "button">(
  (
    {
      children,
      size = "md",
      variant = "solid",
      colorScheme = "green",
      isDisabled,
      isLoading,
      leftIcon,
      rightIcon,
      iconFill = false,
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
        iconFill={iconFill && (rightIcon || leftIcon)}
      >
        {isLoading && (
          <Center position="absolute" right="0" left="0">
            <Spinner size="sm" />
          </Center>
        )}
        <HStack spacing={1} visibility={isLoading ? "hidden" : "visible"}>
          {leftIcon && <Icon icon={leftIcon} isFilled={iconFill} />}
          <Center className="text" as="span">
            {children}
          </Center>
          {rightIcon && <Icon icon={rightIcon} isFilled={iconFill} />}
        </HStack>
      </ChakraButton>
    );
  }
);
