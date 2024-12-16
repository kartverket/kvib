import { Button as ChakraButton, ButtonProps as ChakraButtonProps } from "@/components/ui/button";
import { Center, HStack, Spinner } from "@chakra-ui/react";
import { MaterialSymbol } from "material-symbols";
import { forwardRef } from "react";
import { Icon } from "../icon";

export type ButtonProps = Omit<ChakraButtonProps, "colorPalette" | "variant"> & {
  /** The variants of the component
   * @default solid */
  variant?: "primary" | "secondary" | "tertiary" | "solid" | "outline" | "ghost" | "plain";

  /**The visual color appearance of the component
   * @default green*/
  colorPalette?: "green" | "blue" | "gray" | "red";

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

export type ButtonVariant = "solid" | "outline" | "ghost" | "plain";

export const buttonVariantMap = {
  primary: "solid",
  solid: "solid",
  secondary: "outline",
  outline: "outline",
  tertiary: "plain",
  plain: "plain",
  ghost: "ghost",
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ children, iconFill, disabled, loading, leftIcon, rightIcon, iconAriaIsHidden, variant, ...props }, ref) => {
    const buttonVariant = buttonVariantMap[variant || "solid"] as ButtonVariant;

    return (
      <ChakraButton {...props} ref={ref} disabled={disabled || loading} aria-busy={loading} variant={buttonVariant}>
        {loading && (
          <Center position="absolute" right="0" left="0">
            <Spinner />
          </Center>
        )}
        <HStack gap={1} visibility={loading ? "hidden" : "visible"}>
          {leftIcon && <Icon icon={leftIcon} ariaIsHidden={iconAriaIsHidden} filled={iconFill} />}
          <Center className="text" as="span">
            {children}
          </Center>
          {rightIcon && <Icon icon={rightIcon} ariaIsHidden={iconAriaIsHidden} filled={iconFill} />}
        </HStack>
      </ChakraButton>
    );
  },
);
