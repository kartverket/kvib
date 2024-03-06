import { defineStyle, defineStyleConfig } from "@chakra-ui/react";
import { colors } from "../tokens";

const baseStyle = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    control: {
      borderColor: `${c}.500`, // Border color when unchecked
      _checked: {
        _hover: {
          borderColor: `${c}.400`,
          backgroundColor: `${c}.400`,
        },
      },
      _invalid: {
        _checked: {
          backgroundColor: colors.red[500],
          _hover: {
            borderColor: colors.red[400],
            backgroundColor: colors.red[400],
          },
        },
      },
    },
  };
});
export const radioTheme = defineStyleConfig({
  baseStyle,
});
