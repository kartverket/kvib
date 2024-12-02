"use client";

import type { ThemeProviderProps } from "next-themes";
import { ThemeProvider } from "next-themes";

export interface ColorModeProviderProps extends ThemeProviderProps {}

export function ColorModeProvider(props: ColorModeProviderProps) {
  return (
    <ThemeProvider
      disableTransitionOnChange
      defaultTheme="light"
      forcedTheme="light"
      enableColorScheme={false}
      enableSystem={false}
      {...props}
    />
  );
}
