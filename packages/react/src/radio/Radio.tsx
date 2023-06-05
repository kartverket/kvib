import { forwardRef, Radio as ChakraRadio, RadioProps as ChakraRadioProps } from "@chakra-ui/react";

export type RadioProps = Exclude<ChakraRadioProps, "colorScheme"> & {
  colorScheme?: "blue" | "green";
};

export const Radio = forwardRef<RadioProps, "input">(({ children, colorScheme, ...props }, ref) => {
  return (
    <ChakraRadio {...props} ref={ref} colorScheme={colorScheme}>
      {children}
    </ChakraRadio>
  );
});
