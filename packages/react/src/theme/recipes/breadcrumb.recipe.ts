import { defineSlotRecipe } from "@chakra-ui/react";

export const breadcrumbSlotRecipe = defineSlotRecipe({
  className: "kvib-breadcrumb",
  slots: ["link", "currentLink", "item", "list", "root", "ellipsis", "separator"],
  variants: {
    variant: {
      underline: {
        link: {
          color: "colorPalette.500",
          textDecorationColor: "colorPalette.500",
        },
        currentLink: {
          color: "gray.800",
        },
      },
      plain: {
        link: {
          color: "colorPalette.500",
        },
        currentLink: {
          color: "gray.800",
        },
      },
    },
    size: {
      sm: {
        link: {
          textStyle: "sm",
        },
        currentLink: {
          textStyle: "sm",
        },
        separator: {
          textStyle: "sm",
        },
      },
      md: {
        link: {
          textStyle: "md",
        },
        currentLink: {
          textStyle: "md",
        },
        separator: {
          textStyle: "md",
        },
      },
      lg: {
        link: {
          textStyle: "lg",
        },
        currentLink: {
          textStyle: "lg",
        },
        separator: {
          textStyle: "lg",
        },
      },
    },
  },

  defaultVariants: {
    variant: "underline",
    size: "md",
  },
});
