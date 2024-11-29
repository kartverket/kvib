import { IconButton as ChakraIconButton, IconButtonProps as ChakraIconButtonProps } from "@/components/ui/icon-button";
import { MaterialSymbol } from "material-symbols";
import { forwardRef } from "react";

export type IconButtonProps = Omit<ChakraIconButtonProps, "colorPalette" | "active" | "icon"> & {
  /**The icon to be used in the button.*/
  icon: MaterialSymbol;

  /**The visual color appearance of the component.
     @default green*/
  colorPalette?: "green" | "blue" | "gray" | "red";

  /**The size of the component.
   @default md*/
  size?: any;

  /**If true, the icon will be filled.
   @default false*/
  iconFill?: boolean;
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>((props, ref) => {
  return <ChakraIconButton {...props} ref={ref} />;
});
