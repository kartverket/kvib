import { Icon } from "@/icon";
import type { IconButtonProps as ChakraIconButtonProps } from "@chakra-ui/react";
import { AbsoluteCenter, IconButton as ChakraIconButton, Spinner } from "@chakra-ui/react";
import { MaterialSymbol } from "material-symbols";
import { forwardRef } from "react";

export interface IconButtonProps extends ChakraIconButtonProps {
  icon: MaterialSymbol;
  loading?: boolean;
  loadingText?: React.ReactNode;
  iconFill?: boolean;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(props, ref) {
  const { loading, disabled, loadingText, icon, iconFill, ...rest } = props;
  return (
    <ChakraIconButton
      disabled={loading || disabled}
      ref={ref}
      aria-label={loadingText ? loadingText.toString() : "Icon Button"}
      {...rest}
    >
      {loading ? (
        <AbsoluteCenter display="inline-flex">
          <Spinner size="inherit" />
        </AbsoluteCenter>
      ) : (
        <Icon
          icon={icon}
          filled={iconFill}
          size={props.size === "xs" || props.size === "sm" ? 20 : 24}
          weight={props.size === "xs" || props.size === "sm" ? 300 : 400}
        />
      )}
    </ChakraIconButton>
  );
});
