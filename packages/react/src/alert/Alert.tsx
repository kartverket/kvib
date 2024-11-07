import type { AlertRootProps as ChakraAlertProps } from "@chakra-ui/react";
import { forwardRef } from "react";
import { Alert as ChakraAlert } from "../components/ui/alert";

export const Alert = forwardRef<HTMLDivElement, ChakraAlertProps>(({ ...props }, ref) => {
  return <ChakraAlert {...props} ref={ref} />;
});
