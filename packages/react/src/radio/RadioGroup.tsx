import React from "react";
import { forwardRef, RadioGroup as ChakraRadioGroup, RadioGroupProps as ChakraRadioGroupProps } from "@chakra-ui/react";

export type RadioGroupProps = ChakraRadioGroupProps;

export const RadioGroup = forwardRef<RadioGroupProps, "div">(({ children, ...props }, ref) => {
  const [value, setValue] = React.useState("1");
  return (
    <ChakraRadioGroup onChange={setValue} value={value} {...props} ref={ref}>
      {children}
    </ChakraRadioGroup>
  );
});
