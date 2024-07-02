import { create } from "@storybook/theming";
import logo from "./kvib_logo.svg";
import "@fontsource-variable/mulish";

export default create({
  base: "light",
  // Typography
  fontBase: '"Mulish Variable", "Open Sans", sans-serif',
  fontCode: "monospace",
  brandTitle: "Kartverkets Designsystem",
  brandUrl: "/",
  brandImage: logo,
  brandTarget: "_self",

  //
  colorPrimary: "#D0ECD6",
  colorSecondary: "#156630",

  // UI
  appBg: "white",
  appContentBg: "white",
  appBorderColor: "#E3E0E0",
  appBorderRadius: 0,

  // Text colors
  textColor: "#202020",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#1A833B",
  barSelectedColor: "#1A833B",
  barHoverColor: "#F0EDED",
  barBg: "#E9F4EC",
});
