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
    backgroundColor: `${colorScheme}.80`,
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
      _disabled: {
        color: colors.grayDark,
        backgroundColor: colors.grayLight,
        boxShadow: `${colors.grayDark} 0 0 0 1px inset`,
        cursor: "not-allowed",
      },
      _hover: {
        backgroundColor: `${colorScheme}.50`,
        _disabled: {
          color: colors.grayDark,
          backgroundColor: colors.grayLight,
        },
      },
      _active: {
        backgroundColor: `${colorScheme}.80`,
        boxShadow: `${colors.blue[100]} 0 0 0 2px inset, ${colors.blue[100]} 0 0 0 2px inset,
          ${colors.white} 0 0 0 4px inset`,
        _disabled: {
          color: colors.grayDark,
          backgroundColor: colors.grayLight,
          boxShadow: `${colors.grayDark} 0 0 0 1px inset`,
        },
      },
      _focusVisible: {
        backgroundColor: `${colorScheme}.80`,
        boxShadow: `${colors.blue[100]} 0 0 0 2px inset, ${colors.blue[100]} 0 0 0 2px inset,
        ${colors.white} 0 0 0 4px inset`,
      },
    }),
    secondary: ({ colorScheme, theme }) => ({
      color: `${colorScheme}.80`,
      backgroundColor: colors.white,
      boxShadow: `${theme.colors[colorScheme][80]} 0 0 0 1px inset`,
      _hover: {
        backgroundColor: `${colorScheme}.50`,
        boxShadow: `${theme.colors[colorScheme][50]} 0 0 0 1px inset`,
        color: colors.white,
        _disabled: {
          color: colors.grayDark,
          backgroundColor: colors.grayLight,
        },
      },
      _active: {
        color: colors.white,
        backgroundColor: `${colorScheme}.80`,
        boxShadow: `${colors.blue[100]} 0 0 0 2px inset, ${colors.blue[100]} 0 0 0 2px inset,
        ${colors.white} 0 0 0 4px inset`,
        _disabled: {
          color: colors.grayDark,
          backgroundColor: colors.grayLight,
          boxShadow: `${colors.grayDark} 0 0 0 1px inset`,
        },
      },
      _focusVisible: {
        color: `${colorScheme}.80`,
        backgroundColor: colors.white,
        boxShadow: `${theme.colors[colorScheme][100]} 0 0 0 2px inset, ${colors.white} 0 0 0 4px inset, currentcolor 0 0 0 5px inset`,
      },
      _disabled: {
        color: colors.grayDark,
        backgroundColor: colors.grayLight,
        boxShadow: `${colors.grayDark} 0 0 0 1px inset`,
        cursor: "not-allowed",
      },
    }),
    tertiary: ({ colorScheme, theme }) => ({
      color: `${colorScheme}.80`,
      backgroundColor: "transparent",
      textDecoration: "underline",
      _hover: {
        color: `${colorScheme}.100`,
        _disabled: {
          color: colors.grayDark,
        },
      },
      _active: {
        boxShadow: `${theme.colors[colorScheme][100]} 0 0 0 2px inset`,
        _disabled: {
          color: colors.grayDark,
          boxShadow: "none",
        },
      },
      _focusVisible: {
        boxShadow: `${theme.colors[colorScheme][100]} 0 0 0 2px inset`,
      },
      _disabled: {
        color: colors.grayDark,
        boxShadow: "none",
        cursor: "not-allowed",
      },
    }),
  },
  defaultProps: {
    variant: "primary",
    size: "md",
  },
});

export default config;
