import { defineRecipe, defineStyle, SystemStyleObject } from "@chakra-ui/react";

const baseStyle = defineStyle({
  fontStyle: "normal !important",
  fontWeight: "medium !important",
  gap: "0.5 !important",
  borderRadius: "md !important",
  _disabled: {
    opacity: "0.5",
    cursor: "not-allowed",
  },
}) satisfies SystemStyleObject;

const solidThemeGray = defineStyle({
  bg: "gray.100 !important",
  color: "black !important",
  _hover: {
    bg: "gray.200 !important",
    _disabled: {
      bg: "gray.100 !important",
      color: "black !important",
    },
  },
  _active: {
    bg: "gray.300 !important",
    _disabled: {
      bg: "gray.100 !important",
      color: "black !important",
    },
  },
});

const solidThemeColor = defineStyle({
  bg: "colorPalette.500 !important",
  color: "white !important",
  _hover: {
    bg: "colorPalette.400 !important",
    _disabled: {
      bg: "colorPalette.500 !important",
      color: "white !important",
    },
  },
  _active: {
    bg: "colorPalette.600 !important",
    _disabled: {
      bg: "colorPalette.500 !important",
      color: "white !important",
    },
  },
});

const outlineThemeGray = defineStyle({
  outline: "1px !important",
  borderColor: "gray.200 !important",
  color: "black !important",
  _hover: {
    bg: "gray.200 !important",
    color: "black !important",
    _disabled: {
      bg: "gray.100 !important",
      color: "black !important",
    },
  },
  _active: {
    bg: "gray.300 !important",
    _disabled: {
      bg: "gray.100 !important",
      color: "black !important",
    },
  },
});

const outlineThemeColor = defineStyle({
  outline: "1px !important",
  borderColor: "colorPalette.500 !important",
  color: "colorPalette.500 !important",
  _hover: {
    borderColor: "colorPalette.400 !important",
    bg: "colorPalette.400 !important",
    color: "white !important",
    _disabled: {
      bg: "colorPalette.500 !important",
      color: "colorPalette.500 !important",
      border: "1px !important",
    },
  },
  _active: {
    bg: "colorPalette.600 !important",
    borderColor: "colorPalette.600 !important",
    color: "white !important",
    _disabled: {
      bg: "colorPalette.500 !important",
      color: "colorPalette.500 !important",
      border: "1px !important",
    },
  },
});

const tertiaryThemeGray = defineStyle({
  color: "gray.500 !important",
  bg: "transparent !important",
  _hover: {
    textDecoration: "underline !important",
    color: "gray.400 !important",
    _disabled: {
      textDecoration: "none !important",
      color: "gray.500 !important",
    },
  },
  _active: {
    textDecoration: "underline !important",
    color: "gray.600 !important",
    _disabled: {
      textDecoration: "none !important",
      color: "gray.500 !important",
    },
  },
});

const tertiaryThemeColor = defineStyle({
  color: "colorPalette.500 !important",
  bg: "transparent !important",
  _hover: {
    textDecoration: "underline !important",
    color: "colorPalette.400 !important",
    _disabled: {
      textDecoration: "none !important",
      color: "colorPalette.500 !important",
    },
  },
  _active: {
    textDecoration: "underline !important",
    color: "colorPalette.600 !important",
    _disabled: {
      textDecoration: "none !important",
      color: "colorPalette.500 !important",
    },
  },
});

const ghostThemeGray = defineStyle({
  bg: "transparent !important",
  color: "gray.500 !important",
  _hover: {
    bg: "gray.100 !important",
    color: "gray.400 !important",
    _disabled: {
      bg: "transparent !important",
      color: "gray.500 !important",
    },
  },
  _active: {
    bg: "gray.100 !important",
    color: "gray.600 !important",
    _disabled: {
      bg: "transparent !important",
      color: "gray.500 !important",
    },
  },
});

const ghostThemeColor = defineStyle({
  bg: "transparent !important",
  color: "colorPalette.500 !important",
  _hover: {
    bg: "colorPalette.100 !important",
    color: "colorPalette.400 !important",
    _disabled: {
      bg: "transparent !important",
      color: "colorPalette.500 !important",
    },
  },
  _active: {
    bg: "colorPalette.100 !important",
    color: "colorPalette.600 !important",
    _disabled: {
      bg: "transparent !important",
      color: "colorPalette.500 !important",
    },
  },
});

export const buttonTheme = defineRecipe({
  base: baseStyle,
  variants: {
    variant: {
      primary: solidThemeColor,
      secondary: outlineThemeColor,
      tertiary: tertiaryThemeColor,
      ghost: ghostThemeColor,
    },
  },
  compoundVariants: [
    {
      variant: "primary",
      colorPalette: "gray",
      css: solidThemeGray,
    },
    {
      variant: "secondary",
      colorPalette: "gray",
      css: outlineThemeGray,
    },
    {
      variant: "tertiary",
      colorPalette: "gray",
      css: tertiaryThemeGray,
    },
    {
      variant: "ghost",
      colorPalette: "gray",
      css: ghostThemeGray,
    },
  ],
  defaultVariants: {
    variant: "primary",
    colorPalette: "green",
  },
});
