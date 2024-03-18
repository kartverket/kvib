import { alertAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";
import { colors } from "../tokens";

const { definePartsStyle, defineMultiStyleConfig } = createMultiStyleConfigHelpers(alertAnatomy.keys);

const baseStyle = definePartsStyle((props) => {
  const { status: s } = props;

  if (s === "error") {
    return {
      title: {
        color: colors.white,
      },
      container: {
        bg: colors.red[500],
        color: colors.white,
      },
      icon: {
        color: colors.white,
      },
    };
  }
  return {};
});

const error = defineStyle((props) => {
  const { status: s, variant: v } = props;

  if (v === "subtle" && s === "error") {
    return {
      title: {
        color: colors.black,
      },
      container: {
        bg: colors.red[100],
        color: colors.black,
      },
      icon: {
        color: colors.red[600],
      },
    };
  }
  return {};
});

const variants = {
  subtle: error,
};

export const alertTheme = defineMultiStyleConfig({ baseStyle, variants });
