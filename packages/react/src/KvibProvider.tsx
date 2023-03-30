import { ChakraProvider, ChakraProviderProps, extendTheme } from "@chakra-ui/react";

const theme = extendTheme({
  colors: {
    brand: {
      100: "red",
      200: "orange",
      300: "yellow",
      400: "green",
      500: "blue",
      600: "indigo",
      700: "violet",
      800: "black",
      900: "rebeccapurple",
    },
  },
});
/**
 * KVIBProvider er komponenten som gir de andre komponentene riktig tema og stil
 * Den må settes inn i prosjektet KVIB skal brukes, så nærme rotkomponenten som mulig.
 */
export const KvibProvider = ({ children, ...props }: ChakraProviderProps) => (
  <ChakraProvider {...props} theme={theme}>
    {children}
  </ChakraProvider>
);
