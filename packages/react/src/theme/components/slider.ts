import { sliderAnatomy as parts } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, cssVar, defineStyle } from "@chakra-ui/styled-system";
import { colors, shadows, borders, fontSizes, fontWeights } from "../foundations";

const { defineMultiStyleConfig, definePartsStyle } = createMultiStyleConfigHelpers(parts.keys);

const $thumbSize = cssVar("slider-thumb-size");
const $trackSize = cssVar("slider-track-width");

const baseStyleContainer = defineStyle(() => {
  return {
    display: "inline-block",
    position: "relative",
    cursor: "pointer",
    _disabled: {
      opacity: "100%",
      cursor: "default",
      pointerEvents: "none",
      w: "100%",
    },
  };
});

const baseStyleTrack = defineStyle(() => {
  return {
    h: $trackSize.reference,
    overflow: "hidden",
    borderRadius: "9999px",

    bg: colors.gray[100],
    _disabled: {
      ".chakra-slider__filled-track": {
        backgroundColor: colors.gray[500],
      },
      opacity: "100%",
    },
  };
});

const baseStyleThumb = defineStyle(() => {
  return {
    w: $thumbSize.reference,
    h: $thumbSize.reference,
    bg: colors.white,
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    position: "absolute",
    outline: 0,
    zIndex: 1,
    borderRadius: "full",
    boxShadow: shadows.base,
    border: borders.none,
    transitionProperty: "transform",
    transitionDuration: "normal",
    _focusVisible: {
      boxShadow: shadows.outline,
      transform: `translateY(-50%) scale(1.15)`,
    },
    _active: {
      transform: `translateY(-50%) scale(1.15)`,
    },
    _hover: {
      transform: `translateY(-50%) scale(1.15)`,
    },
    _disabled: {
      bg: colors.gray[300],
    },
  };
});

const baseStyleFilledTrack = defineStyle((props) => {
  const { colorScheme: c } = props;

  return {
    width: "inherit",
    height: "inherit",
    bg: `${c}.500`,
  };
});

const baseStyleMark = defineStyle(() => {
  return {
    fontSize: fontSizes.xs,
    fontWeight: fontWeights.normal,
    lineHeight: "18px",
    display: "flex",
    height: "13px",
    marginY: "5px",
  };
});

const baseStyle = definePartsStyle((props) => ({
  container: baseStyleContainer(),
  track: baseStyleTrack(),
  thumb: baseStyleThumb(),
  filledTrack: baseStyleFilledTrack(props),
  mark: baseStyleMark(),
}));

const sizeLg = definePartsStyle({
  container: {
    [$thumbSize.variable]: `16px`,
    [$trackSize.variable]: `4px`,
  },
});

const sizeMd = definePartsStyle({
  container: {
    [$thumbSize.variable]: `14px`,
    [$trackSize.variable]: `4px`,
  },
});

const sizeSm = definePartsStyle({
  container: {
    [$thumbSize.variable]: `10px`,
    [$trackSize.variable]: `2px`,
  },
});

const sizes = {
  lg: sizeLg,
  md: sizeMd,
  sm: sizeSm,
};

export const sliderTheme = defineMultiStyleConfig({
  baseStyle,
  sizes,
  defaultProps: {
    size: "md",
    colorScheme: "green",
  },
});
