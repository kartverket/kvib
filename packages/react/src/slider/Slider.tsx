import {
  Slider as ChakraSlider,
  SliderTrack,
  SliderFilledTrack,
  SliderThumb,
  SliderProps as ChakraSliderProps,
  forwardRef,
} from "@chakra-ui/react";

export type SliderProps = Omit<ChakraSliderProps, "colorScheme" | "size" | "variant"> & {
  size?: "sm" | "md" | "lg";
  colorScheme?: "green" | "blue";
};

export const Slider = forwardRef<SliderProps, "div">(({ size = "lg", colorScheme = "green", ...props }, ref) => {
  return (
    <ChakraSlider ref={ref} {...props} colorScheme={colorScheme} size={size}>
      <SliderTrack>
        <SliderFilledTrack></SliderFilledTrack>
      </SliderTrack>
      <SliderThumb />
    </ChakraSlider>
  );
});
