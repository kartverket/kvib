import { addons } from "@storybook/manager-api";
import "./docs-root.css";
import theme from "./theme";

addons.setConfig({
  theme,
  title: "Kartverkets Designsystem",
  showToolbar: false,
  panelPosition: "bottom",
  sidebar: {
    showRoots: true,
    collapsedRoots: [
      "for-utviklere",
      "for-designere",
      "designfundament",
      "layout",
      "media",
      "hooks",
      "sideelementer",
      "navigasjon",
      "søk",
      "datavisning",
      "skjemaelementer",
      "tilbakemelding",
      "overlay",
      "animasjoner",
      "annet",
      "other",
    ],
  },
});
