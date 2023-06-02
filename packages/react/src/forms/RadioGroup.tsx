import { forwardRef, RadioGroup as ChakraRadioGroup, RadioGroupProps as ChakraRadioGroupProps } from "@chakra-ui/react";
import { Stack } from "@kvib/react/src/layout";

export type RadioGroupProps = ChakraRadioGroupProps;

export const RadioGroup = forwardRef<RadioGroupProps, "div">(({ children, ...props }, ref) => {
  return (
    <ChakraRadioGroup {...props} ref={ref}>
      <Stack direction="row">{children}</Stack>
    </ChakraRadioGroup>
  );
});
