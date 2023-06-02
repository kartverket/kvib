import { useState } from "react";
import { SliderProps } from "./Slider";
import {
  Container,
  Slider as ChakraSlider,
  forwardRef,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Tooltip as ChakraTooltip,
  TooltipProps as ChakraTooltipProps,
} from "@chakra-ui/react";

export type SliderTooltipProps = Omit<ChakraTooltipProps, "hasArrow" | "placement">;
export type SliderLabeledProps = SliderProps;

export const Tooltip = forwardRef<SliderTooltipProps, "div">(({ ...props }, ref) => {
  return (
    <ChakraTooltip ref={ref} {...props} hasArrow={true} placement="top">
      <SliderThumb />
    </ChakraTooltip>
  );
});

export const SliderLabeled = forwardRef<SliderLabeledProps, "div">(
  ({ children, size = "lg", colorScheme = "green", ...props }, ref) => {
    const [sliderValue, setSliderValue] = useState(5);
    const [showTooltip, setShowTooltip] = useState(false);
    return (
      <ChakraSlider
        ref={ref}
        {...props}
        colorScheme={colorScheme}
        size={size}
        onMouseEnter={() => setShowTooltip(true)}
        onMouseLeave={() => setShowTooltip(false)}
        onChange={(val) => setSliderValue(val)}
      >
        <Tooltip isOpen={showTooltip} label={`${sliderValue}%`}>
          <SliderThumb />
        </Tooltip>
        <SliderTrack>
          <SliderFilledTrack />
        </SliderTrack>

        <Container>{children}</Container>
      </ChakraSlider>
    );
  }
);
