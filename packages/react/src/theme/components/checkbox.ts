import { defineStyleConfig, defineStyle } from "@chakra-ui/react";

const baseStyle = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    control: {
      borderColor: `${c}.500`, // Border color when unchecked
    },
  };
});
export const checkboxTheme = defineStyleConfig({
  baseStyle,
  variants: {},
});
