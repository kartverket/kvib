import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { breadcrumbAnatomy as parts } from "@chakra-ui/anatomy";
import { borders, colors } from "../tokens";

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers(parts.keys);

export const breadcrumbTheme = helpers.defineMultiStyleConfig({
  baseStyle: ({ colorScheme }) => ({
    link: {
      "&:not([aria-current=page])": {
        color: `${colorScheme}.500`,
        textDecoration: "underline",
        _focusVisible: {
          outline: borders["2px"],
          borderRadius: "1px",
          outlineColor: colors.blue[600],
          boxShadow: "none",
        },
        _active: {
          color: `${colorScheme}.600`,
          textDecoration: "underline",
        },
        _hover: {
          color: `${colorScheme}.400`,
          textDecoration: "none",
        },
      },
    },
  }),
});
