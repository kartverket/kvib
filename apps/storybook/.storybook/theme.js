import { create } from "@storybook/theming";
import logo from "./kvib_logo.svg";

export default create({
  base: "light",
  brandTitle: "KVIB",
  brandUrl: "https://kartverket.github.io/kvib/storybook",
  brandImage: logo,
  brandTarget: "_self",
});
