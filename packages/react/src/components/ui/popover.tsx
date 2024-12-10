import { Popover as ChakraPopover, Portal } from "@chakra-ui/react";
import * as React from "react";
import { CloseButton } from "./close-button";

interface PopoverContentProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color" | "content" | "translate">,
    ChakraPopover.ContentProps {
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

export const PopoverCloseTrigger = React.forwardRef<HTMLButtonElement, ChakraPopover.CloseTriggerProps>(
  function PopoverCloseTrigger(props, ref) {
    return (
      <ChakraPopover.CloseTrigger position="absolute" top="1" insetEnd="1" {...props} asChild ref={ref}>
        <CloseButton size="sm" />
      </ChakraPopover.CloseTrigger>
    );
  },
);

export interface PopoverTitleProps
  extends Omit<React.HTMLAttributes<HTMLDivElement>, "color" | "content" | "translate">,
    ChakraPopover.TitleProps {
  fontWeight?: string | number;
  fontSize?: string | number;
  lineHeight?: string | number;
  letterSpacing?: string | number;
  color?: string;
  fontFamily?: string;
  textAlign?: string;
  textTransform?: string;
  fontStyle?: string;
  textDecoration?: string;
  whiteSpace?: string;
  wordBreak?: string;
  overflowWrap?: string;
}

export const PopoverTitle = React.forwardRef<HTMLDivElement, PopoverTitleProps>(function PopoverTitle(props, ref) {
  return <ChakraPopover.Title ref={ref} {...props} />;
});

export const PopoverDescription = ChakraPopover.Description;
export const PopoverFooter = ChakraPopover.Footer;
export const PopoverHeader = ChakraPopover.Header;
export const PopoverRoot = ChakraPopover.Root;
export const PopoverBody = ChakraPopover.Body;

interface PopoverTriggerProps
  extends Omit<React.HTMLAttributes<HTMLButtonElement>, "color" | "content" | "translate">,
    ChakraPopover.TriggerProps {
  asChild?: boolean;
}

export const PopoverTrigger = React.forwardRef<HTMLButtonElement, PopoverTriggerProps>(
  function PopoverTrigger(props, ref) {
    return <ChakraPopover.Trigger ref={ref} {...props} />;
  },
);
