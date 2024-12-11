import { Collapsible as ChakraCollapsible } from "@chakra-ui/react";
import React from "react";

export interface CollapsibleTriggerProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "color" | "content" | "translate">,
    ChakraCollapsible.TriggerProps {}

export const CollapsibleTrigger = React.forwardRef<HTMLButtonElement, CollapsibleTriggerProps>((props, ref) => {
  return <ChakraCollapsible.Trigger ref={ref} {...props} />;
});
