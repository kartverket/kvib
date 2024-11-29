import { Icon, MaterialSymbol } from "@/icon";
import { Center, HStack } from "@/layout";
import type { ButtonProps as ChakraButtonProps } from "@chakra-ui/react";
import { Button as ChakraButton, Spinner } from "@chakra-ui/react";
import * as React from "react";

interface ButtonLoadingProps {
  loading?: boolean;
  loadingText?: React.ReactNode;
}

export interface ButtonProps extends ChakraButtonProps, ButtonLoadingProps {
  /**If added, the button will show an icon before the button's label.*/
  leftIcon?: MaterialSymbol;

  /**If added, the button will show an icon after the button's label.*/
  rightIcon?: MaterialSymbol;

  /**If true, the rightIcon/leftIcon in the button will be filled.
   * @default false */
  iconFill?: boolean;

  /**Decides whether a screen reader will vocalize the icon name or not */
  iconAriaIsHidden?: boolean;
}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(function Button(props, ref) {
  const { loading, disabled, loadingText, leftIcon, rightIcon, iconAriaIsHidden, iconFill, children, ...rest } = props;
  return (
    <ChakraButton disabled={loading || disabled} ref={ref} {...rest}>
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
            filled={iconFill}
            size={props.size === "xs" || props.size === "sm" ? 20 : 24}
          />
        )}
        <Center
          className="text"
          as="span"
          // if variant is plain, add textdecoration underline on hover and active only for classname "text"
          _hover={
            props.variant === "plain"
              ? {
                  "&  .text": { textDecoration: "underline !important" },
                }
              : {}
          }
        >
          {children}
        </Center>
        {rightIcon && (
          <Icon
            icon={rightIcon}
            ariaIsHidden={iconAriaIsHidden}
            filled={iconFill}
            size={props.size === "xs" || props.size === "sm" ? 20 : 24}
          />
        )}
      </HStack>
    </ChakraButton>
  );
});
