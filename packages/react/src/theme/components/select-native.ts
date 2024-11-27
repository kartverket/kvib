import { defineSlotRecipe } from "@chakra-ui/react";
import { nativeSelectAnatomy } from "@chakra-ui/react/anatomy";

export const selectNativeTheme = defineSlotRecipe({
  className: "kvib-select-native",
  slots: nativeSelectAnatomy.keys(),
  base: {
    root: {
      height: "fit-content",
      display: "flex",
      width: "100%",
      position: "relative",
    },
  },
});
