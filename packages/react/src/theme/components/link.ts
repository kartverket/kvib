import { defineStyleConfig } from "@chakra-ui/react";
import { colors, borders, radii } from "../tokens";

const config = defineStyleConfig({
  baseStyle: {
    textDecoration: "underline",
    _focusVisible: {
      borderRadius: "2px",
    },
  },
  variants: {
    green: () => ({
      color: colors.green[500],
      padding: "8px",
      _hover: {
        color: colors.green[400],
        textDecoration: "none",
      },
      _active: {
        color: colors.green[600],
      },
      _focus: {
        border: borders["2px"],
        borderRadius: radii.base,
        borderColor: colors.blue[600],
      },
    }),
    blue: () => ({
      color: colors.blue[500],
      padding: "5px",
      _hover: {
        color: colors.blue[400],
        textDecoration: "none",
      },
      _active: {
        color: colors.blue[600],
      },
      _focus: {
        border: borders["2px"],
        borderRadius: radii.base,
        borderColor: colors.blue[600],
      },
    }),
  },
  defaultProps: {
    variant: "green",
  },
});

export default config;
