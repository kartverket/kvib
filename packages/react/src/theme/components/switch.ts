import { defineStyleConfig } from "@chakra-ui/react";

export const switchTheme = defineStyleConfig({
  baseStyle: ({ colorScheme }) => ({
    track: {
      bg: "gray.300", // Border color when unchecked
      _checked: {
        bg: `${colorScheme}.500`,
      },
    },
  }),
});
