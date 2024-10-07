import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const variantStriped = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    tbody: {
      tr: {
        "&:nth-of-type(odd)": {
          "td, th": {
            bg: `${c}.50`,
            borderBottomColor: `${c}.50`, // må ha denne to steder
          },
        },
        "td, th": {
          borderBottomColor: `${c}.50`,
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

export const tableTheme = defineStyleConfig({
  variants: {
    striped: variantStriped,
  },
});
