import { useRecipe } from "@/hooks";
import type { ButtonProps as ChakraCloseButtonProps } from "@chakra-ui/react";
import { IconButton as ChakraIconButton } from "@chakra-ui/react";
import * as React from "react";
import { LuX } from "react-icons/lu";

export interface CloseButtonProps extends ChakraCloseButtonProps {}

export const CloseButton = React.forwardRef<HTMLButtonElement, CloseButtonProps>(function CloseButton(props, ref) {
  const closeButtonRecipe = useRecipe({ key: "closeButton" });
  const styles = closeButtonRecipe(props);

  return (
    <ChakraIconButton variant="ghost" aria-label="Close" ref={ref} css={styles} {...props}>
      {props.children ?? <LuX />}
    </ChakraIconButton>
  );
});
