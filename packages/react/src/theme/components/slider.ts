import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle((props) => {
  return {
    track: {
      bg: "gray.400", // Border color when unchecked
    },
    thumb: {
      // borderColor: "pink.500", // Border color of the thumb
      borderWidth: "2px",
      borderColor: `${props.colorScheme}.500`, // Border color of the thumb
    },
  };
});

export const sliderTheme = defineStyleConfig({
  baseStyle,
});
