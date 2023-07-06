import {
  ButtonGroup as ChakraButtonGroup,
  ButtonGroupProps as ChakraButtonGroupProps,
  forwardRef,
} from "@chakra-ui/react";

export type ButtonGroupProps = Omit<ChakraButtonGroupProps, "colorScheme"> & {
  /**The visual color appearance of the component
   * @default green*/
  colorScheme?: "green" | "blue" | "gray" | "red";
};
export const ButtonGroup = forwardRef<ButtonGroupProps, "div">(({ ...props }, ref) => (
  <ChakraButtonGroup {...props} ref={ref} />
));
