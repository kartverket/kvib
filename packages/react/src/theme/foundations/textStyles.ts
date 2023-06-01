import { fontSizes } from "./fontSizes";
import { fontWeights } from "./fontWeights";
import { lineHeights } from "./lineHeights";
import { letterSpacings } from "./letterSpacings";

export const textStyles = {
  title1: {
    fontSize: [fontSizes["4xl"], fontSizes["5xl"]],
    fontWeight: fontWeights.extrabold,
    lineHeight: lineHeights.shortest,
    letterSpacing: letterSpacings["wide-sm"],
  },
  title2: {
    fontSize: fontSizes["3.5xl"],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.shortest,
    letterSpacing: letterSpacings["wide-sm"],
  },
  title3: {
    fontSize: fontSizes["2.5xl"],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.shortest,
    letterSpacing: letterSpacings["wide-sm"],
  },
  title4: {
    fontSize: fontSizes.xl,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.shortest,
    letterSpacing: letterSpacings["wide-sm"],
  },
  leadParagraph: {
    fontSize: fontSizes["2xl"],
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.base,
    letterSpacing: letterSpacings["wide-sm"],
  },
  body: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.base,
    letterSpacing: letterSpacings["wide-sm"],
  },
  bodySmall: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.base,
    letterSpacing: letterSpacings["wide-sm"],
  },
};
