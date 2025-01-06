import { Popover as ChakraPopover, Portal } from "@chakra-ui/react";
import * as React from "react";
import { CloseButton } from "./close-button";

const ColorPaletteContext = React.createContext<"gray" | "red" | "green" | "blue" | undefined>(undefined);

interface PopoverContentProps extends ChakraPopover.ContentProps {
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

export const PopoverArrow = React.forwardRef<HTMLDivElement, ChakraPopover.ArrowProps>(
  function PopoverArrow(props, ref) {
    const colorPalette = React.useContext(ColorPaletteContext);
    return (
      <ChakraPopover.Arrow {...props} ref={ref} colorPalette={colorPalette}>
        <ChakraPopover.ArrowTip />
      </ChakraPopover.Arrow>
    );
  },
);

export const PopoverCloseTrigger = React.forwardRef<HTMLButtonElement, ChakraPopover.CloseTriggerProps>(
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

export const PopoverTitle = React.forwardRef<HTMLDivElement, ChakraPopover.TitleProps>(
  function PopoverTitle(props, ref) {
    const colorPalette = React.useContext(ColorPaletteContext);
    return <ChakraPopover.Title ref={ref} colorPalette={colorPalette} {...props} />;
  },
);

export const PopoverDescription = ChakraPopover.Description;
export const PopoverFooter = ChakraPopover.Footer;

export const PopoverHeader = React.forwardRef<HTMLDivElement, ChakraPopover.HeaderProps>(
  function PopoverHeader(props, ref) {
    const colorPalette = React.useContext(ColorPaletteContext);
    return <ChakraPopover.Header ref={ref} colorPalette={colorPalette} {...props} />;
  },
);

interface PopoverRootProps extends ChakraPopover.RootProps {
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

export const PopoverTrigger = React.forwardRef<HTMLButtonElement, ChakraPopover.TriggerProps>(
  function PopoverTrigger(props, ref) {
    const colorPalette = React.useContext(ColorPaletteContext);
    return <ChakraPopover.Trigger ref={ref} colorPalette={colorPalette} {...props} />;
  },
);
