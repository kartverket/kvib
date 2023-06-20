import { FormLabel as ChakraFormLabel, forwardRef } from "@chakra-ui/react";
import { FormControlProps } from "./Form-control";

export interface FormLabelProps extends FormControlProps {
  /**
   * Label for the form component
   *
   * @default "label"
   */
  label?: string;
  /**
   * @type React.ReactElement
   */
  requiredIndicator?: React.ReactElement;
  /**
   * @type React.ReactNode
   */
  optionalIndicator?: React.ReactNode;
}

export const FormLabel = forwardRef<FormLabelProps, "label">(({ label, ...props }, ref) => {
  return (
    <ChakraFormLabel {...props} ref={ref}>
      {label}
    </ChakraFormLabel>
  );
});
