import { fontSizes } from "./fontSizes";
import { fontWeights } from "./fontWeights";
import { lineHeights } from "./lineHeights";
import { letterSpacings } from "./letterSpacings";

export const textStyles = {
  title1: {
    fontSize: [fontSizes["3xl"], fontSizes["3xl"], fontSizes["4xl"], fontSizes["4xl"], fontSizes["4xl"]],
    fontWeight: fontWeights.extrabold,
    lineHeight: lineHeights.shorter,
    letterSpacing: [
      letterSpacings.wide,
      letterSpacings.wide,
      letterSpacings.wider,
      letterSpacings.wider,
      letterSpacings.wider,
    ],
  },
  title2: {
    fontSize: [fontSizes["xl"], fontSizes["xl"], fontSizes["2xl"], fontSizes["2xl"], fontSizes["2xl"]],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.short,
    letterSpacing: letterSpacings.wide,
  },
  title3: {
    fontSize: fontSizes.lg,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.short,
    letterSpacing: letterSpacings.wide,
  },
  title4: {
    fontSize: fontSizes.sm,
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.short,
    letterSpacing: letterSpacings.wide,
  },
  leadParagraph: {
    fontSize: fontSizes.md,
    fontWeight: fontWeights.semibold,
    lineHeight: lineHeights.base,
    letterSpacing: letterSpacings.wide,
  },
  body: {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.tall,
    letterSpacing: letterSpacings.wide,
  },
  bodySmall: {
    fontSize: fontSizes["2xs"],
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.tall,
    letterSpacing: letterSpacings.wide,
  },
  label: {
    fontSize: fontSizes["2xs"],
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.base,
    letterSpacing: letterSpacings.wide,
  },
  description: {
    fontSize: fontSizes["2xs"],
    fontWeight: fontWeights.normal,
    lineHeight: lineHeights.base,
    letterSpacing: letterSpacings.wide,
  },
  tag: {
    fontSize: fontSizes["3xs"],
    fontWeight: fontWeights.bold,
    lineHeight: lineHeights.shortest,
    letterSpacing: letterSpacings.wide,
  },
};
