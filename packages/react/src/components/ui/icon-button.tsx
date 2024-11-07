import type { IconButtonProps as ChakraIconButtonProps } from "@chakra-ui/react";
import { AbsoluteCenter, IconButton as ChakraIconButton, Spinner } from "@chakra-ui/react";
import { MaterialSymbol } from "material-symbols";
import { forwardRef } from "react";

export interface IconButtonProps extends ChakraIconButtonProps {
  loading?: boolean;
  loadingText?: React.ReactNode;
  icon: MaterialSymbol;
}

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(function IconButton(props, ref) {
  const { loading, disabled, loadingText, icon, ...rest } = props;
  return (
    <ChakraIconButton
      disabled={loading || disabled}
      ref={ref}
      aria-label={loadingText ? loadingText.toString() : "Icon Button"}
      {...rest}
    >
      {loading && loadingText && (
        <AbsoluteCenter display="inline-flex">
          <Spinner size="inherit" color="inherit" />
        </AbsoluteCenter>
      )}
    </ChakraIconButton>
  );
});
