import { Box, Button as ChakraButton, ButtonProps as ChakraButtonProps, forwardRef } from "@chakra-ui/react";
import { useMultiStyleConfig } from "@chakra-ui/react";

export type IconButtonProps = Omit<
  ChakraButtonProps,
  | "colorScheme"
  | "size"
  | "variant"
  | "leftIcon"
  | "rightIcon"
  | "iconSpacing"
  | "isActive"
  | "loadingText"
  | "spinnerPlacement"
> & {
  variant?: "ordinary" | "outlined";
  size?: "sm" | "md" | "lg";
  colorScheme?: "green" | "blue" | "gray";
  icon?: string;
  "aria-label": string;
};

export const BaseIconButton = forwardRef<IconButtonProps, "button">(
  ({ size = "md", variant = "ordinary", colorScheme = "green", isDisabled, isLoading, ...props }, ref) => {
    return (
      <ChakraButton
        {...props}
        ref={ref}
        size={size}
        variant={variant}
        colorScheme={colorScheme}
        isDisabled={isDisabled || isLoading}
        aria-busy={isLoading}
        aria-label={"aria-label"}
      >
        {/*<StylesProvider value={styles}>{children}</StylesProvider>*/}
        {/*<span className="material-symbols-outlined" >{props.icon}</span>*/}
      </ChakraButton>
    );
  }
);

export const IconButton = ({ size = "md", variant = "ordinary", colorScheme = "green", ...props }) => {
  const styles = useMultiStyleConfig("IconButton", { size, variant, colorScheme });
  // const [ useStyles, StylesProvider ] = createStylesContext('IconButton');
  return (
    <BaseIconButton {...props} aria-label={"aria-label"} __css={styles.button}>
      <Box __css={styles.icon}>
        <span className="material-symbols-outlined" style={{ width: "35px", height: "35px" }}>
          {props.icon}
        </span>
      </Box>
    </BaseIconButton>
  );
};
