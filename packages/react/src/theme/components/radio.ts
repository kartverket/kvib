import { radioAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { colors } from "../foundations";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(radioAnatomy.keys);

// @ts-ignore
const baseStyle = ({ colorScheme }) =>
  definePartsStyle({
    container: {
      _hover: {
        "input:enabled + .chakra-radio__control": {
          borderColor: `${colorScheme}.400`,
          color: `${colorScheme}.400`,
        },
        ".chakra-radio__label": {
          color: `${colorScheme}.400`,
        },
        _disabled: {
          pointerEvents: "visiblePainted",
          _hover: {
            ".chakra-radio__label": {
              color: colors.gray[400],
            },
          },
        },
      },
    },
    control: {
      width: "20px",
      height: "20px",
      m: "2px",
      borderColor: `${colorScheme}.500`,
      // backgroundColor: "black",
      _checked: {
        backgroundColor: "white",
        color: `${colorScheme}.500`,
        _before: {
          h: "62.5%",
          w: "62.5%",
        },
        _hover: {
          color: `${colorScheme}.400`,
          borderColor: `${colorScheme}.400`,
          backgroundColor: "white",
        },
      },
      _disabled: {
        borderColor: colors.gray[400],
        backgroundColor: "white",
        _checked: {
          color: colors.gray[400],
          borderColor: colors.gray[400],
          backgroundColor: "white",
        },
      },
    },
    label: {
      _disabled: {
        opacity: "100%",
        color: colors.gray[400],
        _hover: {
          color: colors.gray[400],
        },
      },
    },
  });

export const config = defineMultiStyleConfig({ baseStyle });
export default config;
