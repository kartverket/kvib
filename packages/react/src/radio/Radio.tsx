import { forwardRef, Radio as ChakraRadio, RadioProps as ChakraRadioProps } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

export type RadioProps = Exclude<ChakraRadioProps, "colorScheme" | "size"> & {
  size?: "sm" | "md" | "lg";
  colorScheme?: "blue" | "green";
};

export const Radio = forwardRef<RadioProps, typeof Input>(({ children, colorScheme, size, ...props }, ref) => {
  return (
    <ChakraRadio colorScheme={colorScheme} size={size} ref={ref} borderRadius="50%" {...props}>
      {children}
    </ChakraRadio>
  );
});
