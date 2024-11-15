import { createSystem, defaultConfig, defineConfig, mergeConfigs } from "@chakra-ui/react";
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
  shadows,
  spacing,
  zIndices,
} from "./tokens";

import { buttonRecipe } from "./recipes/button.recipe";
import { iconButtonRecipe } from "./recipes/icon-button.recipe";
import { linkRecipe } from "./recipes/link.recipe";
import { config as kvibConfig } from "./tokens/config";
import sizes from "./tokens/sizes";
import { transitionDuration, transitionProperty, transitionTimingFunction } from "./tokens/transitions";

const customConfig = defineConfig({
  ...kvibConfig,
  theme: {
    breakpoints: breakpoints,
    tokens: {
      fonts: fonts,
      fontSizes: fontSizes,
      fontWeights: fontWeights,
      letterSpacings: letterSpacings,
      lineHeights: lineHeights,
      blurs: blur,
      borders: borders,
      colors: colors,
      radii: radii,
      spacing: spacing,
      zIndex: zIndices,
      sizes: sizes,
      shadows: shadows,
      durations: transitionDuration,
      easings: transitionTimingFunction,
      animations: transitionProperty,
    },

    recipes: {
      button: buttonRecipe,
      iconButton: iconButtonRecipe,
      link: linkRecipe,
    },
  },
});

const config = mergeConfigs(defaultConfig, customConfig);

export const system = createSystem(config);
