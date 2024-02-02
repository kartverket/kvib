import { FormErrorMessage as ChakraFormErrorMessage, Text as ChakraText, forwardRef } from "@chakra-ui/react";
import { FormControlProps } from "./Form-control";

export interface FormErrorMessageProps extends FormControlProps {
  /**
   * errorMessage for component
   *
   * @default errorMessage
   */
  errorMessage?: string;
}

export const FormErrorMessage = forwardRef<FormErrorMessageProps, "div">(
  ({ errorMessage, children, ...props }, ref) => {
    return (
      <ChakraFormErrorMessage
        {...props}
        ref={ref}
        background={"red.50"}
        padding={"8px"}
        borderStyle={"solid"}
        borderColor={"red.100"}
        borderWidth={"2px"}
        borderRadius={"8px"}
        gap="5px"
      >
        <span className={"material-symbols-outlined"}>Error</span>
        <ChakraText>
          {errorMessage}
          {children}
        </ChakraText>
      </ChakraFormErrorMessage>
    );
  },
);
