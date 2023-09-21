import { defineStyleConfig } from "@chakra-ui/react";

export const sliderTheme = defineStyleConfig({
  baseStyle: {
    track: {
      bg: "gray.400", // Border color when unchecked
    },
    thumb: {
      borderColor: "gray.400", // Border color of the thumb
    },
  },
  variants: {},
});
