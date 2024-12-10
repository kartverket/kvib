import { Tabs as ChakraTabs } from "@chakra-ui/react";
import React from "react";

export interface TabsTriggerProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "color" | "content" | "translate">,
    ChakraTabs.TriggerProps {
  value: string;
}

export const TabsTrigger = React.forwardRef<HTMLButtonElement, TabsTriggerProps>(function TabsTrigger(props, ref) {
  return <ChakraTabs.Trigger ref={ref} {...props} />;
});

export interface TabsContentProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color" | "content" | "translate">,
    ChakraTabs.ContentProps {
  value: string;
}

export const TabsContent = React.forwardRef<HTMLDivElement, TabsContentProps>(function TabsContent(props, ref) {
  return <ChakraTabs.Content ref={ref} {...props} />;
});
