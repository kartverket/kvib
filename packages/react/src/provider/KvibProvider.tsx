import "@fontsource/mulish/400.css";
import "@fontsource/mulish/600.css";
import "@fontsource/mulish/700.css";
import "material-symbols";

import { ChakraProvider, ChakraProviderProps } from "@chakra-ui/react";
import { system } from "../";

interface KvibProviderProps extends Omit<ChakraProviderProps, "value"> {}

/**
 * KVIBProvider er komponenten som gir de andre komponentene riktig tema og stil
 * Den må settes inn i prosjektet KVIB skal brukes, så nærme rotkomponenten som mulig.
 */
export const KvibProvider = ({ children, ...props }: KvibProviderProps) => (
  <ChakraProvider {...props} value={system}>
    {children}
  </ChakraProvider>
);
