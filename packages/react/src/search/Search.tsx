import { Input, InputGroup, InputProps } from "@/input";
import { Box } from "@/layout";
import { forwardRef, useRef } from "react";
import { Button, IconButton } from "../button";

export type SearchProps = Omit<InputProps, "required" | "colorPalette"> & {
  searchButton?: "left" | "right" | "none";
  colorPalette?: "gray" | "red" | "green" | "blue";
  buttonVariant?: "solid" | "outline" | "ghost" | "plain";
  buttonWidth?: string;
  buttonText?: string;
};

type RenderProps = {
  position: "left" | "right";
};

export const Search = forwardRef<HTMLInputElement, SearchProps>(
  ({
    colorPalette,
    size,
    searchButton = "none",
    buttonWidth,
    buttonVariant = "outline",
    buttonText,
    role = "search",
    ...props
  }) => {
    // Used to calculate width of button if no buttonWidth is given and there is text in the button
    const elementRef = useRef<HTMLButtonElement>(null);

    // Use IconButton when there is no text in the button
    const RenderButton = ({ position }: RenderProps) => {
      const borderRadiusProps =
        position === "left"
          ? { borderBottomRightRadius: 0, borderTopRightRadius: 0 }
          : { borderBottomLeftRadius: 0, borderTopLeftRadius: 0 };

      const buttonProps = {
        borderRadius: size === "sm" || size === "xs" ? size : undefined,
        ...borderRadiusProps,
        colorPalette,
        variant: buttonVariant,
        disabled: props.disabled,
        width: buttonWidth,
        size,
      };

      return (
        <Box boxSizing={"border-box"}>
          {buttonText ? (
            <Button ref={elementRef} {...buttonProps} rightIcon="search" type="submit" aria-label="search">
              {buttonText}
            </Button>
          ) : (
            <IconButton {...buttonProps} type="submit" icon="search" />
          )}
        </Box>
      );
    };

    return (
      <InputGroup
        width={props.width}
        startElement={searchButton === "left" ? <RenderButton position={"left"} /> : undefined}
        endElement={searchButton === "right" ? <RenderButton position={"right"} /> : undefined}
      >
        <Input {...props} role={role} size={size} />
      </InputGroup>
    );
  },
);
