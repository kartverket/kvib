import { addons } from "@storybook/manager-api";
import theme from "./theme";

addons.setConfig({
  theme,
  title: "Kartverkets Designsystem",
  showToolbar: false,
  panelPosition: "bottom",
  sidebar: {
    showRoots: true,
    collapsedRoots: ["kom-i-gang", "bidra"],
  },
});
