import { defineStyleConfig } from "@chakra-ui/react";

const config = defineStyleConfig({
  baseStyle: ({ colorScheme }) => ({
    ".chakra-radio__control": {
      color: `${colorScheme}.500`,
    },
  }),
});

export default config;
