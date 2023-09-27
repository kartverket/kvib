import { defineStyle, defineStyleConfig } from "@chakra-ui/react";

const baseStyle = defineStyle({
  borderRadius: "6px",
  outline: 0,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  flexShrink: 0,
  _focusVisible: {
    boxShadow: "outline",
  },
  _disabled: {
    opacity: 0.5,
    cursor: "not-allowed",
  },
});

const sizes = {
  xs: defineStyle({
    padding: "6px",
    gap: "6px",
    width: "24px",
    height: "24px",
  }),
  sm: defineStyle({
    padding: "9px",
    width: "32px",
    height: "32px",
  }),
  md: defineStyle({
    padding: "12px",
    width: "40px",
    height: "40px",
  }),
  lg: defineStyle({
    lineHeight: "28px",
    padding: "15px",
    width: "48px",
    height: "48px",
  }),
};

export const iconButtonTheme = defineStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    variant: "primary",
    size: "md",
  },
});
