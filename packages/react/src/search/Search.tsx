import {
  Input as ChakraInput,
  InputElement as ChakraInputElement,
  Group as ChakraInputGroup,
  InputProps as ChakraInputProps,
} from "@chakra-ui/react";
import { forwardRef, useRef } from "react";
import { Button, IconButton } from "../button";
import { useResizeObserver } from "../hooks";

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

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  (
    {
      id,
      colorScheme,
      size,
      variant,
      disabled,
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
    const elementRef = useRef<HTMLButtonElement>(null);
    const dimensions = useResizeObserver({
      ref: elementRef,
      box: "border-box",
    });

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
        disabled,
        width: buttonWidth,
        size,
        borderRadius: size === "sm" || size === "xs" ? "0.125rem" : undefined,
      };

      return buttonText ? (
        <Button ref={elementRef} {...buttonProps} rightIcon="search" type="submit" aria-label="search">
          {buttonText}
        </Button>
      ) : (
        <IconButton {...buttonProps} type="submit" icon="search" />
      );
    };

    // Padding on inputfield based on the width of the button
    const inputPadding = buttonWidth
      ? `calc(${buttonWidth} + 0.5rem)`
      : buttonText && dimensions
        ? `calc(${dimensions.width}px + 0.5rem)`
        : "3rem";

    return (
      <ChakraInputGroup width={props.width}>
        <ChakraInput
          {...props}
          id={id}
          ref={ref}
          role={role}
          size={size}
          variant={variant}
          disabled={disabled}
          paddingLeft={searchButton === "left" ? inputPadding : undefined}
          paddingRight={searchButton === "right" ? inputPadding : undefined}
        />
        {searchButton === "left" && (
          <ChakraInputElement width="auto">
            <RenderButton position={"left"} />
          </ChakraInputElement>
        )}
        {searchButton === "right" && (
          <ChakraInputElement width="auto">
            <RenderButton position={"right"} />
          </ChakraInputElement>
        )}
      </ChakraInputGroup>
    );
  },
);
