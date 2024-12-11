import { ButtonProps } from "@/button";
import { Collapsible as ChakraCollapsible } from "@chakra-ui/react";
import React from "react";

export interface CollapsibleTriggerProps extends ChakraCollapsible.TriggerProps, Omit<ButtonProps, "colorPalette"> {}

export const CollapsibleTrigger = React.forwardRef<HTMLButtonElement, CollapsibleTriggerProps>((props, ref) => {
  return <ChakraCollapsible.Trigger ref={ref} {...props} />;
});
