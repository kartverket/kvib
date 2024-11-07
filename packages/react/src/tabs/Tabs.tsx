import { forwardRef } from "react";
import { TabsRoot as ChakraTabs, TabsProps as ChakraTabsProps } from "../tabs";

export type TabsProps = Omit<ChakraTabsProps, "colorScheme" | "size"> & {
  /**The visual color appearance of the tabs*/
  colorScheme?: "green" | "blue";
  /**The size of the tabs*/
  size: "sm" | "md" | "lg";
};

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(({ size = "md", ...props }, ref) => {
  return <ChakraTabs size={size} {...props} ref={ref} />;
});
