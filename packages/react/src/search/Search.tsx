import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  forwardRef,
  InputGroup as ChakraInputGroup,
  InputLeftElement as ChakraInputLeftElement,
  InputRightElement as ChakraInputRightElement,
} from "@chakra-ui/react";
import { IconButton } from "../button";

export type SearchProps = Omit<ChakraInputProps, "isInvalid" | "isRequired" | "colorScheme"> & {
  leftSearchIcon?: boolean;
  rightSearchIcon?: boolean;
  colorScheme?: "gray" | "red" | "green" | "blue" | undefined;
};

export const Search = forwardRef<SearchProps, "input">(
  ({ id, colorScheme, size, variant, type = "search", isDisabled, leftSearchIcon, rightSearchIcon, ...props }, ref) => {
    return (
      <>
        {leftSearchIcon ? (
          <ChakraInputGroup>
            <ChakraInputLeftElement>
              <IconButton
                colorScheme={colorScheme}
                type={"submit"}
                variant={"tertiary"}
                aria-label={"search"}
                icon={"search"}
                isDisabled={isDisabled}
              />
            </ChakraInputLeftElement>
            <ChakraInput
              {...props}
              id={id}
              ref={ref}
              size={size}
              type={type}
              variant={variant}
              isDisabled={isDisabled}
            />
          </ChakraInputGroup>
        ) : rightSearchIcon ? (
          <ChakraInputGroup>
            <ChakraInputRightElement>
              <IconButton
                colorScheme={colorScheme}
                type={"submit"}
                variant={"tertiary"}
                aria-label={"search"}
                icon={"search"}
                isDisabled={isDisabled}
              />
            </ChakraInputRightElement>
            <ChakraInput
              {...props}
              id={id}
              ref={ref}
              variant={variant}
              size={size}
              type={type}
              isDisabled={isDisabled}
            />
          </ChakraInputGroup>
        ) : (
          <ChakraInput {...props} id={id} ref={ref} size={size} type={type} variant={variant} isDisabled={isDisabled} />
        )}
      </>
    );
  }
);
