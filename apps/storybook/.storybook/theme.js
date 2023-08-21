import { create } from "@storybook/theming";
import logo from "./kvib_logo.svg";

export default create({
  base: "light",
  // Typography
  fontBase: '"Mulish", "Open Sans", sans-serif',
  fontCode: "monospace",
  brandTitle: "KVIB",
  brandUrl: "https://kartverket.github.io/kvib/storybook",
  brandImage: logo,
  brandTarget: "_self",

  //
  colorPrimary: "#1A589F",
  colorSecondary: "#1A589F",

  // UI
  appBg: "#F5F2F2",
  appContentBg: "#ffffff",
  appBorderColor: "#E3E0E0",
  appBorderRadius: 16,

  // Text colors
  textColor: "#202020",
  textInverseColor: "#ffffff",

  // Toolbar default and active colors
  barTextColor: "#1A589F",
  barSelectedColor: "#1A589F",
  barBg: "#E4F1F8",
});
