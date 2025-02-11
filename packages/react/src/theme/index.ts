import { createSystem, defaultBaseConfig, defaultConfig, defineConfig, mergeConfigs } from "@chakra-ui/react";
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

import { accordionTheme } from "./components/accordion";
import { alertTheme } from "./components/alert";
import { avatarTheme } from "./components/avatar";
import { breadcrumbTheme } from "./components/breadcrumb";
import { buttonTheme } from "./components/button";
import { cardTheme } from "./components/card";
import { checkboxTheme } from "./components/checkbox";
import { checkboxCardTheme } from "./components/checkbox-card";
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
import { radioTheme } from "./components/radio";
import { radioCardTheme } from "./components/radio-card";
import { radioGroupTheme } from "./components/radio-group";
import { segmentedControlTheme } from "./components/segmented-control";
import { selectTheme } from "./components/select";
import { selectNativeTheme } from "./components/select-native";
import { sliderTheme } from "./components/slider";
import { spinnerTheme } from "./components/spinner";
import { stepsTheme } from "./components/steps";
import { switchTheme } from "./components/switch";
import { tableTheme } from "./components/table";
import { tabsTheme } from "./components/tabs";
import { tagTheme } from "./components/tag";
import { toastTheme } from "./components/toast";
import { tooltipTheme } from "./components/tooltip";
import { config as kvibConfig } from "./tokens/config";
import sizes from "./tokens/sizes";
import { transitionDuration, transitionProperty, transitionTimingFunction } from "./tokens/transitions";

const customConfig = defineConfig({
  theme: {
    textStyles: {
      fonts: fonts,
      sizes: fontSizes,
      weights: fontWeights,
      spacings: letterSpacings,
      heights: lineHeights,
      colors: {
        text: {
          primary: colors.gray["900"],
          secondary: colors.gray["700"],
          tertiary: colors.gray["500"],
          quaternary: colors.gray["300"],
        },
      },
    },
    breakpoints: {
      base: "0",
      sm: breakpoints.sm.value,
      md: breakpoints.md.value,
      lg: breakpoints.lg.value,
      xl: breakpoints.xl.value,
      "2xl": breakpoints["2xl"].value,
    },
    tokens: {
      breakpoints: breakpoints,
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
      button: buttonTheme,
      closeButton: closeButtonTheme,
      input: inputTheme,
      link: linkTheme,
      spinner: spinnerTheme,
    },
    slotRecipes: {
      alert: alertTheme,
      avatar: avatarTheme,
      accordion: accordionTheme,
      breadcrumb: breadcrumbTheme,
      card: cardTheme,
      checkbox: checkboxTheme,
      checkboxCard: checkboxCardTheme,
      datepicker: datepickerTheme,
      dialog: dialogTheme,
      fileUpload: fileUploadTheme,
      iconButton: iconButtonTheme,
      menu: menuTheme,
      nativeSelect: selectNativeTheme,
      numberInput: numberInputTheme,
      pinInput: pinInputTheme,
      popover: popoverTheme,
      progress: progressTheme,
      radioGroup: radioGroupTheme,
      radio: radioTheme,
      radioCard: radioCardTheme,
      select: selectTheme,
      segmentedControl: segmentedControlTheme,
      slider: sliderTheme,
      steps: stepsTheme,
      switch: switchTheme,
      table: tableTheme,
      tabs: tabsTheme,
      tag: tagTheme,
      toast: toastTheme,
      tooltip: tooltipTheme,
    },
  },
  globalCss: {
    "*, *::before, *::after": {
      boxSizing: "border-box !important",
    },
    body: {
      color: "gray.900",
    },
  },
  ...kvibConfig,
});

const config = mergeConfigs(defaultBaseConfig, defaultConfig, customConfig);

export const system = createSystem(config);
