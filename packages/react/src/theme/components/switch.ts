import { defineStyleConfig } from "@chakra-ui/react";

export const switchTheme = defineStyleConfig({
  baseStyle: ({ colorScheme }) => ({
    track: {
      bg: "gray.400", // Border color when unchecked
      _checked: {
        bg: `${colorScheme}.500`,
      },
    },
  }),
});
