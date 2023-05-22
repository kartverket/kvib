import { defineStyleConfig } from "@chakra-ui/react";
import { colors } from "../foundations";

const config = defineStyleConfig({
  baseStyle: {
    textDecoration: "underline",
    _focusVisible: {
      borderRadius: "2px",
    },
  },
  variants: {
    primary: {
      color: colors.green[500],
      _hover: {
        color: colors.green[400],
        textDecoration: "none",
      },
      _active: {
        color: colors.green[600],
      },
    },
    secondary: {
      color: colors.blue[500],
      _hover: {
        color: colors.blue[400],
        textDecoration: "none",
      },
      _active: {
        color: colors.blue[600],
      },
    },
  },
  defaultProps: {
    variant: "primary",
  },
});

export default config;
