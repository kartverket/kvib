import { Collapsible as ChakraCollapsible } from "@chakra-ui/react";
import React from "react";

export const CollapsibleTrigger = React.forwardRef<HTMLButtonElement, ChakraCollapsible.TriggerProps>((props, ref) => {
  return <ChakraCollapsible.Trigger ref={ref} {...props} />;
});
