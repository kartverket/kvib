import { defineStyleConfig } from "@chakra-ui/react";
import { colors } from "../tokens";

const config = defineStyleConfig({
  baseStyle: ({ colorScheme }) => ({
    fontStyle: "normal",
    fontWeight: "700",
    fontSize: "18px",
    gap: "8px",
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
    xs: {
      fontSize: "12px",
      lineHeight: "16px",
      paddingLeft: "8px",
      paddingRight: "8px",
      gap: "6px",
      minWidth: "90px",
      minHeight: "24px",
    },
    sm: {
      fontSize: "14px",
      lineHeight: "20px",
      paddingLeft: "12px",
      paddingRight: "12px",
      minWidth: "100px",
      minHeight: "32px",
    },
    md: {
      fontSize: "16px",
      lineHeight: "24px",
      paddingLeft: "16px",
      paddingRight: "16px",
      minWidth: "100px",
      minHeight: "40px",
    },
    lg: {
      fontSize: "18px",
      lineHeight: "28px",
      paddingLeft: "24px",
      paddingRight: "24px",
      minWidth: "106px",
      minHeight: "48px",
    },
  },
  variants: {
    solid: ({ colorScheme }) => ({
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
      _loading: {
        backgroundColor: `${colorScheme}.500`,
        color: colors.white,
        _hover: {
          backgroundColor: `${colorScheme}.500`,
          color: colors.white,
        },
      },
    }),
    outline: ({ colorScheme, theme }) => ({
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
      _loading: {
        color: `${colorScheme}.500`,
        backgroundColor: colors.white,
        boxShadow: `${theme.colors[colorScheme][500]} 0 0 0 1px inset`,
        _hover: {
          color: `${colorScheme}.500`,
          backgroundColor: colors.white,
        },
      },
    }),
    link: ({ colorScheme }) => ({
      color: `${colorScheme}.500`,
      backgroundColor: "transparent",
      ".text": {
        textDecoration: "Underline",
      },
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
      _loading: {
        color: `${colorScheme}.500`,
      },
    }),
  },
  defaultProps: {
    variant: "solid",
    size: "md",
  },
});

export default config;
