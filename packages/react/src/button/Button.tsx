import { Center, HStack, Spinner } from "@chakra-ui/react";
import { MaterialSymbol } from "material-symbols";
import { forwardRef } from "react";
import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "../components/ui/button";
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

  /**Decides whether a screen reader will vocalize the icon name or not */
  iconAriaIsHidden?: boolean;
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, iconFill, disabled, loading, leftIcon, rightIcon, iconAriaIsHidden, ...props }, ref) => {
    return (
      <ChakraButton {...props} ref={ref} disabled={disabled || loading} aria-busy={loading}>
        {loading && (
          <Center position="absolute" right="0" left="0">
            <Spinner size="sm" />
          </Center>
        )}
        <HStack gap={1} visibility={loading ? "hidden" : "visible"}>
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
