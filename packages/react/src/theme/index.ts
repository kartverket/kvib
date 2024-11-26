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
import { breadcrumbTheme } from "./components/breadcrumb";
import { buttonTheme } from "./components/button";
import { checkboxTheme } from "./components/checkbox";
import { closeButtonTheme } from "./components/close-button";
import { datepickerTheme } from "./components/datepicker";
import { dialogTheme } from "./components/dialog";
import { fileUploadTheme } from "./components/file-upload";
import { iconButtonTheme } from "./components/icon-button";
import { inputTheme } from "./components/input";
import { linkTheme } from "./components/link";
import { menuTheme } from "./components/menu";
import { numberInputTheme } from "./components/number-input";
import { pinInputTheme } from "./components/pin-input";
import { cardSlotRecipe } from "./recipes/card.recipe";
import { selectNativeRecipe } from "./recipes/select-native.recipe";
import { config as kvibConfig } from "./tokens/config";
import sizes from "./tokens/sizes";
import { transitionDuration, transitionProperty, transitionTimingFunction } from "./tokens/transitions";

const customConfig = defineConfig({
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
      input: inputTheme,
      link: linkTheme,
      nativeSelect: selectNativeRecipe,
    },
    slotRecipes: {
      alert: alertTheme,
      breadcrumb: breadcrumbTheme,
      card: cardSlotRecipe,
      closeButton: closeButtonTheme,
      checkbox: checkboxTheme,
      datepicker: datepickerTheme,
      dialog: dialogTheme,
      fileUpload: fileUploadTheme,
      iconButton: iconButtonTheme,
      menu: menuTheme,
      numberInput: numberInputTheme,
      pinInput: pinInputTheme,
    },
  },
  ...kvibConfig,
});

const config = mergeConfigs(defaultConfig, customConfig);

export const system = createSystem(config);
