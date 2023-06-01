import { useState } from "react";
import { SliderProps } from "./Slider";
import {
  Container,
  Slider as ChakraSlider,
  Box,
  forwardRef,
  SliderFilledTrack,
  SliderMark,
  SliderThumb,
  SliderTrack,
  Tooltip as ChakraTooltip,
  TooltipProps as ChakraTooltipProps,
} from "@chakra-ui/react";

export type SliderTooltipProps = Omit<ChakraTooltipProps, "hasArrow" | "placement">;

export const Tooltip = forwardRef<SliderTooltipProps, "div">(({ ...props }, ref) => {
  return (
    <ChakraTooltip ref={ref} {...props} hasArrow={true} placement="top">
      <SliderThumb />
    </ChakraTooltip>
  );
});

//TODO: remove when fixed bug below

// export const SliderLabeled = forwardRef<SliderProps, "div">(
//     ({
//          size= "lg",
//          colorScheme="green",
//          ...props
//      },
//      ref) => {
//
//         const [sliderValue, setSliderValue] = useState(5)
//         const [showTooltip, setShowTooltip] = useState(false)
//         return (
//             <Box pt={6} pb={2}>
//                 <ChakraSlider
//                     ref={ref}
//                     {...props}
//                     colorScheme={colorScheme}
//                     size={size}
//                     id='slider'
//                     defaultValue={5}
//                     min={0}
//                     max={100}
//                     onMouseEnter={() => setShowTooltip(true)}
//                     onMouseLeave={() => setShowTooltip(false)}
//                     onChange={(val) => setSliderValue(val)}
//                     aria-label='slider-labeled-ex'>
//                     <SliderMark value={0} ml="-2">
//                         0%
//                     </SliderMark>
//                     <SliderMark value={100} ml="-5" >
//                         100%
//                     </SliderMark>
//                     <SliderTrack>
//                         <SliderFilledTrack />
//                     </SliderTrack>
//                     <Tooltip
//                         isOpen={showTooltip}
//                         label={`${sliderValue}%`}
//                     >
//                         <SliderThumb />
//                     </Tooltip>
//                 </ChakraSlider>
//             </Box>
//         );
//     });

//TODO-BUGFIX
export const SliderLabeled = forwardRef<SliderProps, "div">(
  ({ children, size = "lg", colorScheme = "green", ...props }, ref) => {
    const [sliderValue, setSliderValue] = useState(5);
    const [showTooltip, setShowTooltip] = useState(false);
    return (
      <Box pt={6} pb={2}>
        <ChakraSlider
          ref={ref}
          {...props}
          colorScheme={colorScheme}
          size={size}
          // id='slider'
          // defaultValue={5}
          // min={0}
          // max={100}
          onMouseEnter={() => setShowTooltip(true)}
          onMouseLeave={() => setShowTooltip(false)}
          onChange={(val) => setSliderValue(val)}
        >
          <Container>{children}</Container>
        </ChakraSlider>
      </Box>
    );
  }
);
