import { createMultiStyleConfigHelpers, defineStyleConfig, StyleFunctionProps } from "@chakra-ui/react";
import { tabsAnatomy as parts } from "@chakra-ui/anatomy";
import { colors } from "../tokens";

const helpers = createMultiStyleConfigHelpers(parts.keys);

const config = helpers.defineMultiStyleConfig({
  baseStyle: (props) => ({
    root: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
    },
    tab: {
      color: colors.blue[900],
      _selected: {
        ...getTabColorSchemeSelectedProps(props),
      },
      _hover: { ...getTabColorSchemeHoverProps(props) },
      _disabled: {
        color: colors.gray[400],
      },
    },
  }),
  defaultProps: {
    colorScheme: "green",
  },
});

export default config;

const getTabColorSchemeSelectedProps = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "green":
      return {
        color: colors.green[500],
      };
    case "blue":
      return {
        color: colors.blue[500],
      };
  }
};

const getTabColorSchemeHoverProps = (props: StyleFunctionProps) => {
  switch (props.colorScheme) {
    case "green":
      return {
        color: colors.green[400],
      };
    case "blue":
      return {
        color: colors.blue[400],
      };
  }
};
