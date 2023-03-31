import { extendTheme } from "@chakra-ui/react";
import { theme as defaultTheme } from "@chakra-ui/theme";
import * as components from "./components";
import * as foundations from "./foundations";

export const theme = extendTheme({
  ...defaultTheme,
  ...foundations,
  components: {
    ...defaultTheme.components,
    ...components,
  },
});
