import { forwardRef, Radio as ChakraRadio, RadioProps as ChakraRadioProps } from "@chakra-ui/react";

export type RadioProps = Exclude<ChakraRadioProps, "colorScheme" | "size"> & {
  colorScheme?: "blue" | "green";
};

export const RadioButton = forwardRef<RadioProps, "input">(({ children, colorScheme, ...props }, ref) => {
  return (
    <ChakraRadio {...props} ref={ref} colorScheme={colorScheme}>
      {children}
    </ChakraRadio>
  );
});
