import { createMultiStyleConfigHelpers } from "@chakra-ui/styled-system";
import { borders, colors } from "../tokens";

// This function creates a set of function that helps us create multipart component styles.
const helpers = createMultiStyleConfigHelpers(["breadcrumbItem", "breadcrumbLink"]);

export const breadcrumbTheme = helpers.defineMultiStyleConfig({
  baseStyle: ({ colorScheme }) => ({
    breadcrumbLink: {
      color: "pink",
      backgroundColor: "green",
      textDecoration: "underline",
      _focusVisible: {
        outline: borders["2px"],
        borderRadius: "1px",
        outlineColor: colors.blue[600],
        boxShadow: "none",
      },
      _hover: {
        color: `${colorScheme}.400`,
        textDecoration: "none",
      },
      _active: {
        color: `${colorScheme}.600`,
        textDecoration: "underline",
      },
    },
  }),
});
