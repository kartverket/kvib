import { IconButton as ChakraIconButton, IconButtonProps as ChakraIconButtonProps } from "@/components/ui/icon-button";
import { Icon } from "@/icon";
import { MaterialSymbol } from "material-symbols";
import { forwardRef } from "react";

export type IconButtonProps = Omit<ChakraIconButtonProps, "colorPalette" | "variant" | "active" | "icon"> & {
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

const IconSpinner = (props: IconButtonProps) => (
  <Icon
    icon={props.icon}
    filled={props.iconFill}
    size={props.size === "xs" || props.size === "sm" ? 20 : 24}
    weight={props.size === "xs" || props.size === "sm" ? 300 : 400}
  />
);

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ disabled, loading, iconFill, ...props }, ref) => {
    return (
      <ChakraIconButton
        {...props}
        ref={ref}
        disabled={disabled || loading}
        aria-busy={loading}
        icon={IconSpinner({ loading, iconFill, ...props })}
      />
    );
  },
);
