import { create } from "@storybook/theming";
import logo from "./kvib_logo.svg";
import "@fontsource-variable/mulish";

const isLocalhost = window.location.hostname === "localhost";

export default create({
  base: "light",
  // Typography
  fontBase: '"Mulish Variable", "Open Sans", sans-serif',
  fontCode: "monospace",
  brandTitle: "Kartverkets Designsystem",
  brandUrl: isLocalhost ? "/" : "/kvib",
  brandImage: logo,
  brandTarget: "_self",

  //
  colorPrimary: "#D0ECD6",
  colorSecondary: "#1A833B",

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
  barBg: "#E9F4EC",
});
