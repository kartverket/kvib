import {
  Slider as ChakraSlider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderProps as ChakraSliderProps,
  forwardRef,
} from "@chakra-ui/react";

export const Slider = forwardRef<ChakraSliderProps, "div">((props, ref) => {
  return (
    <ChakraSlider ref={ref} {...props} aria-label="slider-ex-1" defaultValue={30}>
      <SliderTrack>
        <SliderFilledTrack />
      </SliderTrack>
      <SliderThumb />
    </ChakraSlider>
  );
});
