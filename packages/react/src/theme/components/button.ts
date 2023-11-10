import { defineStyleConfig, defineStyle } from "@chakra-ui/react";
import { colors } from "../tokens";

const baseStyle = defineStyle({
  fontStyle: "normal",
  fontWeight: "600",
  gap: "8px",
  borderRadius: "6px",
  _disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
  },
});

const variantSolid = defineStyle((props) => {
  const { colorScheme: c } = props;

  if (c === "gray") {
    return {
      bg: colors.gray[100],
      color: colors.black,
      _hover: {
        bg: colors.gray[200],
        _disabled: {
          bg: colors.gray[100],
          color: colors.black,
        },
      },
      _active: {
        bg: colors.gray[300],
        _disabled: {
          bg: colors.gray[100],
          color: colors.black,
        },
      },
    };
  }
  return {
    bg: `${c}.500`,
    color: colors.white,
    _hover: {
      bg: `${c}.400`,
      _disabled: {
        bg: `${c}.500`,
        color: colors.white,
      },
    },
    _active: {
      bg: `${c}.600`,
      _disabled: {
        bg: `${c}.500`,
        color: colors.white,
      },
    },
  };
});

const variantOutline = defineStyle((props) => {
  const { colorScheme: c } = props;

  if (c === "gray") {
    return {
      border: "1px",
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
    border: "1px",
    borderColor: `${c}.500`,
    color: `${c}.500`,
    _hover: {
      borderColor: `${c}.400`,
      bg: `${c}.400`,
      color: colors.white,
      _disabled: {
        bg: colors.white,
        color: `${c}.500`,
        border: "1px",
      },
    },
    _active: {
      bg: `${c}.600`,
      borderColor: `${c}.600`,
      color: colors.white,
      _disabled: {
        bg: colors.white,
        color: `${c}.500`,
        border: "1px",
      },
    },
  };
});

const variantTertiary = defineStyle((props) => {
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

const variantGhost = defineStyle((props) => {
  const { colorScheme: c } = props;

  if (c === "gray") {
    return {
      bg: "transparent",
      color: colors.gray[800],
      _hover: {
        bg: colors.gray[50],
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
      color: `${c}.400`,
      _disabled: {
        bg: "transparent",
        color: `${c}.500`,
      },
    },
    _active: {
      bg: `${c}.100`,
      color: `${c}.600`,
      _disabled: {
        bg: "transparent",
        color: `${c}.500`,
      },
    },
  };
});

const variants = {
  primary: variantSolid,
  secondary: variantOutline,
  tertiary: variantTertiary,
  ghost: variantGhost,
};

export const buttonTheme = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {
    variant: "primary",
    size: "md",
  },
});
