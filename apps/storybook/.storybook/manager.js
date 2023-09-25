import { addons } from "@storybook/addons";
import theme from "./theme";
import "./docs-root.css";

addons.setConfig({
  theme,
  title: "KVIB | Kartverket",
  showToolbar: false,
  panelPosition: "right",
});
