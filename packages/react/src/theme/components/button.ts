import { defineStyleConfig, defineStyle } from "@chakra-ui/react";
import { colors } from "../tokens";

const variantSolid = defineStyle((props) => {
  const { colorScheme: c } = props;

  if (c === "gray") {
    return {
      bg: colors.gray[100],
      color: colors.black,
      _hover: {
        bg: colors.gray[200],
      },
      _active: {
        bg: colors.gray[300],
      },
    };
  }
  return {
    bg: `${c}.500`,
    color: colors.white,
    _hover: {
      bg: `${c}.400`,
    },
    _active: {
      bg: `${c}.600`,
    },
  };
});

const variantOutline = defineStyle((props) => {
  const { colorScheme: c } = props;

  if (c === "gray") {
    return {
      bg: colors.white,
      borderColor: colors.gray[200],
      color: colors.black,
      _hover: {
        bg: colors.gray[50],
        _disabled: {
          bg: colors.white,
          color: colors.black,
        },
      },
      _active: {
        bg: colors.gray[100],
        _disabled: {
          bg: colors.white,
          color: colors.black,
        },
      },
    };
  }
  return {
    bg: colors.white,
    borderColor: `${c}.500`,
    color: `${c}.500`,
    _hover: {
      bg: `${c}.400`,
      color: colors.white,
      _disabled: {
        bg: colors.white,
        color: `${c}.500`,
      },
    },
    _active: {
      bg: `${c}.600`,
      color: colors.white,
      _disabled: {
        bg: colors.white,
        color: `${c}.500`,
      },
    },
  };
});

const variantLink = defineStyle((props) => {
  const { colorScheme: c } = props;

  if (c === "gray") {
    return {
      color: colors.gray[800],
      backgroundColor: "transparent",
      _hover: {
        textDecoration: "none",
        color: colors.gray[500],
        ".text": {
          textDecoration: "Underline",
        },
        _disabled: {
          ".text": {
            textDecoration: "none",
            color: colors.gray[800],
          },
        },
      },
      _active: {
        color: colors.gray[900],
        textDecoration: "none",
        ".text": {
          textDecoration: "Underline",
        },
        _disabled: {
          color: colors.gray[800],
        },
      },
      _loading: {
        color: colors.gray[800],
      },
    };
  }
  return {
    color: `${c}.500`,
    backgroundColor: "transparent",
    _hover: {
      textDecoration: "none",
      color: `${c}.400`,
      ".text": {
        textDecoration: "Underline",
      },
      _disabled: {
        ".text": {
          textDecoration: "none",
        },
        textDecoration: "none",
        color: `${c}.500`,
      },
    },
    _active: {
      textDecoration: "none",
      color: `${c}.600`,
      ".text": {
        textDecoration: "underline",
      },
      _disabled: {
        ".text": {
          textDecoration: "none",
          color: `${c}.500`,
        },
      },
    },
    _loading: {
      color: `${c}.500`,
    },
  };
});

const config = defineStyleConfig({
  baseStyle: () => ({
    fontStyle: "normal",
    fontWeight: "600",
    gap: "8px",
    borderRadius: "6px",
    _disabled: {
      opacity: 0.5,
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
    solid: variantSolid,
    outline: variantOutline,
    link: variantLink,
  },
  defaultProps: {
    variant: "solid",
    size: "md",
  },
});

export default config;
