import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { colors } from "../tokens";

const baseStyle = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    borderColor: `${colors.green[500]}`,
    color: "black",
    _hover: { borderColor: `${c}.500` },
    _focus: {
      backgroundColor: `${c}.100`,
      color: `${c}.500`,
    },
  };
});

const variantOutline = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    bg: "transparent",
    color: "black",
    _hover: {
      bg: `${c}.50`,
      color: `${c}.400`,
      _disabled: {
        bg: "transparent",
        color: `${c}.500`,
      },
    },
    _active: {
      bg: `${c}.100`,
      color: `${c}.600`,
      _disabled: {
        bg: "transparent",
        color: `${c}.500`,
      },
    },
    _focus: {
      backgroundColor: `${c}.100`,
      color: `${c}.500`,
    },
  };
});

const variants = {
  outline: variantOutline,
};

export const timepickerTheme = defineStyleConfig({
  baseStyle,
  variants,
  defaultProps: {},
});
