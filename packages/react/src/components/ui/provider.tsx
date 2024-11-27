"use client";

import { system } from "@/theme";
import { ChakraProvider } from "@chakra-ui/react";
import { ThemeProvider } from "next-themes";

export function Provider(props: { children: React.ReactNode }) {
  return (
    <ChakraProvider value={system}>
      <ThemeProvider attribute="class" disableTransitionOnChange>
        {props.children}
      </ThemeProvider>
    </ChakraProvider>
  );
}
