import { Group as ChakraButtonGroup, GroupProps as ChakraButtonGroupProps } from "@chakra-ui/react";

import { forwardRef } from "react";

export type ButtonGroupProps = Omit<ChakraButtonGroupProps, "colorPalette"> & {
  /**The visual color appearance of the component
   * @default green*/
  colorPalette?: "green" | "blue" | "gray" | "red";
};
export const ButtonGroup = forwardRef<HTMLDivElement, ButtonGroupProps>(({ ...props }, ref) => (
  <ChakraButtonGroup {...props} ref={ref} />
));
