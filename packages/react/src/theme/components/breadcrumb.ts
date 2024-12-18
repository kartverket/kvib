import { defineSlotRecipe } from "@chakra-ui/react";
import { breadcrumbAnatomy } from "@chakra-ui/react/anatomy";

export const breadcrumbTheme = defineSlotRecipe({
  slots: breadcrumbAnatomy.keys(),
  base: {
    root: {
      display: "flex",
      flexWrap: "wrap",
    },
    list: {
      display: "flex",
      alignItems: "center",
      wordBreak: "normal",
    },
    link: {
      _focusVisible: {
        outline: "{borders.1px}",
        borderRadius: "1px",
        outlineColor: "{colors.blue.600}",
        boxShadow: "none ",
      },
    },
    separator: {
      "--breadcrumb-separator-color": "{colors.gray.900}",
      color: "var(--breadcrumb-separator-color)",
    },
  },
  variants: {
    variant: {
      plain: {
        link: {
          textDecoration: "none",
          color: "{colors.colorPalette.500}",

          _active: {
            color: "{colors.colorPalette.600}",
            textDecoration: "underline",
          },
          _hover: {
            color: "{colors.colorPalette.400}",
            textDecoration: "none",
          },
        },
        currentLink: {
          color: "{colors.gray.700}",
        },
      },
      underline: {
        link: {
          color: "{colors.colorPalette.500}",
          textDecoration: "underline",
          textUnderlineOffset: "0.2em",
          textDecorationColor: "{colors.colorPalette.500}",
          _active: {
            color: "{colors.colorPalette.600}",
            textDecoration: "underline",
          },
          _hover: {
            color: "{colors.colorPalette.400}",
            textDecoration: "none",
          },
        },
        currentLink: {
          color: "{colors.gray.700}",
        },
      },
    },
    size: {
      sm: {
        item: {
          fontSize: "{fontSizes.sm}",
        },
      },
      md: {
        item: {
          fontSize: "{fontSizes.md}",
        },
      },
      lg: {
        item: {
          fontSize: "{fontSizes.lg}",
        },
      },
    },
  },
  defaultVariants: {
    variant: "underline",
    colorPalette: "green",
    size: "md",
  },
});
