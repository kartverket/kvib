import { createSystem, defineConfig } from "@chakra-ui/react";
import {
  blur,
  borders,
  breakpoints,
  colors,
  fonts,
  fontSizes,
  fontWeights,
  letterSpacings,
  lineHeights,
  radii,
} from "./tokens";

import { defaultConfig } from "@chakra-ui/react";

/*  withDefaultColorScheme({ colorScheme: "green" }),
 withDefaultColorScheme({ colorScheme: "gray", components: ["Badge", "Code", "Table", "Tag"] }), */

const config = defineConfig({
  theme: {
    tokens: {
      blurs: blur,
      borders: borders,
      breakpoints: breakpoints,
      colors: colors,
      radii: radii,
      fonts: fonts,
      letterSpacings: letterSpacings,
      lineHeights: lineHeights,
      fontWeights: fontWeights,
      fontSizes: fontSizes,
    },
  },
});

export const system = createSystem(defaultConfig, config);
