import { alertAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";
import { colors } from "../tokens";

const { defineMultiStyleConfig } = createMultiStyleConfigHelpers(alertAnatomy.keys);

const variantSubtle = defineStyle((props) => {
  const { status: s } = props;

  if (s === "error") {
    return {
      title: {
        color: colors.black,
      },
      container: {
        bg: colors.red[100],
        color: colors.black,
      },
      icon: {
        color: colors.red[500],
      },
    };
  }
  if (s === "info") {
    return {
      title: {
        color: colors.black,
      },
      container: {
        bg: colors.blue[100],
        color: colors.black,
      },
      icon: {
        color: colors.blue[500],
      },
    };
  }
  return {};
});

const variantSolid = defineStyle((props) => {
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
  if (s === "info" || s === "loading") {
    return {
      title: {
        color: colors.white,
      },
      container: {
        bg: colors.blue[500],
        color: colors.white,
      },
      icon: {
        color: colors.white,
      },
    };
  }
  return {};
});

const variantLeftAccent = defineStyle((props) => {
  const { status: s } = props;

  if (s === "error") {
    return {
      title: {
        color: colors.black,
      },
      container: {
        bg: colors.red[100],
        color: colors.black,
        borderColor: colors.red[500],
      },
      icon: {
        color: colors.red[500],
      },
    };
  }
  if (s === "info") {
    return {
      title: {
        color: colors.black,
      },
      container: {
        bg: colors.blue[100],
        color: colors.black,
        borderColor: colors.blue[500],
      },
      icon: {
        color: colors.blue[500],
      },
    };
  }
  return {};
});

const variantTopAccent = defineStyle((props) => {
  const { status: s } = props;

  if (s === "error") {
    return {
      title: {
        color: colors.black,
      },
      container: {
        bg: colors.red[100],
        color: colors.black,
        borderColor: colors.red[500],
      },
      icon: {
        color: colors.red[500],
      },
    };
  }
  if (s === "info") {
    return {
      title: {
        color: colors.black,
      },
      container: {
        bg: colors.blue[100],
        color: colors.black,
        borderColor: colors.blue[500],
      },
      icon: {
        color: colors.blue[500],
      },
    };
  }
  return {};
});

const variants = {
  subtle: variantSubtle,
  solid: variantSolid,
  "left-accent": variantLeftAccent,
  "top-accent": variantTopAccent,
};

export const alertTheme = defineMultiStyleConfig({ variants });
