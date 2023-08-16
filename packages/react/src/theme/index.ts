import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";
import * as components from "./components";
import * as tokens from "./tokens";

const defaultTheme = extendTheme(
  withDefaultColorScheme({ colorScheme: "green" }),
  withDefaultColorScheme({ colorScheme: "gray", components: ["Badge", "Code", "Table", "Tag"] })
);

export const theme = extendTheme(
  {
    ...tokens,
    components: {
      ...components,
    },
  },
  defaultTheme
);
