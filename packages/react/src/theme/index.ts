import { extendTheme } from "@chakra-ui/react";
import { theme as defaultTheme } from "@chakra-ui/theme";
// import * as components from "./components";
import * as tokens from "./tokens";

export const theme = extendTheme({
  ...defaultTheme,
  ...tokens,
  components: {
    ...defaultTheme.components,
    // ...components,
  },
});
