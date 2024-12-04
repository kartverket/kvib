import { IconButton as ChakraIconButton, IconButtonProps as ChakraIconButtonProps } from "@/components/ui/icon-button";
import { MaterialSymbol } from "material-symbols";
import { forwardRef } from "react";
import { ButtonVariant, buttonVariantMap } from "./Button";

export type IconButtonProps = Omit<ChakraIconButtonProps, "colorPalette" | "active" | "icon" | "variant"> & {
  /** The variants of the component
   * @default solid */
  variant?: "primary" | "secondary" | "tertiary" | "solid" | "outline" | "ghost" | "plain";

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
  const { variant, ...rest } = props;
  const buttonVariant = buttonVariantMap[variant || "solid"] as ButtonVariant;
  return <ChakraIconButton {...rest} ref={ref} variant={buttonVariant} />;
});
