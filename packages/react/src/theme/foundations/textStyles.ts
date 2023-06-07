import { fontSizes } from "./fontSizes";
import { fontWeights } from "./fontWeights";
import { lineHeights } from "./lineHeights";
import { letterSpacings } from "./letterSpacings";

export const textStyles = {
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
