import "@fontsource-variable/mulish";
import { create } from "@storybook/theming";
import logo from "./kvib_logo.svg";

export default create({
  base: "light",

  // Typography
  fontBase: '"Mulish Variable", "Open Sans", sans-serif',
  fontCode: "monospace",
  brandTitle: "Kartverkets Designsystem",
  brandUrl: "/",
  brandImage: logo,
  brandTarget: "_self",

  colorPrimary: "#D0ECD6",
  colorSecondary: "#156630",

  // UI
  appBg: "#ffffff",
  appContentBg: "#ffffff",
  appPreviewBg: "#ffffff",
  appBorderColor: "#E3E0E0",
  appBorderRadius: 0,

  // Text colors
  textColor: "#202020",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#156630",
  barSelectedColor: "#156630",
  barHoverColor: "#D0ECD6",
  barBg: "#D0ECD6",

  // Form colors
  inputBg: "#ffffff",
  inputBorder: "#10162F",
  inputTextColor: "#10162F",
  inputBorderRadius: 2,
});
