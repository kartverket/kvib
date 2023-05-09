import React from "react";
import { Text as ChakraText, TextProps as ChakraTextProps, forwardRef } from "@chakra-ui/react";

export type TextProps = Omit<ChakraTextProps, "textStyle"> & {
  /** The size and style of the text.
   *
   * Defaults to "sm" */
  variant?: ChakraTextProps["textStyle"];
};

export const Text = forwardRef<TextProps, "p">(({ variant = "body", ...props }, ref) => {
  return <ChakraText {...props} textStyle={variant} ref={ref} />;
});
