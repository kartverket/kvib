import { Group as ChakraButtonGroup, GroupProps as ChakraButtonGroupProps } from "@chakra-ui/react";

import { forwardRef } from "react";

export type ButtonGroupProps = Omit<ChakraButtonGroupProps, "colorScheme"> & {
  /**The visual color appearance of the component
   * @default green*/
  colorScheme?: "green" | "blue" | "gray" | "red";
};
export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(({ ...props }, ref) => (
  <ChakraButtonGroup {...props} ref={ref} />
));
