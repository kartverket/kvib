import { FormErrorMessage as ChakraFormErrorMessage, forwardRef } from "@chakra-ui/react";
import { FormControlProps } from "./Form-control";

export interface FormErrorMessageProps extends FormControlProps {
  /**
   * errorMessage for component
   *
   * @default errorMessage
   */
  errorMessage?: string;
}

export const FormErrorMessage = forwardRef<FormErrorMessageProps, "div">(({ errorMessage, ...props }, ref) => {
  return (
    <ChakraFormErrorMessage {...props} ref={ref}>
      {errorMessage}
    </ChakraFormErrorMessage>
  );
});
