import { defineStyleConfig } from "@chakra-ui/react";
import { colors } from "../foundations";

const config = defineStyleConfig({
  baseStyle: ({ colorScheme }) => ({
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "28p",
    borderRadius: "8px",
    border: "0",
    outline: "transparent solid 2px",
    outlineOffset: "2px",
    display: "inline-flex",
    appearance: "none",
    alignItems: "center",
    justifyContent: "center",
    cursor: "pointer",
    gap: "4px",
    textDecoration: "none",
  }),
  sizes: {
    sm: {
      fontSize: "16px",
      lineHeight: "24px",
      paddingLeft: "24px",
      paddingRight: "24px",
      minWidth: "100px",
      minHeight: "44px",
    },
    md: {
      fontSize: "18px",
      lineHeight: "28px",
      paddingLeft: "24px",
      paddingRight: "24px",
      minWidth: "106px",
      minHeight: "56px",
    },
  },
  variants: {
    primary: {
      _disabled: {
        color: colors.grayDark,
        backgroundColor: colors.grayLight,
        boxShadow: `${colors.greenDark} 0 0 0 1px inset`,
        cursor: "not-allowed",
      },
      _hover: {},
    },
    secondary: {
      backgroundColor: colors.white,
      _disabled: {
        color: colors.grayDark,
        backgroundColor: colors.grayLight,
        boxShadow: `${colors.greenDark} 0 0 0 1px inset`,
        cursor: "not-allowed",
      },
    },
    tertiary: {
      backgroundColor: "transparent",
      textDecoration: "underline",
      _disabled: {
        color: colors.grayDark,
        boxShadow: "none",
        cursor: "not-allowed",
      },
    },
  },
  defaultProps: {
    variant: "primary",
  },
});

export default config;
