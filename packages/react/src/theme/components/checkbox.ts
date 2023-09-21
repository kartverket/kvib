import { defineStyleConfig } from "@chakra-ui/react";

export const checkboxTheme = defineStyleConfig({
  baseStyle: {
    control: {
      borderColor: "gray.400", // Border color when unchecked
    },
  },
  variants: {},
});
