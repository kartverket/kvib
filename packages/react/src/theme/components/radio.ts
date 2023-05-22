import { defineStyleConfig } from "@chakra-ui/react";

const config = defineStyleConfig({
  baseStyle: ({ colorScheme }) => ({
    fontStyle: "normal",
    fontWeight: "400",
    fontSize: "16px",
    color: `${colorScheme}.500`,
  }),
});

export default config;
