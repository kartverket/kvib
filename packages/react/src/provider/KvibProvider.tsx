import { Provider } from "@/components/ui/provider";
import { Theme } from "@/layout/theme";
import "@fontsource/mulish/400.css";
import "@fontsource/mulish/600.css";
import "@fontsource/mulish/700.css";
import "material-symbols";
import React from "react";

export interface KvibProviderProps {
  colorPalette?: "green" | "blue";
  children?: React.ReactNode;
}

export const KvibProvider = ({ colorPalette = "green", children }: KvibProviderProps) => (
  <Provider>
    <Theme colorPalette={colorPalette}>{children}</Theme>
  </Provider>
);
