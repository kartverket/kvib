import { Dialog as ChakraDialog, Portal } from "@chakra-ui/react";
import * as React from "react";
import { CloseButton } from "./close-button";

interface DialogContentProps extends ChakraDialog.ContentProps {
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

export const DialogCloseTrigger = React.forwardRef<HTMLButtonElement, ChakraDialog.CloseTriggerProps>(
  function DialogCloseTrigger(props, ref) {
    return (
      <ChakraDialog.CloseTrigger position="absolute" top="2" insetEnd="2" {...props} asChild>
        <CloseButton size="sm" ref={ref}>
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
export const DialogTrigger = ChakraDialog.Trigger;
export const DialogActionTrigger = ChakraDialog.ActionTrigger;

/**
 * @deprecated
 *
 * This component has been deprecated, please use Dialog instead
 *
 * Before:
 *
 * `<Modal />`
 *
 * After:
 *
 * `<Dialog />`
 *
 * @deprecatedSince 5.0.0
 *
 */
export const Modal = DialogRoot;

/**
 * @deprecated
 *
 * This component has been deprecated, please use DialogBackdrop instead
 *
 * Before:
 *
 * `<ModalOverlay />`
 *
 * After:
 *
 * `<DialogBackdrop />`
 *
 * @deprecatedSince 5.0.0
 *
 */
export const ModalOverlay = DialogBackdrop;

/**
 * @deprecated
 *
 * This component has been deprecated, please use DialogCloseTrigger instead
 *
 * Before:
 *
 * `<ModalCloseButton />`
 *
 * After:
 *
 * `<DialogCloseTrigger />`
 *
 * @deprecatedSince 5.0.0
 *
 */
export const ModalCloseButton = DialogCloseTrigger;

/**
 * @deprecated
 *
 * This component has been deprecated, please use DialogContent instead
 *
 * Before:
 *
 * `<ModalContent />`
 *
 * After:
 *
 * `<DialogContent />`
 *
 * @deprecatedSince 5.0.0
 *
 */
export const ModalContent = DialogContent;

/**
 * @deprecated
 *
 * This component has been deprecated, please use DialogFooter instead
 *
 * Before:
 *
 * `<ModalFooter />`
 *
 * After:
 *
 * `<DialogFooter />`
 *
 * @deprecatedSince 5.0.0
 *
 */
export const ModalFooter = DialogFooter;

/**
 * @deprecated
 *
 * This component has been deprecated, please use DialogHeader instead
 *
 * Before:
 *
 * `<ModalHeader />`
 *
 * After:
 *
 * `<DialogHeader />`
 *
 * @deprecatedSince 5.0.0
 *
 */
export const ModalHeader = DialogHeader;

/**
 * @deprecated
 *
 * This component has been deprecated, please use DialogTrigger instead
 *
 * Before:
 *
 * `<ModalTrigger />`
 *
 * After:
 *
 * `<DialogTrigger />`
 *
 * @deprecatedSince 5.0.0
 *
 */
export const ModalTrigger = DialogTrigger;

/**
 * @deprecated
 *
 * This component has been deprecated, please use DialogDescription instead
 *
 * Before:
 *
 * `<ModalDescription />`
 *
 * After:
 *
 * `<DialogDescription />`
 *
 * @deprecatedSince 5.0.0
 *
 */
export const ModalDescription = DialogDescription;

/**
 * @deprecated
 *
 * This component has been deprecated, please use DialogBody instead
 *
 * Before:
 *
 * `<ModalBody />`
 *
 * After:
 *
 * `<DialogBody />`
 *
 * @deprecatedSince 5.0.0
 *
 */
export const ModalBody = DialogBody;

/**
 * @deprecated
 *
 * This component has been deprecated, please use DialogTitle instead
 *
 * Before:
 *
 * `<ModalTitle />`
 *
 * After:
 *
 * `<DialogTitle />`
 *
 * @deprecatedSince 5.0.0
 *
 */
export const ModalTitle = DialogTitle;

/**
 * @deprecated
 *
 * This component has been deprecated, please use Dialog instead
 *
 * Before:
 *
 * `<AlertDialog />`
 *
 * After:
 *
 * `<Dialog />`
 *
 * @deprecatedSince 5.0.0
 *
 */
export const AlertDialog = DialogRoot;

/**
 * @deprecated
 *
 * This component has been deprecated, please use DialogCloseTrigger instead
 *
 * Before:
 *
 * `<AlertDialogCloseButton />`
 *
 * After:
 *
 * `<DialogCloseTrigger />`
 *
 * @deprecatedSince 5.0.0
 *
 */
export const AlertDialogCloseButton = DialogActionTrigger;

/**
 * @deprecated
 *
 * This component has been deprecated, please use DialogContent instead
 *
 * Before:
 *
 * `<AlertDialogContent />`
 *
 * After:
 *
 * `<DialogContent />`
 *
 * @deprecatedSince 5.0.0
 *
 */
export const AlertDialogContent = DialogContent;

/**
 * @deprecated
 *
 * This component has been deprecated, please use DialogFooter instead
 *
 * Before:
 *
 * `<AlertDialogFooter />`
 *
 * After:
 *
 * `<DialogFooter />`
 *
 * @deprecatedSince 5.0.0
 *
 */
export const AlertDialogFooter = DialogFooter;

/**
 * @deprecated
 *
 * This component has been deprecated, please use DialogHeader instead
 *
 * Before:
 *
 * `<AlertDialogHeader />`
 *
 * After:
 *
 * `<DialogHeader />`
 *
 * @deprecatedSince 5.0.0
 *
 */
export const AlertDialogHeader = DialogHeader;

/**
 * @deprecated
 *
 * This component has been deprecated, please use DialogBackdrop instead
 *
 * Before:
 *
 * `<AlertDialogOverlay />`
 *
 * After:
 *
 * `<DialogBackdrop />`
 *
 * @deprecatedSince 5.0.0
 *
 */
export const AlertDialogOverlay = DialogBackdrop;
