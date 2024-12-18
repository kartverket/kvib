import { ButtonProps } from "@/button";
import { BoxProps } from "@/layout";
import { HoverCard, Portal } from "@chakra-ui/react";
import * as React from "react";
import { Merge } from "../utils";

interface HoverCardContentProps extends Merge<BoxProps, HoverCard.ContentProps> {
  portalled?: boolean;
  portalRef?: React.RefObject<HTMLElement>;
}

export const HoverCardContent = React.forwardRef<HTMLDivElement, HoverCardContentProps>(
  function HoverCardContent(props, ref) {
    const { portalled = true, portalRef, ...rest } = props;

    return (
      <Portal disabled={!portalled} container={portalRef}>
        <HoverCard.Positioner>
          <HoverCard.Content ref={ref} {...rest} />
        </HoverCard.Positioner>
      </Portal>
    );
  },
);

export const HoverCardArrow = React.forwardRef<HTMLDivElement, HoverCard.ArrowProps>(
  function HoverCardArrow(props, ref) {
    return (
      <HoverCard.Arrow ref={ref} {...props}>
        <HoverCard.ArrowTip />
      </HoverCard.Arrow>
    );
  },
);

export const HoverCardRoot = HoverCard.Root;

interface HoverCardTriggerProps extends Merge<ButtonProps, HoverCard.TriggerProps> {}
export const HoverCardTrigger = React.forwardRef<HTMLButtonElement, HoverCardTriggerProps>(
  function HoverCardTrigger(props, ref) {
    return <HoverCard.Trigger ref={ref} {...props} />;
  },
);
