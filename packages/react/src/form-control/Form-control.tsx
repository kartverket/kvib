import { FormControl as ChakraFormControl, forwardRef } from "@chakra-ui/react";

export interface FormControlProps {
  /**
   * If `true`, the form control will be required. This has 2 side effects:
   * - The `FormLabel` will show a required indicator
   * - The form element (e.g, Input) will have `aria-required` set to `true`
   *
   * @default false
   */
  isRequired?: boolean;
  /**
   * If `true`, the form control will be disabled. This has 2 side effects:
   * - The `FormLabel` will have `data-disabled` attribute
   * - The form element (e.g, Input) will be disabled
   *
   * @default false
   */
  isDisabled?: boolean;
  /**
   * If `true`, the form control will be invalid. This has 2 side effects:
   * - The `FormLabel` and `FormErrorIcon` will have `data-invalid` set to `true`
   * - The form element (e.g, Input) will have `aria-invalid` set to `true`
   *
   * @default false
   */
  isInvalid?: boolean;
  /**
   * If `true`, the form control will be readonly
   *
   * @default false
   */
  isReadOnly?: boolean;
}

export const FormControl = forwardRef<FormControlProps, "div">(
  ({ isRequired, isInvalid, isDisabled, isReadOnly, children, ...props }, ref) => {
    return (
      <ChakraFormControl
        {...props}
        ref={ref}
        isRequired={isRequired}
        isInvalid={isInvalid}
        isDisabled={isDisabled}
        isReadOnly={isReadOnly}
      >
        {children}
      </ChakraFormControl>
    );
  },
);
