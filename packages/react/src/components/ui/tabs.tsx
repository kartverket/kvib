import { ButtonProps } from "@/button";
import { BoxProps } from "@/layout";
import { Tabs as ChakraTabs } from "@chakra-ui/react";
import React from "react";
import { Merge } from "../utils";

export interface TabsTriggerProps extends Merge<ButtonProps, ChakraTabs.TriggerProps> {
  value: string;
}

export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(function TabsTrigger(props, ref) {
  return <ChakraTabs.Trigger ref={ref} {...props} />;
});

export interface TabsContentProps extends Merge<BoxProps, ChakraTabs.ContentProps> {
  value: string;
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(function TabsContent(props, ref) {
  return <ChakraTabs.Content ref={ref} {...props} />;
});
