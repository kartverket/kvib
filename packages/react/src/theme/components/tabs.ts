import { createMultiStyleConfigHelpers } from "@chakra-ui/react";
import { tabsAnatomy as parts } from "@chakra-ui/anatomy";
import { colors } from "../tokens";

const helpers = createMultiStyleConfigHelpers(parts.keys);

export const tabsTheme = helpers.defineMultiStyleConfig({
  baseStyle: ({ colorScheme }) => {
    return {
      root: {
        width: "fit-content",
      },
      tab: {
        color: colors.blue[900],
        _selected: {
          color: `${colorScheme}.500`,
        },
        _hover: {
          color: `${colorScheme}.400`,
        },
        _disabled: {
          color: colors.gray[400],
          _hover: {
            color: colors.gray[400],
          },
        },
      },
    };
  },
  defaultProps: {
    size: "md",
  },
});
