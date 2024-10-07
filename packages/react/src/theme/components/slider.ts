import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle((props) => {
  return {
    track: {
      bg: "gray.300",
    },
    thumb: {
      borderWidth: "2px",
      borderColor: `${props.colorScheme}.500`,
    },
  };
});

export const sliderTheme = defineStyleConfig({
  baseStyle,
});
