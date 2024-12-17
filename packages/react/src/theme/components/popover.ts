import { defineSlotRecipe } from "@chakra-ui/react";
import { popoverAnatomy } from "@chakra-ui/react/anatomy";

export const popoverTheme = defineSlotRecipe({
  className: "kvib-popover",
  slots: popoverAnatomy.keys(),
  base: {
    content: {
      textStyle: "md",
      fontSize: "fontSizes.md",
      "--box-shadow-color": "{colors.colorPalette.100}",
      "--box-shadow-inset": "inset 0 0 0 1px var(--box-shadow-color)",
      boxShadow: "{shadows.lg}, var(--box-shadow-inset)",
    },
    arrowTip: {
      border: "none",
      "--box-shadow-color": "{colors.colorPalette.100}",

      boxShadow:
        "-1px -1px 1px -1px rgba(0, 0, 0, 0.1), -4px -4px 6px -2px rgba(0, 0, 0, 0.05), inset 1px 1px 0 var(--box-shadow-color)",
    },
    closeTrigger: {
      position: "absolute",
      top: "2px",
      right: "2px",
      width: "1rem",
      height: "1rem",
      boxSizing: "content-box",
    },
  },
  defaultVariants: {
    colorPalette: "gray",
  },
});
