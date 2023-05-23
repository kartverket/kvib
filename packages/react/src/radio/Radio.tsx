import { forwardRef, Radio as ChakraRadio, RadioProps as ChakraRadioProps } from "@chakra-ui/react";
import { Input } from "@chakra-ui/react";

export type RadioProps = Exclude<ChakraRadioProps, "colorScheme" | "size"> & {
  size?: "sm" | "md" | "lg";
  colorScheme?: "blue" | "green";
};

export const Radio = forwardRef<RadioProps, typeof Input>(
  ({ children, size, colorScheme, isDisabled, ...props }, ref) => {
    return (
      <ChakraRadio
        {...props}
        ref={ref}
        size={size}
        colorScheme={colorScheme}
        isDisabled={isDisabled}
        borderRadius="50%"
      >
        {children}
      </ChakraRadio>
    );
  }
);
