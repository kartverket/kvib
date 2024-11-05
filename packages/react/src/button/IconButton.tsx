import { IconButton as ChakraIconButton, IconButtonProps as ChakraIconButtonProps, Spinner } from "@chakra-ui/react";
import { MaterialSymbol } from "material-symbols";
import { forwardRef } from "react";
import { Icon } from "../icon";

export type IconButtonProps = Omit<ChakraIconButtonProps, "colorScheme" | "variant" | "isActive" | "icon"> & {
  /**The variant of the IconButton
   * @default primary */
  variant?: "primary" | "secondary" | "tertiary" | "ghost";

  /**The icon to be used in the button.*/
  icon: MaterialSymbol;

  /**The visual color appearance of the component.
     @default green*/
  colorScheme?: "green" | "blue" | "gray" | "red";

  /**If true, the icon will be filled.
   @default false*/
  iconFill?: boolean;

  /**
   * If true, the button will show a spinner.
   */
  isLoading?: boolean;
};

const IconSpinner = (props: IconButtonProps) => {
  if (props.isLoading) {
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
};

export const IconButton = forwardRef<HTMLButtonElement, IconButtonProps>(
  ({ disabled, isLoading, iconFill, icon, size, ...props }, ref) => {
    return (
      <ChakraIconButton {...props} variant="ghost" ref={ref} disabled={disabled || isLoading} aria-busy={isLoading}>
        <IconSpinner isLoading={isLoading} icon={icon} iconFill={iconFill} size={size} />
      </ChakraIconButton>
    );
  },
);
