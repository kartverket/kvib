import { TabsProps as ChakraTabsProps, Tabs as ChakraTabs } from "@chakra-ui/react";
import { forwardRef } from "react";

export type TabsProps = Omit<ChakraTabsProps, "colorScheme" | "size"> & {
  /**The visual color appearance of the component*/
  colorScheme?: "green" | "blue";
  /** Defaults to `md` */
  // size?: "small" | "medium" | "large";
};

export const Tabs = forwardRef<HTMLDivElement, TabsProps>(({ ...props }, ref) => {
  return <ChakraTabs {...props} ref={ref} />;
});
