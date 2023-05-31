import { radioAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = ({ colorScheme }) =>
  definePartsStyle({
    control: {
      borderColor: `${colorScheme}.500`,
      _hover: {
        borderColor: `${colorScheme}.400`,
      },
      _checked: {
        backgroundColor: "white",
        color: `${colorScheme}.500`,
        _hover: {
          color: `${colorScheme}.400`,
          borderColor: `${colorScheme}.400`,
          backgroundColor: "white",
        },
      },
    },
  });

export const radioTheme = defineMultiStyleConfig({ baseStyle });
