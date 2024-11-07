import { createSystem, defineConfig } from "@chakra-ui/react";

/*  withDefaultColorScheme({ colorScheme: "green" }),
 withDefaultColorScheme({ colorScheme: "gray", components: ["Badge", "Code", "Table", "Tag"] }), */

const config = defineConfig({
  theme: {
    tokens: {
      fonts: {
        body: { value: "system-ui, sans-serif" },
      },
    },
  },
});

export const system = createSystem(config);
