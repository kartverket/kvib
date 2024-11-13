import { defineRecipe } from "@chakra-ui/react";

export const linkRecipe = defineRecipe(props => {
  console.log("Colorpalette", props.theme.colors);
  return {
    textDecoration: "underline",
    color: `${colorPalette}.500`,
    _focusVisible: {
      borderRadius: "1px",
      boxShadow: "none",
      outline: "2px solid",
    },
    _hover: {
      textDecoration: "none",
      color: `${colorPalette}.400`, // Make sure colorScheme is defined in your theme
    },
    _active: {
      textDecoration: "underline",
    },
  };
});
