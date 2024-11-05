import { Center, Button as ChakraButton, ButtonProps as ChakraButtonProps, HStack, Spinner } from "@chakra-ui/react";
import { MaterialSymbol } from "material-symbols";
import { Icon } from "../icon";
import { AbsoluteCenter } from "../layout";

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

  /* variant?: "primary" | "secondary" | "tertiary" | "ghost"; */

  /**Decides whether a screen reader will vocalize the icon name or not */
  iconAriaIsHidden?: boolean;

  /**If true, the button will show a spinner */
  isLoading?: boolean;
};

export const Button: React.FC<ButtonProps> = ({
  children,
  iconFill,
  disabled,
  isLoading,
  leftIcon,
  rightIcon,
  iconAriaIsHidden,
  ...props
}) => {
  return (
    <ChakraButton {...props}>
      <AbsoluteCenter>
        <Spinner size="sm" />
      </AbsoluteCenter>
      <HStack gap={1} visibility={isLoading ? "hidden" : "visible"}>
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
};
