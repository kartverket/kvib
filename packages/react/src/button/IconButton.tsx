import { IconButton as ChakraIconButton, IconButtonProps as ChakraIconButtonProps, forwardRef } from "@chakra-ui/react";
import { useStyleConfig } from "@chakra-ui/system";

export type IconButtonProps = Omit<
  ChakraIconButtonProps,
  "colorScheme" | "variant" | "isActive" | "icon" | "spinner"
> & {
  /**The variant of the IconButton*/
  variant: "solid" | "outlined" | "link";

  /**The icon to be used in the button.*/
  icon: string;

  /**The visual color appearance of the component.
     @default green*/
  colorScheme: "green" | "blue" | "gray" | "red";
};

export const IconButton = forwardRef<IconButtonProps, "button">(
  (
    {
      isDisabled,
      isLoading,
      // variant="solid",
      // colorScheme="green" ,
      ...props
    },

    ref
  ) => {
    const styles = useStyleConfig("IconButton", props);

    return (
      <ChakraIconButton
        {...props}
        ref={ref}
        __css={{ ...styles }}
        // size={size}
        // variant={variant}
        // colorScheme={colorScheme}
        isDisabled={isDisabled || isLoading}
        aria-busy={isLoading}
        icon={<span className="material-symbols-outlined">{props.icon}</span>}
      ></ChakraIconButton>
    );
  }
);
