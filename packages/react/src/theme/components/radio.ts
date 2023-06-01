import { radioAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { colors } from "../foundations";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(radioAnatomy.keys);

const sizes = {
  sm: definePartsStyle({
    control: { width: "20px", height: "20px" },
    label: { fontSize: "sm" },
  }),
  md: definePartsStyle({
    control: { w: "24px", h: "24px" },
    label: { fontSize: "md" },
  }),
  lg: definePartsStyle({
    control: { w: "32px", h: "32px" },
    label: { fontSize: "lg" },
  }),
};
// @ts-ignore
const baseStyle = ({ colorScheme }) =>
  definePartsStyle({
    container: {
      _hover: {
        "input:enabled + .chakra-radio__control": {
          borderColor: `${colorScheme}.400`,
          color: `${colorScheme}.400`,
        },
        ".chakra-radio:disabled": {
          pointerEvents: "visiblePainted",
        },
      },
    },
    control: {
      borderColor: `${colorScheme}.500`,
      backgroundColor: "white",
      _checked: {
        backgroundColor: "white",
        color: `${colorScheme}.500`,
        // _before: {
        // h: "50%",
        // w: "50%",
        // },
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
      _hover: {
        color: `${colorScheme}.400`,
      },
      _disabled: {
        opacity: "100%",
        color: colors.gray[400],
        _hover: {
          color: colors.gray[400],
        },
      },
    },
  });

export const radioTheme = defineMultiStyleConfig({ baseStyle, sizes });
