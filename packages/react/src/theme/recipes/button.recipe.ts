import { defineRecipe } from "@chakra-ui/react";

export const buttonRecipe = defineRecipe({
  base: {
    fontStyle: "normal",
    fontWeight: "{fontWeights.bold}",
    gap: "{space.2}",
    borderRadius: "{radii.md}",
    _disabled: {
      opacity: 0.5,
      cursor: "not-allowed",
    },
    bg: "colorPalette.500",
    color: "white",
  },
  variants: {
    variant: {
      primary: {
        bg: `colorPalette.500`,
        color: "white",
        _hover: {
          bg: `colorPalette.400`,
          _disabled: {
            bg: `colorPalette.500`,
            color: "white",
          },
        },
        _active: {
          bg: `colorPalette.600`,
          _disabled: {
            bg: `colorPalette.500`,
            color: "white",
          },
        },
      },
      secondary: {
        border: "1px",
        borderColor: `colorPalette.500`,
        color: "colorPalette.500",
        bg: "transparent",
        _hover: {
          borderColor: `colorPalette.400`,
          bg: `colorPalette.400`,
          color: "white",
          _disabled: {
            bg: "white",
            color: `colorPalette.500`,
            border: "1px",
          },
        },
        _active: {
          bg: `colorPalette.600`,
          borderColor: `colorPalette.600`,
          color: "white",
          _disabled: {
            bg: "white",
            color: `colorPalette.500`,
            border: "1px",
          },
        },
      },
      tertiary: {
        color: `colorPalette.500`,
        backgroundColor: "transparent",
        textDecoration: "none",
        _hover: {
          color: `colorPalette.400`,
          textDecoration: "underline",
          _disabled: {
            textDecoration: "none",
            color: `colorPalette.500`,
          },
        },
        _active: {
          textDecoration: "none",
          color: `colorPalette.600`,
        },
        _loading: {
          color: `colorPalette.500`,
        },
      },
      ghost: {
        bg: "transparent",
        color: `colorPalette.500`,
        _hover: {
          bg: `colorPalette.100`,
          color: `colorPalette.400`,
          _disabled: {
            bg: "transparent",
            color: `colorPalette.500`,
          },
        },
        _active: {
          bg: `colorPalette.100`,
          color: `colorPalette.600`,
          _disabled: {
            bg: "transparent",
            color: `colorPalette.500`,
          },
        },
      },
    },
    size: {
      lg: {
        fontSize: "{fontSizes.lg}",
        padding: "{space.4} {space.6}",
      },
      md: {
        fontSize: "{fontSizes.md}",
        padding: "{space.3} {space.4}",
      },
      sm: {
        fontSize: "{fontSizes.sm}",
        padding: "{space.2} {space.3}",
      },
    },
  },
  defaultVariants: {
    variant: "primary",
    size: "md",
  },
});
