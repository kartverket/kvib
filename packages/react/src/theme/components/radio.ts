import { defineStyleConfig } from "@chakra-ui/react";

export const radioTheme = defineStyleConfig({
  baseStyle: {
    control: {
      borderColor: "gray.400", // Border color when unchecked
    },
  },
  variants: {},
});