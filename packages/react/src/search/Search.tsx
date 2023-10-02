import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  forwardRef,
  InputGroup as ChakraInputGroup,
  InputLeftElement as ChakraInputLeftElement,
  InputRightElement as ChakraInputRightElement,
} from "@chakra-ui/react";
import { IconButton } from "../button";

export type SearchProps = Omit<ChakraInputProps, "isInvalid" | "isRequired"> & {
  leftSearchIcon?: boolean;

  rightSearchIcon?: boolean;
};

export const Search = forwardRef<SearchProps, "input">(
  ({ id, size, variant, type = "search", isDisabled, leftSearchIcon, rightSearchIcon, ...props }, ref) => {
    return (
      <>
        {leftSearchIcon ? (
          <ChakraInputGroup>
            <ChakraInputLeftElement>
              <IconButton colorScheme={"blue"} variant={"tertiary"} aria-label={"search"} icon={"search"} />
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
              <IconButton colorScheme={"blue"} variant={"tertiary"} aria-label={"search"} icon={"search"} />
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
