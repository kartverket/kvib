export {
  PopoverRoot as Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseTrigger,
  PopoverContent,
  PopoverDescription,
  PopoverFooter,
  PopoverHeader,
  PopoverRoot,
  PopoverTitle,
  PopoverTrigger,
} from "@/components/ui/popover";

export type { PopoverTitleProps } from "@/components/ui/popover";
export { Popover as KvibPopover } from "@chakra-ui/react";

export type {
  PopoverArrowProps,
  PopoverBodyProps,
  PopoverCloseTriggerProps,
  PopoverContentProps,
  PopoverFooterProps,
  PopoverHeaderProps,
  PopoverRootProps as PopoverProps,
  PopoverRootProps,
  PopoverTriggerProps,
  usePopover,
  usePopoverContext,
  usePopoverStyles,
} from "@chakra-ui/react";

/** @deprecated Bruk PopoverTrigger istedenfor */
export { PopoverTrigger as PopoverButton } from "@/components/ui/popover";

/** @deprecated Bruk PopoverCloseTrigger istedenfor */
export { PopoverCloseTrigger as PopoverCloseButton } from "@/components/ui/popover";
