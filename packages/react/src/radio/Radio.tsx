import { forwardRef, Radio as ChakraRadio, RadioProps as ChakraRadioProps } from "@chakra-ui/react";

export type RadioProps = Exclude<ChakraRadioProps, "colorScheme"> & {
  colorScheme?: "blue" | "green";
};

export const Radio = forwardRef<RadioProps, "input">(({ children, ...props }, ref) => {
  return (
    <ChakraRadio {...props} ref={ref}>
      {children}
    </ChakraRadio>
  );
});
