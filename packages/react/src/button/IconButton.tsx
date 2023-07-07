import {
  IconButton as ChakraIconButton,
  IconButtonProps as ChakraIconButtonProps,
  forwardRef,
  Spinner,
} from "@chakra-ui/react";
import { useStyleConfig } from "@chakra-ui/system";
import { Icon } from "../icon";

export type IconButtonProps = Omit<ChakraIconButtonProps, "colorScheme" | "variant" | "isActive" | "icon"> & {
  /**The variant of the IconButton
   * @default solid */
  variant?: "solid" | "outline" | "link" | "ghost";

  /**The icon to be used in the button.*/
  icon: string;

  /**The visual color appearance of the component.
     @default green*/
  colorScheme?: "green" | "blue" | "gray" | "red";

  /**If true, the icon will be filled.
   @default false*/
  iconFill?: boolean;
};

const IconSpinner = (props: IconButtonProps) => {
  if (props.isLoading) {
    return <Spinner size="sm" />;
  }
  return <Icon icon={props.icon} isFilled={props.iconFill} />;
};

export const IconButton = forwardRef<IconButtonProps, "button">(
  (
    { isDisabled, isLoading, iconFill, ...props },

    ref
  ) => {
    const styles = useStyleConfig("IconButton", props);
    return (
      <ChakraIconButton
        {...props}
        ref={ref}
        __css={{ ...styles }}
        isDisabled={isDisabled || isLoading}
        aria-busy={isLoading}
        icon={IconSpinner({ isLoading, iconFill, ...props })}
      ></ChakraIconButton>
    );
  }
);
