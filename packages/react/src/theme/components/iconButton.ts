import { colors } from "../tokens";
// import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";

import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

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

export const IconButtonTheme = defineStyleConfig({
  baseStyle: () => ({
    borderRadius: "6px",
    outline: 0,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    flexShrink: 0,
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
    },
    sm: {
      fontSize: "14px",
      padding: "9px",
      width: "32px",
      height: "32px",
    },
    md: {
      fontSize: "16px",
      padding: "12px",
      width: "40px",
      height: "40px",
    },
    lg: {
      fontSize: "18px",
      lineHeight: "28px",
      padding: "15px",
      width: "48px",
      height: "48px",
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
    colorScheme: "green",
  },
});

// const variantOutline = defineStyle({
//   bg: "red",
//   border: "2px dashed", // change the appearance of the border
//   borderRadius: 0, // remove the border radius
//   fontWeight: "semibold", // change the font weight
// });
//
// const variantSolid = defineStyle({
//   bg: colors.green[500],
//   alignItems: "center",
//   padding: "12px",
//   border: "2px dashed",
//   borderRadius: 0,
//   fontWeight: "semibold",
// });
// const variantLink = defineStyle({
//   bg: colors.green[500],
//   alignItems: "center",
//   padding: "12px",
//   border: "2px dashed",
//   borderRadius: 0,
//   fontWeight: "semibold",
// });
//
//
// const sizeLg= defineStyle({
//   bg: "red",
// });
// const sizemD= defineStyle({
//   bg: "red",
// });
//
// export const IconButtonTheme = defineStyleConfig({
//   variants: {
//     outline: variantOutline,
//     solid: variantSolid,
//     link: variantLink
//   },
//   defaultProps: {
//     variant: "solid"
//   }
// });
