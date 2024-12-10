import { Accordion, HStack } from "@chakra-ui/react";
import * as React from "react";
import { HTMLAttributes } from "react";
import { LuChevronDown } from "react-icons/lu";

interface AccordionItemTriggerProps
  extends Omit<HTMLAttributes<HTMLButtonElement>, "color" | "content" | "translate">,
    Accordion.ItemTriggerProps {
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

interface AccordionItemContentProps extends Accordion.ItemContentProps {}

export const AccordionItemContent = React.forwardRef<HTMLDivElement, AccordionItemContentProps>(
  function AccordionItemContent(props, ref) {
    return (
      <Accordion.ItemContent>
        <Accordion.ItemBody {...props} ref={ref} />
      </Accordion.ItemContent>
    );
  },
);

export const AccordionRoot = Accordion.Root;

interface AccordionItemProps
  extends Omit<HTMLAttributes<HTMLDivElement>, "color" | "content" | "translate">,
    Accordion.ItemProps {}

export const AccordionItem = React.forwardRef<HTMLDivElement, AccordionItemProps>(function AccordionItem(props, ref) {
  return (
    <Accordion.Item {...props} ref={ref}>
      {props.children}
    </Accordion.Item>
  );
});
