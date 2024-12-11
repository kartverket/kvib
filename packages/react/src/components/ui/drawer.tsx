import { BoxProps } from "@/layout";
import { Drawer as ChakraDrawer, Portal } from "@chakra-ui/react";
import * as React from "react";
import { Merge } from "../utils";
import { ButtonProps } from "./button";
import { CloseButton } from "./close-button";

interface DrawerContentProps extends Merge<BoxProps, ChakraDrawer.ContentProps> {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
  offset?: ChakraDrawer.ContentProps["padding"];
}

export const DrawerContent = React.forwardRef<HTMLDivElement, DrawerContentProps>(function DrawerContent(props, ref) {
  const { children, portalled = true, portalRef, offset, ...rest } = props;
  return (
    <Portal disabled={!portalled} container={portalRef}>
      <ChakraDrawer.Positioner padding={offset}>
        <ChakraDrawer.Content ref={ref} {...rest} asChild={false}>
          {children}
        </ChakraDrawer.Content>
      </ChakraDrawer.Positioner>
    </Portal>
  );
});

interface DrawerCloseTriggerProps extends Merge<ButtonProps, ChakraDrawer.CloseTriggerProps> {}

export const DrawerCloseTrigger = React.forwardRef<HTMLButtonElement, DrawerCloseTriggerProps>(
  function DrawerCloseTrigger(props, ref) {
    return (
      <ChakraDrawer.CloseTrigger position="absolute" top="2" insetEnd="2" {...props} asChild>
        <CloseButton size="sm" ref={ref} />
      </ChakraDrawer.CloseTrigger>
    );
  },
);

interface DrawerTriggerProps extends Merge<ButtonProps, ChakraDrawer.TriggerProps> {}

export const DrawerTrigger = React.forwardRef<HTMLButtonElement, DrawerTriggerProps>(
  function DrawerTrigger(props, ref) {
    return (
      <ChakraDrawer.Trigger {...props} ref={ref} asChild>
        {props.children}
      </ChakraDrawer.Trigger>
    );
  },
);

export const DrawerRoot = ChakraDrawer.Root;
export const DrawerFooter = ChakraDrawer.Footer;
export const DrawerHeader = ChakraDrawer.Header;
export const DrawerBody = ChakraDrawer.Body;
export const DrawerBackdrop = ChakraDrawer.Backdrop;
export const DrawerDescription = ChakraDrawer.Description;
export const DrawerTitle = ChakraDrawer.Title;

interface DrawerProps extends Merge<ButtonProps, ChakraDrawer.ActionTriggerProps> {}
export const DrawerActionTrigger = React.forwardRef<HTMLButtonElement, DrawerProps>(
  function DrawerActionTrigger(props, ref) {
    return (
      <ChakraDrawer.ActionTrigger {...props} ref={ref} asChild>
        {props.children}
      </ChakraDrawer.ActionTrigger>
    );
  },
);
