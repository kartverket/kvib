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
    collapsedRoots: ["for-utviklere", "for-designere", "design-fundament", 
    "layout", "media", "hooks", "sideelementer", "navigasjon", "søk", "datavisning", "skjemaelementer",
    "tilbakemelding", "overlay", "animasjoner", "annet",  "other"],
  },
});
