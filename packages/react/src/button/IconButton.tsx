import {
  IconButton as ChakraIconButton,
  IconButtonProps as ChakraIconButtonProps,
  forwardRef,
  Spinner,
} from "@chakra-ui/react";
import { MaterialSymbol } from "material-symbols";
import { Icon } from "../icon";

export type IconButtonProps = Omit<ChakraIconButtonProps, "colorScheme" | "isActive" | "icon"> & {
  /**The icon to be used in the button.*/
  icon: MaterialSymbol;

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
    return (
      <ChakraIconButton
        {...props}
        ref={ref}
        isDisabled={isDisabled || isLoading}
        aria-busy={isLoading}
        icon={IconSpinner({ isLoading, iconFill, ...props })}
      ></ChakraIconButton>
    );
  }
);
