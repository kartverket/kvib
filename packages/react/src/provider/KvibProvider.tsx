import "@fontsource/mulish/400.css";
import "@fontsource/mulish/600.css";
import "@fontsource/mulish/700.css";
import "material-symbols";

import { ChakraProvider, ChakraProviderProps } from "@chakra-ui/react";
import { theme as defaultKvibTheme } from "../";

/**
 * KVIBProvider er komponenten som gir de andre komponentene riktig tema og stil
 * Den må settes inn i prosjektet KVIB skal brukes, så nærme rotkomponenten som mulig.
 */
export const KvibProvider = ({ theme = defaultKvibTheme, children, ...props }: ChakraProviderProps) => (
  <ChakraProvider {...props} theme={theme}>
    {children}
  </ChakraProvider>
);
