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

import { alertTheme } from "./components/alert";
import { buttonTheme } from "./components/button";
import { iconButtonTheme } from "./components/iconButton";
import { inputTheme } from "./components/input";
import { breadcrumbSlotRecipe } from "./recipes/breadcrumb.recipe";
import { cardSlotRecipe } from "./recipes/card.recipe";
import { checkboxSlotRecipe } from "./recipes/checkbox.recipe";
import { closeButtonSlotRecipe } from "./recipes/close-button.recipe";
import { linkRecipe } from "./recipes/link.recipe";
import { pinInputRecipe } from "./recipes/pin-input.recipe";
import { selectNativeRecipe } from "./recipes/select-native.recipe";
import { config as kvibConfig } from "./tokens/config";
import sizes from "./tokens/sizes";
import { transitionDuration, transitionProperty, transitionTimingFunction } from "./tokens/transitions";

const customConfig = defineConfig({
  ...kvibConfig,
  theme: {
    breakpoints: breakpoints,
    textStyles: {
      fonts: fonts,
      sizes: fontSizes,
      weights: fontWeights,
      spacings: letterSpacings,
      heights: lineHeights,
    },
    tokens: {
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
      button: buttonTheme,
      iconButton: iconButtonTheme,
      input: inputTheme,
      link: linkRecipe,
      nativeSelect: selectNativeRecipe,
      pinInput: pinInputRecipe,
    },
    slotRecipes: {
      alert: alertTheme,
      breadcrumb: breadcrumbSlotRecipe,
      card: cardSlotRecipe,
      checkbox: checkboxSlotRecipe,
      close: closeButtonSlotRecipe,
    },
  },
});

const config = mergeConfigs(defaultConfig, customConfig);

export const system = createSystem(config);
