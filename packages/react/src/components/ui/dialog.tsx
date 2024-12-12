import { ButtonProps } from "@/button";
import { BoxProps } from "@/layout";
import { Dialog as ChakraDialog, Portal } from "@chakra-ui/react";
import * as React from "react";
import { Merge } from "../utils";
import { CloseButton } from "./close-button";

interface DialogContentProps extends Merge<BoxProps, ChakraDialog.ContentProps> {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
  backdrop?: boolean;
}

export const DialogContent = React.forwardRef<HTMLDivElement, DialogContentProps>(function DialogContent(props, ref) {
  const { children, portalled = true, portalRef, backdrop = true, ...rest } = props;

  return (
    <Portal disabled={!portalled} container={portalRef}>
      {backdrop && <ChakraDialog.Backdrop />}
      <ChakraDialog.Positioner>
        <ChakraDialog.Content ref={ref} {...rest} asChild={false}>
          {children}
        </ChakraDialog.Content>
      </ChakraDialog.Positioner>
    </Portal>
  );
});

interface DialogCloseTriggerProps extends Merge<ButtonProps, ChakraDialog.CloseTriggerProps> {}

export const DialogCloseTrigger = React.forwardRef<HTMLButtonElement, DialogCloseTriggerProps>(
  function DialogCloseTrigger(props, ref) {
    return (
      <ChakraDialog.CloseTrigger position="absolute" top="2" insetEnd="2" colorPalette={"inherit"} {...props} asChild>
        <CloseButton size="sm" ref={ref} colorPalette={"inherit"}>
          {props.children}
        </CloseButton>
      </ChakraDialog.CloseTrigger>
    );
  },
);

export const DialogRoot = ChakraDialog.Root;
export const DialogFooter = ChakraDialog.Footer;
export const DialogHeader = ChakraDialog.Header;
export const DialogBody = ChakraDialog.Body;
export const DialogBackdrop = ChakraDialog.Backdrop;
export const DialogTitle = ChakraDialog.Title;
export const DialogDescription = ChakraDialog.Description;

interface DialogTriggerProps extends Merge<BoxProps, ChakraDialog.TriggerProps> {}

export const DialogTrigger = React.forwardRef<HTMLButtonElement, DialogTriggerProps>(
  function DialogTrigger(props, ref) {
    return <ChakraDialog.Trigger ref={ref} {...props} />;
  },
);

export const DialogActionTrigger = ChakraDialog.ActionTrigger;
