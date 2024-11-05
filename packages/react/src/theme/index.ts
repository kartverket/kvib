import * as tokens from "./tokens";

import { createSystem, defaultConfig } from "@chakra-ui/react";

export const system = createSystem(defaultConfig, {
  theme: {
    ...tokens,
  },
});

/* withDefaultColorScheme({ colorScheme: "green" }),
  withDefaultColorScheme({ colorScheme: "gray", components: ["Badge", "Code", "Table", "Tag"] }),
  {
    ...tokens,
    components: { ...components },
  }, */
