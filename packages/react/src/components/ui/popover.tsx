import { ButtonProps } from "@/button";
import { BoxProps } from "@/layout";
import { Popover as ChakraPopover, Portal } from "@chakra-ui/react";
import * as React from "react";
import { Merge } from "../utils";
import { CloseButton } from "./close-button";

interface PopoverContentProps extends Merge<BoxProps, ChakraPopover.ContentProps> {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
}

export const PopoverContent = React.forwardRef<HTMLDivElement, PopoverContentProps>(
  function PopoverContent(props, ref) {
    const { portalled = true, portalRef, ...rest } = props;
    return (
      <Portal disabled={!portalled} container={portalRef}>
        <ChakraPopover.Positioner>
          <ChakraPopover.Content ref={ref} {...rest} />
        </ChakraPopover.Positioner>
      </Portal>
    );
  },
);

export const PopoverArrow = React.forwardRef<HTMLDivElement, ChakraPopover.ArrowProps>(
  function PopoverArrow(props, ref) {
    return (
      <ChakraPopover.Arrow {...props} ref={ref}>
        <ChakraPopover.ArrowTip />
      </ChakraPopover.Arrow>
    );
  },
);

interface PopoverCloseTriggerProps extends Merge<ButtonProps, ChakraPopover.CloseTriggerProps> {}

export const PopoverCloseTrigger = React.forwardRef<HTMLButtonElement, PopoverCloseTriggerProps>(
  function PopoverCloseTrigger(props, ref) {
    return (
      <ChakraPopover.CloseTrigger position="absolute" top="1" insetEnd="1" {...props} asChild ref={ref}>
        <CloseButton size="sm" />
      </ChakraPopover.CloseTrigger>
    );
  },
);

export interface PopoverTitleProps extends Merge<BoxProps, ChakraPopover.TitleProps> {}

export const PopoverTitle = React.forwardRef<HTMLDivElement, PopoverTitleProps>(function PopoverTitle(props, ref) {
  return <ChakraPopover.Title ref={ref} {...props} />;
});

export const PopoverDescription = ChakraPopover.Description;
export const PopoverFooter = ChakraPopover.Footer;
export const PopoverHeader = ChakraPopover.Header;
export const PopoverRoot = ChakraPopover.Root;
export const PopoverBody = ChakraPopover.Body;

interface PopoverTriggerProps extends Merge<ButtonProps, ChakraPopover.TriggerProps> {}

export const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  function PopoverTrigger(props, ref) {
    return <ChakraPopover.Trigger ref={ref} {...props} />;
  },
);
