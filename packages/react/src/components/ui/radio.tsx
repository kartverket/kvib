import { RadioGroup as ChakraRadioGroup } from "@chakra-ui/react";
import { forwardRef } from "react";

export interface RadioProps extends ChakraRadioGroup.RootProps {
  rootRef?: React.Ref<HTMLDivElement>;
  inputProps?: React.InputHTMLAttributes<HTMLInputElement>;
}

export const Radio = forwardRef<HTMLInputElement, RadioProps>(function Radio(props, ref) {
  const { children, inputProps, rootRef, ...rest } = props;
  return (
    <ChakraRadioGroup.Root ref={rootRef} {...rest}>
      <ChakraRadioGroup.ItemHiddenInput ref={ref} {...inputProps} />
      <ChakraRadioGroup.ItemIndicator />
      {children && <ChakraRadioGroup.ItemText>{children}</ChakraRadioGroup.ItemText>}
    </ChakraRadioGroup.Root>
  );
});

export const RadioGroup = ChakraRadioGroup.Root;
