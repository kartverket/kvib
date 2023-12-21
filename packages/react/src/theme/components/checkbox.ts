import { defineStyleConfig, defineStyle } from "@chakra-ui/react";
import { colors } from "../tokens";

const baseStyle = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    control: {
      borderColor: `${c}.500`, // Border color when unchecked
      _invalid: {
        _checked: {
          backgroundColor: colors.red[500],
        },
      },
    },
  };
});
export const checkboxTheme = defineStyleConfig({
  baseStyle,
  variants: {},
});
