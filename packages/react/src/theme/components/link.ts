import { defineStyleConfig } from "@chakra-ui/react";
import { colors, borders, radii } from "../tokens";

export const linkTheme = defineStyleConfig({
  baseStyle: ({ colorScheme }) => ({
    textDecoration: "underline",
    _focusVisible: {
      outline: borders["2px"],
      borderRadius: "1px",
      outlineColor: colors.blue[600],
      boxShadow: "none",
    },
    color: `${colorScheme}.500`,
    _hover: {
      color: `${colorScheme}.400`,
      textDecoration: "none",
    },
    _active: {
      color: `${colorScheme}.600`,
      textDecoration: "underline",
    },
  }),
  defaultProps: {
    colorScheme: "green",
  },
});
