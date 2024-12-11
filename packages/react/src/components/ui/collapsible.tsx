import { ButtonProps } from "@/button";
import { Collapsible as ChakraCollapsible } from "@chakra-ui/react";
import React from "react";
import { Merge } from "../utils";

export interface CollapsibleTriggerProps extends Merge<ButtonProps, ChakraCollapsible.TriggerProps> {}

export const CollapsibleTrigger = React.forwardRef<HTMLButtonElement, CollapsibleTriggerProps>((props, ref) => {
  return <ChakraCollapsible.Trigger ref={ref} {...props} />;
});
