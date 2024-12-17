import { ButtonProps } from "@/button";
import { BoxProps } from "@/layout";
import { Accordion, HStack } from "@chakra-ui/react";
import * as React from "react";
import { LuChevronDown } from "react-icons/lu";
import { Merge } from "../utils";

interface AccordionItemTriggerProps extends Merge<ButtonProps, Accordion.ItemTriggerProps> {
  indicatorPlacement?: "start" | "end";
}

export const AccordionItemTrigger = React.forwardRef<HTMLButtonElement, AccordionItemTriggerProps>(
  function AccordionItemTrigger(props, ref) {
    const { children, indicatorPlacement = "end", ...rest } = props;
    return (
      <Accordion.ItemTrigger {...rest} ref={ref}>
        {indicatorPlacement === "start" && (
          <Accordion.ItemIndicator rotate={{ base: "-90deg", _open: "0deg" }}>
            <LuChevronDown />
          </Accordion.ItemIndicator>
        )}
        <HStack gap="4" flex="1" textAlign="start" width="full">
          {children}
        </HStack>
        {indicatorPlacement === "end" && (
          <Accordion.ItemIndicator>
            <LuChevronDown />
          </Accordion.ItemIndicator>
        )}
      </Accordion.ItemTrigger>
    );
  },
);

interface AccordionItemContentProps extends Merge<BoxProps, Accordion.ItemContentProps> {}

export const AccordionItemContent = React.forwardRef<HTMLDivElement, AccordionItemContentProps>(
  function AccordionItemContent(props, ref) {
    return (
      <Accordion.ItemContent>
        <Accordion.ItemBody {...props} ref={ref} />
      </Accordion.ItemContent>
    );
  },
);

interface AccordionRootProps extends Merge<BoxProps, Accordion.RootProps> {
  collapsible?: boolean;
}

export const AccordionRoot = React.forwardRef<HTMLDivElement, AccordionRootProps>(function AccordionRoot(props, ref) {
  return <Accordion.Root {...props} ref={ref} />;
});

interface AccordionItemProps extends Merge<BoxProps, Accordion.ItemProps> {
  value: string;
}

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(function AccordionItem(props, ref) {
  return (
    <Accordion.Item {...props} ref={ref}>
      {props.children}
    </Accordion.Item>
  );
});
