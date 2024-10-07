import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const variantStriped = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "td, th": {
            bg: `${c}.50`,
            borderBottomColor: `${c}.50`,
          },
        },
        "td, th": {
          borderBottomColor: `${c}.50`, // må visst ha denne to ganger
        },
      },
    },
    thead: {
      th: {
        borderBottomColor: `${c}.50`,
      },
    },
  };
});

const variants = {
  simple: {},
  striped: variantStriped,
  unstyled: {},
};

export const tableTheme = defineStyleConfig({
  baseStyle: {},
  variants,
  defaultProps: {
    variant: "striped",
    colorScheme: "green",
  },
});
