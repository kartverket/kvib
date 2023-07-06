import { defineStyleConfig } from "@chakra-ui/react";
import { colors, borders, radii } from "../tokens";

export const linkTheme = defineStyleConfig({
  baseStyle: ({ colorScheme }) => ({
    padding: "8px",
    textDecoration: "underline",
    _focus: {
      border: borders["2px"],
      borderRadius: radii.base,
      borderColor: colors.blue[600],
    },
    color: `${colorScheme}.500`,
    _hover: {
      color: `${colorScheme}.400`,
      textDecoration: "none",
    },
    _active: {
      color: `${colorScheme}.600`,
    },
  }),
  defaultProps: {
    colorScheme: "green",
  },
});
