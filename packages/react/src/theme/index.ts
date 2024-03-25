import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import * as components from "./components";
import * as tokens from "./tokens";

export const defaultKvibTheme = extendTheme(
  withDefaultColorScheme({ colorScheme: "green" }),
  withDefaultColorScheme({ colorScheme: "gray", components: ["Badge", "Code", "Table", "Tag"] }),
  {
    ...tokens,
    components: { ...components },
  },
);
