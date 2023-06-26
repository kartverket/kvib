// import { colors } from "../tokens";
import { variantSolid, variantOutline, variantLink } from "./button";

import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { colors } from "../tokens";

export const variantGhost = defineStyle((props) => {
  const { colorScheme: c } = props;

  if (c === "gray") {
    return {
      bg: "transparent",
      color: colors.gray[800],
      _hover: {
        bg: colors.gray[50],
        color: colors.gray[500],
        _disabled: {
          bg: "transparent",
          color: colors.gray[800],
        },
      },
      _active: {
        bg: colors.gray[100],
        color: colors.gray[900],
        _disabled: {
          bg: "transparent",
          color: colors.gray[800],
        },
      },
    };
  }
  return {
    bg: "transparent",
    color: `${c}.500`,
    _hover: {
      bg: `${c}.50`,
      _disabled: {
        bg: "transparent",
        color: `${c}.500`,
      },
    },
    _active: {
      bg: `${c}.100`,
      _disabled: {
        bg: "transparent",
        color: `${c}.500`,
      },
    },
  };
});

export const IconButtonTheme = defineStyleConfig({
  baseStyle: () => ({
    borderRadius: "6px",
    outline: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
    _focusVisible: {
      boxShadow: "outline",
    },
    _disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
    },
  }),
  sizes: {
    xs: {
      fontSize: "12px",
      padding: "6px",
      gap: "6px",
      width: "24px",
      height: "24px",
      ".material-symbols-rounded": {
        fontSize: "12px",
      },
    },
    sm: {
      fontSize: "14px",
      padding: "9px",
      width: "32px",
      height: "32px",
      ".material-symbols-rounded": {
        fontSize: "14px",
      },
    },
    md: {
      fontSize: "16px",
      padding: "12px",
      width: "40px",
      height: "40px",
      ".material-symbols-rounded": {
        fontSize: "16px",
      },
    },
    lg: {
      fontSize: "18px",
      lineHeight: "28px",
      padding: "15px",
      width: "48px",
      height: "48px",
      ".material-symbols-rounded": {
        fontSize: "18px",
      },
    },
  },
  variants: {
    solid: variantSolid,
    outline: variantOutline,
    link: variantLink,
    ghost: variantGhost,
  },
  defaultProps: {
    variant: "solid",
    size: "md",
    colorScheme: "green",
  },
});
