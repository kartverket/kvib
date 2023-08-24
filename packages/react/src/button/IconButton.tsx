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

  /**The visual color appearance of the component.
   @default md*/
  size?: "xs" | "sm" | "md" | "lg";

  /**If true, the icon will be filled.
   @default false*/
  iconFill?: boolean;

  iconSize?: 20 | 24 | 40 | 48;

  iconWeight?: 100 | 200 | 300 | 400 | 500 | 600 | 700;

  iconGrade?: -25 | 0 | 200;
};

const IconSpinner = (props: IconButtonProps) => {
  if (props.isLoading) {
    return <Spinner size="sm" />;
  }
  return (
    <Icon
      icon={props.icon}
      isFilled={props.iconFill}
      grade={props.iconGrade}
      size={props.iconSize ? props.iconSize : props.size === "xs" || props.size === "sm" ? 20 : 24}
      weight={props.iconWeight ? props.iconWeight : props.size === "xs" || props.size === "sm" ? 300 : 400}
    />
  );
};

export const IconButton = forwardRef<IconButtonProps, "button">(
  ({ isDisabled, isLoading, iconFill, ...props }, ref) => {
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
