import { TabsProps as ChakraTabsProps, Tabs as ChakraTabs, forwardRef } from "@chakra-ui/react";

export type TabsProps = Omit<ChakraTabsProps, "colorScheme" | "size"> & {
  /**The visual color appearance of the tabs*/
  colorScheme?: "green" | "blue";
  /**The size of the tabs*/
  size: "sm" | "md" | "lg";
};

export const Tabs = forwardRef<TabsProps, "div">(({ size = "md", ...props }, ref) => {
  return <ChakraTabs size={size} {...props} ref={ref} />;
});
