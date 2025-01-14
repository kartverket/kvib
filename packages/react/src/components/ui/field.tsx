import { FieldErrorText, FieldHelperText, FieldLabel } from "@/field";
import { Field as ChakraField } from "@chakra-ui/react";
import * as React from "react";

export interface FieldProps extends Omit<ChakraField.RootProps, "label"> {
  label?: React.ReactNode;
  helperText?: React.ReactNode;
  errorText?: React.ReactNode;
  optionalText?: React.ReactNode;
}

export const Field = React.forwardRef<HTMLDivElement, FieldProps>(function Field(props, ref) {
  const { label, children, helperText, errorText, optionalText, ...rest } = props;
  return (
    <ChakraField.Root ref={ref} {...rest}>
      {label && (
        <ChakraField.Label>
          {label}
          <ChakraField.RequiredIndicator fallback={optionalText} />
        </ChakraField.Label>
      )}
      {children}
      {helperText && <ChakraField.HelperText>{helperText}</ChakraField.HelperText>}
      {errorText && <ChakraField.ErrorText>{errorText}</ChakraField.ErrorText>}
    </ChakraField.Root>
  );
});

/**
 * @deprecated
 *
 * This component has been deprecated, please use Field instead
 *
 * Before:
 *
 * `<FormControl />`
 *
 * After:
 *
 * `<Field />`
 *
 * @deprecatedSince 5.0.0
 *
 */
export const FormControl = Field;

/**
 * @deprecated
 *
 * This component has been deprecated, please use the label prop on the root component or FieldLabel instead
 *
 * Before:
 *
 * `<FormLabel />`
 *
 * After:
 *
 * `<Field label="..." />`
 *
 * @deprecatedSince 5.0.0
 *
 */
export const FormLabel = FieldLabel;

/**
 * @deprecated
 *
 * This component has been deprecated, please use the helperText prop on the root component or FieldHelperText instead
 *
 * Before:
 *
 * `<FormHelperText />`
 *
 * After:
 *
 * `<Field helperText="..." />`
 *
 * @deprecatedSince 5.0.0
 *
 */
export const FormHelperText = FieldHelperText;

/**
 * @deprecated
 *
 * This component has been deprecated, please use the errorText prop on the root component or FieldErrorText instead
 *
 * Before:
 *
 * `<FormErrorMessage />`
 *
 * After:
 *
 * `<Field errorText="..." />`
 *
 * @deprecatedSince 5.0.0
 *
 */
export const FormErrorMessage = FieldErrorText;
