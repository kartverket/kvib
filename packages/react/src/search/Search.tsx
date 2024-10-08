import {
  Input as ChakraInput,
  InputGroup as ChakraInputGroup,
  InputLeftElement as ChakraInputLeftElement,
  InputProps as ChakraInputProps,
  InputRightElement as ChakraInputRightElement,
  forwardRef,
} from "@chakra-ui/react";
import { useSize } from "@chakra-ui/react-use-size";
import { useRef } from "react";
import { Button, IconButton } from "../button";

export type SearchProps = Omit<ChakraInputProps, "isRequired" | "colorScheme"> & {
  searchButton?: "left" | "right" | "none";
  colorScheme?: "gray" | "red" | "green" | "blue" | undefined;
  buttonVariant?: "primary" | "secondary" | "tertiary" | "ghost";
  buttonWidth?: string;
  buttonText?: string;
};

type RenderProps = {
  position: "left" | "right";
};

export const Search = forwardRef<SearchProps, "input">(
  (
    {
      id,
      colorScheme,
      size,
      variant,
      isDisabled,
      searchButton = "none",
      buttonWidth,
      buttonVariant = "tertiary",
      buttonText,
      role = "search",
      ...props
    },
    ref,
  ) => {
    // Used to calculate width of button if no buttonWidth is given and there is text in the button
    const elementRef = useRef(null);
    const dimensions = useSize(elementRef);

    // Use IconButton when there is no text in the button
    const RenderButton = ({ position }: RenderProps) => {
      const borderRadiusProps =
        position === "left"
          ? { borderBottomRightRadius: 0, borderTopRightRadius: 0 }
          : { borderBottomLeftRadius: 0, borderTopLeftRadius: 0 };

      const buttonProps = {
        ...borderRadiusProps,
        colorScheme,
        variant: buttonVariant,
        isDisabled,
        width: buttonWidth,
        size,
        borderRadius: size === "sm" || size === "xs" ? "0.125rem" : undefined,
      };

      return buttonText ? (
        <Button ref={elementRef} {...buttonProps} rightIcon="search" type="submit" aria-label="search">
          {buttonText}
        </Button>
      ) : (
        <IconButton {...buttonProps} aria-label="search" type="submit" icon="search" />
      );
    };

    // Padding on inputfield based on the width of the button
    const inputPadding = buttonWidth
      ? `calc(${buttonWidth} + 0.5rem)`
      : buttonText && dimensions
        ? `calc(${dimensions.width}px + 0.5rem)`
        : "3rem";

    return (
      <ChakraInputGroup size={size} width={props.width}>
        <ChakraInput
          {...props}
          id={id}
          ref={ref}
          role={role}
          size={size}
          variant={variant}
          isDisabled={isDisabled}
          paddingLeft={searchButton === "left" ? inputPadding : undefined}
          paddingRight={searchButton === "right" ? inputPadding : undefined}
        />
        {searchButton === "left" && (
          <ChakraInputLeftElement width="auto">
            <RenderButton position={"left"} />
          </ChakraInputLeftElement>
        )}
        {searchButton === "right" && (
          <ChakraInputRightElement width="auto">
            <RenderButton position={"right"} />
          </ChakraInputRightElement>
        )}
      </ChakraInputGroup>
    );
  },
);
