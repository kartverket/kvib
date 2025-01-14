import { addons } from "@storybook/manager-api";
import "./docs-root.css";
import theme from "./theme";

addons.setConfig({
  theme,
  title: "Kartverkets designsystem",
  showToolbar: false,
  panelPosition: "bottom",
  sidebar: {
    showRoots: true,
    collapsedRoots: ["kom-i-gang", "bidra"],
  },
});
