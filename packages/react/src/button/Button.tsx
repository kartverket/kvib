import {
  Center,
  Button as ChakraButton,
  ButtonProps as ChakraButtonProps,
  HStack,
  Spinner,
  forwardRef,
} from "@chakra-ui/react";
import { MaterialSymbol } from "material-symbols";
import { Icon } from "../icon";

export type ButtonProps = Omit<
  ChakraButtonProps,
  "variant" | "colorScheme" | "leftIcon" | "rightIcon" | "iconSpacing" | "isActive" | "loadingText" | "spinnerPlacement"
> & {
  /**The visual color appearance of the component
   * @default green*/
  colorScheme?: "green" | "blue" | "gray" | "red";

  /**If added, the button will show an icon before the button's label.*/
  leftIcon?: MaterialSymbol;

  /**If added, the button will show an icon after the button's label.*/
  rightIcon?: MaterialSymbol;

  /**If true, the rightIcon/leftIcon in the button will be filled.
   * @default false */
  iconFill?: boolean;

  variant?: "primary" | "secondary" | "tertiary" | "ghost";

  /**Decides whether a screen reader will vocalize the icon name or not */
  iconAriaIsHidden?: boolean;
};

export const Button = forwardRef<ButtonProps, "button">(
  ({ children, iconFill, isDisabled, isLoading, leftIcon, rightIcon, iconAriaIsHidden, ...props }, ref) => {
    return (
      <ChakraButton {...props} ref={ref} isDisabled={isDisabled || isLoading} aria-busy={isLoading}>
        {isLoading && (
          <Center position="absolute" right="0" left="0">
            <Spinner size="sm" />
          </Center>
        )}
        <HStack spacing={1} visibility={isLoading ? "hidden" : "visible"}>
          {leftIcon && (
            <Icon
              icon={leftIcon}
              ariaIsHidden={iconAriaIsHidden}
              isFilled={iconFill}
              size={props.size === "xs" || props.size === "sm" ? 20 : 24}
            />
          )}
          <Center className="text" as="span">
            {children}
          </Center>
          {rightIcon && (
            <Icon
              icon={rightIcon}
              ariaIsHidden={iconAriaIsHidden}
              isFilled={iconFill}
              size={props.size === "xs" || props.size === "sm" ? 20 : 24}
            />
          )}
        </HStack>
      </ChakraButton>
    );
  },
);
