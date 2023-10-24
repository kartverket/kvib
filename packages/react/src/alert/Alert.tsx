import { AlertProps as ChakraAlertProps, Alert as ChakraAlert, forwardRef } from "@chakra-ui/react";

export const Alert = forwardRef<ChakraAlertProps, "div">(({ ...props }, ref) => {
  return <ChakraAlert {...props} ref={ref} />;
});
