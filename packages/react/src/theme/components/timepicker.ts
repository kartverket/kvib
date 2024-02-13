import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({});

const variantOutline = defineStyle((props) => {
  const { colorScheme: c } = props;
  return {
    bg: "transparent",
    color: "black",
    _hover: {
      backgroundColor: `${c}.50`,
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
  defaultProps: {
    variant: "outline",
  },
});
