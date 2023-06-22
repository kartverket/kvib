import { IconButton as ChakraIconButton, IconButtonProps as ChakraIconButtonProps, forwardRef } from "@chakra-ui/react";

import {
  chakra,
  omitThemingProps,
  SystemStyleObject,
  ThemingProps,
  useStyleConfig,
  HTMLChakraProps,
} from "@chakra-ui/system";

//import {ButtonProps} from "./Button";

export type IconButtonProps = Omit<
  ChakraIconButtonProps,
  "colorScheme" | "size" | "variant" | "isActive" | "icon" | "spinner"
> & {
  /**The variant of the IconButton*/
  variant: "solid" | "outlined" | "link";

  /**The icon to be used in the button.*/
  icon: string;

  //   export interface IconButtonProps extends HTMLChakraProps<"button">, ThemingProps<"IconButton">{
  //   /**The variant of the IconButton*/
  //   variant: "solid" | "outlined" | "link";
  //
  //   /**The icon to be used in the button.*/
  //   icon: string;
  // }

  // /**The size of the Button*/
  // size: "xs"| "sm" | "md" | "lg";
  //
  // /**The visual color appearance of the component*/
  // colorScheme: "green" | "blue" | "gray" | "red";
  //
  //
  // /**A label that describes the button*/
  // "aria-label": string;
};

// export type IconButtonProps= ButtonProps & {
//
//     /**The icon to be used in the button.*/
//     icon: string;
//     variant: "iconButton"
// }

// export const IconButton = forwardRef<IconButtonProps, "button">(
//   ({ size = "md",  colorScheme = "green", isDisabled, isLoading, ...props }, ref) => {
//
//     // const styles = useMultiStyleConfig('IconButtonTheme', { variant, size })
//     return (
//       <ChakraIconButton
//         {...props}
//         ref={ref}
//         size={size}
//         variant = "solid"
//         colorScheme={colorScheme}
//         isDisabled={isDisabled || isLoading}
//         aria-busy={isLoading}
//         aria-label={"aria-label"}
//         icon={<span  className="material-symbols-outlined">{props.icon}</span>}
//         padding={"0px"}
//         // paddingX={"12px"}
//         // paddingY={"12px"}
//       >
//       </ChakraIconButton>
//     );
//   }
// );

//TODO:remove one of this.

export const IconButton = forwardRef<IconButtonProps, "button">(
  (
    { variant = "solid", isDisabled, isLoading, ...props },

    ref
  ) => {
    const styles = useStyleConfig("IconButton", props);

    return (
      <ChakraIconButton
        variant={variant}
        {...props}
        __css={styles}
        ref={ref}
        isDisabled={isDisabled || isLoading}
        aria-busy={isLoading}
        aria-label={"aria-label"}
        icon={<span className="material-symbols-outlined">{props.icon}</span>}
      ></ChakraIconButton>
    );
  }
);
