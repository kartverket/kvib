import { defineStyleConfig } from "@chakra-ui/react";
import { colors, borders, radii } from "../tokens";

const config = defineStyleConfig({
  baseStyle: {
    padding: "8px",
    textDecoration: "underline",
    _focus: {
      border: borders["2px"],
      borderRadius: radii.base,
      borderColor: colors.blue[600],
    },
  },
  variants: {
    green: () => ({
      color: colors.green[500],
      _hover: {
        color: colors.green[400],
        textDecoration: "none",
      },
      _active: {
        color: colors.green[600],
      },
    }),
    blue: () => ({
      color: colors.blue[500],
      _hover: {
        color: colors.blue[400],
        textDecoration: "none",
      },
      _active: {
        color: colors.blue[600],
      },
    }),
  },
  defaultProps: {
    variant: "green",
  },
});

export default config;
