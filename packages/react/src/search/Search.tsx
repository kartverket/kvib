import {
  Input as ChakraInput,
  InputProps as ChakraInputProps,
  forwardRef,
  InputGroup as ChakraInputGroup,
  InputLeftElement as ChakraInputLeftElement,
  InputRightElement as ChakraInputRightElement,
  useDimensions,
} from "@chakra-ui/react";
import { IconButton, Button } from "../button";
import { useRef } from "react";

export type SearchProps = Omit<ChakraInputProps, "isRequired" | "colorScheme"> & {
  leftSearchIcon?: boolean;
  rightSearchIcon?: boolean;
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
      type = "search",
      isDisabled,
      leftSearchIcon,
      rightSearchIcon,
      buttonWidth,
      buttonVariant = "tertiary",
      buttonText,
      ...props
    },
    ref,
  ) => {
    // Used to calculate width of button if no buttonWidth is given and there is text in the button
    const elementRef = useRef(null);
    const dimensions = useDimensions(elementRef);

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
        <Button ref={elementRef} {...buttonProps} rightIcon="search">
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
        ? `calc(${dimensions.borderBox.width}px + 0.5rem)`
        : "3rem";

    console.log("inputPadding", inputPadding);
    console.log("dimensions", dimensions?.borderBox.width);

    const paddingProp = (position: "left" | "right") => (position === "left" ? "paddingLeft" : "paddingRight");

    const RenderInputGroup = ({ position }: RenderProps) => (
      <ChakraInputGroup size={size} width={props.width}>
        <ChakraInput
          {...props}
          id={id}
          ref={ref}
          size={size}
          type={type}
          variant={variant}
          isDisabled={isDisabled}
          {...{ [paddingProp(position)]: inputPadding }}
        />
        {position === "left" && (
          <ChakraInputLeftElement width="auto">
            <RenderButton position={"left"} />
          </ChakraInputLeftElement>
        )}
        {position === "right" && (
          <ChakraInputRightElement width="auto">
            <RenderButton position={"right"} />
          </ChakraInputRightElement>
        )}
      </ChakraInputGroup>
    );

    return (
      <>
        {leftSearchIcon && <RenderInputGroup position="left" />}
        {rightSearchIcon && <RenderInputGroup position="right" />}
        {!leftSearchIcon && !rightSearchIcon && (
          <ChakraInput {...props} id={id} ref={ref} size={size} type={type} variant={variant} isDisabled={isDisabled} />
        )}
      </>
    );
  },
);
