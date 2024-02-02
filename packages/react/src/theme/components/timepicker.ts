import { extendTheme, withDefaultColorScheme } from "@chakra-ui/react";

const customTimepickerTheme = extendTheme(
  withDefaultColorScheme({
    colorScheme: "green",
    components: ["Timepicker"],
  }),
);

export default customTimepickerTheme;
