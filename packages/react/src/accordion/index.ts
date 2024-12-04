export {
  AccordionRoot as Accordion,
  AccordionItem,
  AccordionItemContent,
  AccordionItemTrigger,
  AccordionRoot,
} from "@/components/ui/accordion";

export {
  AccordionItemIndicator as AccordionIcon,
  AccordionItemBody,
  AccordionItemIndicator,
  useAccordion,
  useAccordionContext,
  useAccordionItemContext,
  useAccordionStyles,
} from "@chakra-ui/react";

export { Accordion as KvibAccordion } from "@chakra-ui/react";

export type {
  AccordionItemBodyProps,
  AccordionItemContentProps,
  AccordionItemIndicatorProps,
  AccordionItemProps,
  AccordionItemTriggerProps,
  AccordionRootProps as AccordionProps,
  AccordionRootProps,
  AccordionRootProviderProps,
} from "@chakra-ui/react";

/** @deprecated Bruk AccordionItemTrigger istedenfor */
export { AccordionItemTrigger as AccordionButton } from "@/components/ui/accordion";

/** @deprecated Bruk AccordionItemContent istedenfor */
export { AccordionItemContent as AccordionPanel } from "@/components/ui/accordion";
