import { FormHelperText as ChakraFormHelperText, forwardRef } from "@chakra-ui/react";
import { FormControlProps } from "./Form-control";

export interface FormHelperTextProps extends FormControlProps {
  /**
   * HelperText for component
   *
   * @default helperText
   */
  helperText?: string;
}

export const FormHelperText = forwardRef<FormHelperTextProps, "div">(({ helperText, ...props }, ref) => {
  return (
    <ChakraFormHelperText {...props} ref={ref} fontSize={"16px"} paddingBottom={"8px"}>
      {helperText}
    </ChakraFormHelperText>
  );
});
