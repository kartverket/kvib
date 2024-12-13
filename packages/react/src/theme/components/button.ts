import { defineRecipe, defineStyle, SystemStyleObject } from "@chakra-ui/react";

const baseStyle = defineStyle({
  colorPalette: "green",
  fontStyle: "normal",
  fontWeight: "medium",
  gap: "0.5",
  borderRadius: "md",
  _disabled: {
    opacity: "0.5",
    cursor: "not-allowed",
  },
}) satisfies SystemStyleObject;

const solidThemeGray = defineStyle({
  bg: "gray.100",
  color: "black",
  _hover: {
    bg: "gray.200",
    _disabled: {
      bg: "gray.100",
      color: "black",
    },
  },
  _active: {
    bg: "gray.300",
    _disabled: {
      bg: "gray.100",
      color: "black",
    },
  },
});

const solidThemeColor = defineStyle({
  bg: "colorPalette.500",
  color: "white",
  _hover: {
    bg: "colorPalette.400",
    _disabled: {
      bg: "colorPalette.500",
      color: "white",
    },
  },
  _active: {
    bg: "colorPalette.600",
    _disabled: {
      bg: "colorPalette.500",
      color: "white",
    },
  },
});

const outlineThemeGray = defineStyle({
  outline: "1px",
  borderColor: "gray.200",
  color: "black",
  _hover: {
    bg: "gray.200",
    color: "black",
    _disabled: {
      bg: "gray.100",
      color: "black",
    },
  },
  _active: {
    bg: "gray.300",
    _disabled: {
      bg: "gray.100",
      color: "black",
    },
  },
});

const outlineThemeColor = defineStyle({
  outline: "1px",
  borderColor: "colorPalette.500",
  color: "colorPalette.500",
  _hover: {
    borderColor: "colorPalette.400",
    bg: "colorPalette.400",
    color: "white",
    _disabled: {
      bg: "colorPalette.500",
      color: "colorPalette.500",
      border: "1px",
    },
  },
  _active: {
    bg: "colorPalette.600",
    borderColor: "colorPalette.600",
    color: "white",
    _disabled: {
      bg: "colorPalette.500",
      color: "colorPalette.500",
      border: "1px",
    },
  },
});
const plainThemeGray = defineStyle({
  color: "gray.500",
  bg: "transparent",
  _hover: {
    color: "gray.400",
    _disabled: {
      textDecoration: "none",
      color: "gray.500",
    },
  },
  _active: {
    color: "gray.600",
    _disabled: {
      textDecoration: "none",
      color: "gray.500",
    },
  },
});

const plainTheme = defineStyle({
  color: "colorPalette.500",
  bg: "transparent",
  _hover: {
    color: "colorPalette.400",
    _disabled: {
      textDecoration: "none",
      color: "colorPalette.500",
    },
  },
  _active: {
    color: "colorPalette.600",
    _disabled: {
      textDecoration: "none",
      color: "colorPalette.500",
    },
  },
});

const ghostThemeGray = defineStyle({
  bg: "transparent",
  color: "gray.500",
  _hover: {
    bg: "gray.100",
    color: "gray.400",
    _disabled: {
      bg: "transparent",
      color: "gray.500",
    },
  },
  _active: {
    bg: "gray.100",
    color: "gray.600",
    _disabled: {
      bg: "transparent",
      color: "gray.500",
    },
  },
});

const ghostThemeColor = defineStyle({
  bg: "transparent",
  color: "colorPalette.500",
  _hover: {
    bg: "colorPalette.100",
    color: "colorPalette.400",
    _disabled: {
      bg: "transparent",
      color: "colorPalette.500",
    },
  },
  _active: {
    bg: "colorPalette.100",
    color: "colorPalette.600",
    _disabled: {
      bg: "transparent",
      color: "colorPalette.500",
    },
  },
});

export const buttonTheme = defineRecipe({
  base: baseStyle,
  variants: {
    variant: {
      solid: solidThemeColor,
      outline: outlineThemeColor,
      ghost: ghostThemeColor,
      plain: plainTheme,
    },
  },
  compoundVariants: [
    {
      variant: "solid",
      colorPalette: "gray",
      css: solidThemeGray,
    },
    {
      variant: "outline",
      colorPalette: "gray",
      css: outlineThemeGray,
    },
    {
      variant: "plain",
      colorPalette: "gray",
      css: plainThemeGray,
    },
    {
      variant: "ghost",
      colorPalette: "gray",
      css: ghostThemeGray,
    },
  ],
  defaultVariants: {
    variant: "solid",
    colorPalette: "green",
  },
});
