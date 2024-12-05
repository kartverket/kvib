"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { kvibSystem } from "../../theme";
import { ColorModeProvider, type ColorModeProviderProps } from "./color-mode";

export function Provider(props: ColorModeProviderProps) {
  return (
    <ChakraProvider value={kvibSystem}>
      <ColorModeProvider {...props} />
    </ChakraProvider>
  );
}
