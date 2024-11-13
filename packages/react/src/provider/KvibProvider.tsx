import "@fontsource/mulish/400.css";
import "@fontsource/mulish/600.css";
import "@fontsource/mulish/700.css";
import "material-symbols";

import { Provider } from "@/components/ui/provider";
import { Theme } from "@chakra-ui/react";

export function KvibProvider(props: { children: React.ReactNode }) {
  return (
    <Provider>
      <Theme colorPalette="green">{props.children}</Theme>
    </Provider>
  );
}
