import { createSystem, defaultBaseConfig, defineConfig } from "@chakra-ui/react";
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
import { cardTheme } from "./components/card";
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
import { popoverTheme } from "./components/popover";
import { progressTheme } from "./components/progress";
import { radioGroupTheme } from "./components/radio-group";
import { selectNativeTheme } from "./components/select-native.recipe";
import { sliderTheme } from "./components/slider";
import { spinnerTheme } from "./components/spinner";
import { stepsTheme } from "./components/steps";
import { switchTheme } from "./components/switch";
import { tableTheme } from "./components/table";
import { tabsTheme } from "./components/tabs";
import { tagTheme } from "./components/tag";
import { toastTheme } from "./components/toast";
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
      closeButton: closeButtonTheme,
      input: inputTheme,
      link: linkTheme,
      nativeSelect: selectNativeTheme,
      spinner: spinnerTheme,
    },
    slotRecipes: {
      alert: alertTheme,
      breadcrumb: breadcrumbTheme,
      card: cardTheme,
      checkbox: checkboxTheme,
      datepicker: datepickerTheme,
      dialog: dialogTheme,
      fileUpload: fileUploadTheme,
      iconButton: iconButtonTheme,
      menu: menuTheme,
      numberInput: numberInputTheme,
      pinInput: pinInputTheme,
      popover: popoverTheme,
      progress: progressTheme,
      radioGroup: radioGroupTheme,
      slider: sliderTheme,
      steps: stepsTheme,
      switch: switchTheme,
      table: tableTheme,
      tabs: tabsTheme,
      tag: tagTheme,
      toast: toastTheme,
    },
  },
  globalCss: {
    "*, *::before, *::after": {
      boxSizing: "border-box !important",
    },
  },
  ...kvibConfig,
});

/* const config = mergeConfigs(defaultConfig, customConfig); */

export const system = createSystem(defaultBaseConfig, customConfig);
