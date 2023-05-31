import { defineStyle, defineStyleConfig } from "@chakra-ui/styled-system";
import { cssVar } from "@chakra-ui/theme-tools";
import { colors, fontSizes, radii, shadows } from "../foundations";

const $bg = cssVar("tooltip-bg");
const $fg = cssVar("tooltip-fg");
const $arrowBg = cssVar("popper-arrow-bg");

const baseStyle = defineStyle({
  bg: colors.black,
  color: colors.white,
  [$bg.variable]: "colors.gray.700",
  [$fg.variable]: "colors.whiteAlpha.900",
  _dark: {
    [$bg.variable]: "colors.gray.300",
    [$fg.variable]: "colors.gray.900",
  },
  [$arrowBg.variable]: colors.black,
  px: "16px",
  py: "10px",
  borderRadius: radii.base,
  fontWeight: "medium",
  fontSize: fontSizes["3xs"],
  boxShadow: shadows.base,
  maxW: "xs",
  zIndex: "tooltip",
  padding: "10px 16px",
});

export const tooltipTheme = defineStyleConfig({
  baseStyle,
});
