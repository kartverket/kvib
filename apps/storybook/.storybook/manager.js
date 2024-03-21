import { addons } from "@storybook/addons";
import theme from "./theme";
import "./docs-root.css";

addons.setConfig({
  theme,
  title: "Kartverkets Designsystem",
  showToolbar: false,
  panelPosition: "bottom",
  sidebar: {
    showRoots: true,
    collapsedRoots: ["other"],
  },
});
