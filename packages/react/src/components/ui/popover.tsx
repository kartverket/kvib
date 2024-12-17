import { ButtonProps } from "@/button";
import { BoxProps } from "@/layout";
import { Popover as ChakraPopover, Portal } from "@chakra-ui/react";
import * as React from "react";
import { Merge } from "../utils";
import { CloseButton } from "./close-button";

const ColorPaletteContext = React.createContext<"gray" | "red" | "green" | "blue" | undefined>(undefined);

interface PopoverContentProps extends Merge<BoxProps, ChakraPopover.ContentProps> {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
}

export const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  function PopoverContent(props, ref) {
    const { portalled = true, portalRef, ...rest } = props;
    const colorPalette = React.useContext(ColorPaletteContext);

    return (
      <Portal disabled={!portalled} container={portalRef}>
        <ChakraPopover.Positioner colorPalette={colorPalette}>
          <ChakraPopover.Content ref={ref} colorPalette={colorPalette} {...rest} />
        </ChakraPopover.Positioner>
      </Portal>
    );
  },
);

interface PopoverArrowProps extends Merge<BoxProps, ChakraPopover.ArrowProps> {}

export const PopoverArrow = React.forwardRef<HTMLDivElement, PopoverArrowProps>(function PopoverArrow(props, ref) {
  const colorPalette = React.useContext(ColorPaletteContext);
  return (
    <ChakraPopover.Arrow {...props} ref={ref} colorPalette={colorPalette}>
      <ChakraPopover.ArrowTip />
    </ChakraPopover.Arrow>
  );
});

interface PopoverCloseTriggerProps extends Merge<ButtonProps, ChakraPopover.CloseTriggerProps> {}

export const PopoverCloseTrigger = React.forwardRef<HTMLButtonElement, PopoverCloseTriggerProps>(
  function PopoverCloseTrigger(props, ref) {
    const colorPalette = React.useContext(ColorPaletteContext);
    return (
      <ChakraPopover.CloseTrigger
        position="absolute"
        top="1"
        insetEnd="1"
        {...props}
        asChild
        ref={ref}
        colorPalette={colorPalette}
      >
        <CloseButton size="sm" />
      </ChakraPopover.CloseTrigger>
    );
  },
);

export interface PopoverTitleProps extends Merge<BoxProps, ChakraPopover.TitleProps> {}

export const PopoverTitle = React.forwardRef<HTMLDivElement, PopoverTitleProps>(function PopoverTitle(props, ref) {
  const colorPalette = React.useContext(ColorPaletteContext);
  return <ChakraPopover.Title ref={ref} colorPalette={colorPalette} {...props} />;
});

export const PopoverDescription = ChakraPopover.Description;
export const PopoverFooter = ChakraPopover.Footer;

interface PopoverHeaderProps extends Merge<BoxProps, ChakraPopover.HeaderProps> {}

export const PopoverHeader = React.forwardRef<HTMLDivElement, PopoverHeaderProps>(function PopoverHeader(props, ref) {
  const colorPalette = React.useContext(ColorPaletteContext);
  return <ChakraPopover.Header ref={ref} colorPalette={colorPalette} {...props} />;
});

interface PopoverRootProps extends Merge<BoxProps, ChakraPopover.RootProps> {
  colorPalette?: "gray" | "red" | "green" | "blue";
}

export const PopoverRoot = (props: PopoverRootProps) => {
  const { colorPalette, children, ...rest } = props;
  return (
    <ColorPaletteContext.Provider value={colorPalette}>
      <ChakraPopover.Root {...rest}>{children}</ChakraPopover.Root>
    </ColorPaletteContext.Provider>
  );
};

export const PopoverBody = ChakraPopover.Body;

interface PopoverTriggerProps extends Merge<ButtonProps, ChakraPopover.TriggerProps> {}

export const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  function PopoverTrigger(props, ref) {
    const colorPalette = React.useContext(ColorPaletteContext);
    return <ChakraPopover.Trigger ref={ref} colorPalette={colorPalette} {...props} />;
  },
);
