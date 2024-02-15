import { extendTheme, withDefaultColorScheme, type ThemeConfig } from "@chakra-ui/react";
import * as components from "./components";
import * as tokens from "./tokens";

const config: ThemeConfig = {
  initialColorMode: "light",
  useSystemColorMode: false,
};

export const theme = extendTheme(
  config,
  withDefaultColorScheme({ colorScheme: "green" }),
  withDefaultColorScheme({ colorScheme: "gray", components: ["Badge", "Code", "Table", "Tag"] }),
  {
    ...tokens,
    components: { ...components },
  },
);
