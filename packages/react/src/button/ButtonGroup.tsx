import {
  ButtonGroup as ChakraButtonGroup,
  ButtonGroupProps as ChakraButtonGroupProps,
  forwardRef,
} from "@chakra-ui/react";

export type ButtonGroupProps = Omit<ChakraButtonGroupProps, "colorScheme"> & {
  /**The visual color appearance of the component*/
  colorScheme?: "green" | "blue" | "gray" | "red";
};
export const ButtonGroup = forwardRef<ButtonGroupProps, "div">(({ colorScheme, ...props }, ref) => (
  <ChakraButtonGroup {...props} ref={ref} />
));
