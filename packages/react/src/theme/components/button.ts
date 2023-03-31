import { defineStyleConfig } from "@chakra-ui/react";
import { colors } from "../foundations";

const config = defineStyleConfig({
  baseStyle: ({ colorScheme }) => ({
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "18px",
    lineHeight: "28px",
    borderRadius: "8px",
    backgroundColor: `${colorScheme}.500`,
    _disabled: {
      opacity: 1,
      color: colors.gray[600],
      cursor: "not-allowed",
    },
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
    primary: ({ colorScheme }) => ({
      color: colors.white,
      _hover: {
        backgroundColor: `${colorScheme}.400`,
        _disabled: {
          color: colors.gray[600],
          backgroundColor: colors.gray[50],
        },
      },
      _active: {
        backgroundColor: `${colorScheme}.600`,
        boxShadow: `${colors.blue[600]} 0 0 0 2px inset, ${colors.blue[600]} 0 0 0 2px inset,
          ${colors.white} 0 0 0 4px inset`,
        _disabled: {
          color: colors.gray[600],
          backgroundColor: colors.gray[50],
          boxShadow: `${colors.gray[600]} 0 0 0 1px inset`,
        },
      },
      _disabled: {
        backgroundColor: colors.gray[50],
        boxShadow: `${colors.gray[600]} 0 0 0 1px inset`,
      },
    }),
    secondary: ({ colorScheme, theme }) => ({
      color: `${colorScheme}.500`,
      backgroundColor: colors.white,
      boxShadow: `${theme.colors[colorScheme][500]} 0 0 0 1px inset`,
      _hover: {
        backgroundColor: `${colorScheme}.400`,
        boxShadow: `${theme.colors[colorScheme][400]} 0 0 0 1px inset`,
        color: colors.white,
        _disabled: {
          color: colors.gray[600],
          backgroundColor: colors.gray[50],
        },
      },
      _active: {
        color: colors.white,
        backgroundColor: `${colorScheme}.600`,
        boxShadow: `${colors.blue[600]} 0 0 0 2px inset, ${colors.blue[600]} 0 0 0 2px inset,
        ${colors.white} 0 0 0 4px inset`,
        _disabled: {
          color: colors.gray[600],
          backgroundColor: colors.gray[50],
          boxShadow: `${colors.gray[600]} 0 0 0 1px inset`,
        },
      },
      _disabled: {
        backgroundColor: colors.gray[50],
        boxShadow: `${colors.gray[600]} 0 0 0 1px inset`,
      },
    }),
    tertiary: ({ colorScheme }) => ({
      color: `${colorScheme}.500`,
      backgroundColor: "transparent",
      textDecoration: "underline",
      _hover: {
        color: `${colorScheme}.400`,
        _disabled: {
          color: colors.gray[600],
        },
      },
      _active: {
        color: `${colorScheme}.600`,
        boxShadow: `${colors.blue[600]} 0 0 0 2px inset`,
        _disabled: {
          color: colors.gray[600],
          boxShadow: "none",
        },
      },
      _disabled: {
        boxShadow: "none",
      },
    }),
  },
  defaultProps: {
    variant: "primary",
    size: "md",
  },
});

export default config;
