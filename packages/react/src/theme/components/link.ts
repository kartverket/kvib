import { defineStyleConfig } from "@chakra-ui/react";

const config = defineStyleConfig({
  baseStyle: {
    textDecoration: "underline",
    _focusVisible: {
      borderRadius: "2px",
    },
  },
  variants: {
    primary: ({ theme }) => ({
      color: theme.colors.green[500],
      _hover: {
        color: theme.colors.green[400],
        textDecoration: "none",
      },
      _active: {
        color: theme.colors.green[600],
      },
    }),
    secondary: ({ theme }) => ({
      color: theme.colors.blue[500],
      _hover: {
        color: theme.colors.blue[400],
        textDecoration: "none",
      },
      _active: {
        color: theme.colors.blue[600],
      },
    }),
  },
  defaultProps: {
    variant: "primary",
  },
});

export default config;
