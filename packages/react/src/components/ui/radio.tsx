import { BoxProps } from "@/layout";
import { RadioGroup as ChakraRadioGroup } from "@chakra-ui/react";
import * as React from "react";
import { Merge } from "../utils";

export interface RadioProps extends Merge<BoxProps, ChakraRadioGroup.ItemProps> {
  value: string;
  rootRef?: React.Ref<HTMLDivElement>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const Radio = React.forwardRef<HTMLInputElement, RadioProps>(function Radio(props, ref) {
  const { children, inputProps, rootRef, ...rest } = props;
  return (
    <ChakraRadioGroup.Item ref={rootRef} {...rest}>
      <ChakraRadioGroup.ItemHiddenInput ref={ref} {...inputProps} />
      <ChakraRadioGroup.ItemIndicator />
      {children && <ChakraRadioGroup.ItemText>{children}</ChakraRadioGroup.ItemText>}
    </ChakraRadioGroup.Item>
  );
});

interface RadioGroupProps extends Merge<BoxProps, ChakraRadioGroup.RootProps> {}

export const RadioGroup = React.forwardRef<HTMLDivElement, RadioGroupProps>(function RadioGroup(props, ref) {
  const { children, ...rest } = props;
  return (
    <ChakraRadioGroup.Root ref={ref} {...rest}>
      {children}
    </ChakraRadioGroup.Root>
  );
});
