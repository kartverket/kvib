import { MaterialSymbol } from "material-symbols";
import { forwardRef } from "react";
import { IconButton as ChakraIconButton, IconButtonProps as ChakraIconButtonProps } from "../components/ui/icon-button";

export type IconButtonProps = Omit<ChakraIconButtonProps, "colorScheme" | "variant" | "isActive" | "icon"> & {
  /**The icon to be used in the button.*/
  icon: MaterialSymbol;

  /**The visual color appearance of the component.
     @default green*/
  colorScheme?: "green" | "blue" | "gray" | "red";

  /**The size of the component.
   @default md*/
  size?: any;

  /**If true, the icon will be filled.
   @default false*/
  iconFill?: boolean;
};

/*
const IconSpinner = (props: IconButtonProps) => {
  if (props.loading) {
    return <Spinner size="sm" />;
  }
  return (
    <Icon
      icon={props.icon}
      isFilled={props.iconFill}
      size={props.size === "xs" || props.size === "sm" ? 20 : 24}
      weight={props.size === "xs" || props.size === "sm" ? 300 : 400}
    />
  );
}; */

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ disabled, loading, iconFill, ...props }, ref) => {
    return <ChakraIconButton {...props} ref={ref} disabled={disabled || loading} aria-busy={loading} />;
  },
);
