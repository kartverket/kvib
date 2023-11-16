import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  forwardRef,
  InputGroup as ChakraInputGroup,
  InputLeftElement as ChakraInputLeftElement,
  InputRightElement as ChakraInputRightElement,
} from "@chakra-ui/react";
import { IconButton } from "../button";

export type SearchProps = Omit<ChakraInputProps, "isRequired" | "colorScheme"> & {
  leftSearchIcon?: boolean;
  rightSearchIcon?: boolean;
  colorScheme?: "gray" | "red" | "green" | "blue" | undefined;
  buttonVariant?: "primary" | "secondary" | "tertiary" | "ghost";
  buttonWidth?: string;
};

export const Search = forwardRef<SearchProps, "input">(
  (
    {
      id,
      colorScheme,
      size,
      variant,
      type = "search",
      isDisabled,
      leftSearchIcon,
      rightSearchIcon,
      buttonWidth,
      buttonVariant = "tertiary",
      ...props
    },
    ref,
  ) => {
    return (
      <>
        {leftSearchIcon ? (
          <ChakraInputGroup>
            <ChakraInput
              {...props}
              id={id}
              ref={ref}
              size={size}
              type={type}
              variant={variant}
              isDisabled={isDisabled}
              paddingLeft={buttonWidth ? `calc(${buttonWidth} + 0.5rem)` : "3rem"}
            />
            <ChakraInputLeftElement width={buttonWidth}>
              <IconButton
                colorScheme={colorScheme}
                type={"submit"}
                variant={buttonVariant}
                aria-label={"search"}
                icon={"search"}
                isDisabled={isDisabled}
                width={buttonWidth}
                size={size}
                borderRadius={size === "sm" || size === "xs" ? "0.125rem" : undefined}
                borderBottomRightRadius={0}
                borderTopRightRadius={0}
              />
            </ChakraInputLeftElement>
          </ChakraInputGroup>
        ) : rightSearchIcon ? (
          <ChakraInputGroup size={size}>
            <ChakraInput
              {...props}
              id={id}
              ref={ref}
              variant={variant}
              size={size}
              type={type}
              isDisabled={isDisabled}
              paddingRight={buttonWidth ? `calc(${buttonWidth} + 0.5rem)` : "3rem"}
            />
            <ChakraInputRightElement width={buttonWidth}>
              <IconButton
                colorScheme={colorScheme}
                type={"submit"}
                variant={buttonVariant}
                aria-label={"search"}
                icon={"search"}
                isDisabled={isDisabled}
                width={buttonWidth}
                size={size}
                borderRadius={size === "sm" || size === "xs" ? "0.125rem" : undefined}
                borderBottomLeftRadius={0}
                borderTopLeftRadius={0}
              />
            </ChakraInputRightElement>
          </ChakraInputGroup>
        ) : (
          <ChakraInput {...props} id={id} ref={ref} size={size} type={type} variant={variant} isDisabled={isDisabled} />
        )}
      </>
    );
  },
);
