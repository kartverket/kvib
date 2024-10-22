import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle(props => {
  const { colorScheme: c } = props;

  return {
    _hover: {
      bg: `${c}.100`,
    },
  };
});

export const closeButtonTheme = defineStyleConfig({
  baseStyle,
});
