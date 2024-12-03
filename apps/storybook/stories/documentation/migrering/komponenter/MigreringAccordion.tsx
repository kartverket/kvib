import { Code } from "@kvib/react";
import { Liste } from "../../utils/Liste";
import { Listeelement } from "../../utils/Listeelement";
import { Tekstblokk } from "../../utils/Tekstblokk";

export const MigreringAccordion = () => (
  <Tekstblokk tittel="Accordion">
    <Liste>
      <Listeelement tittel="allowMultiple">
        Omdøpt til <Code>multiple</Code>.
      </Listeelement>
      <Listeelement tittel="allowToggle">
        Omdøpt til <Code>collapsible</Code>.
      </Listeelement>
      <Listeelement tittel="AccordionButton">
        Omdøpt til <Code>AccordionItemTrigger</Code>.
      </Listeelement>
      <Listeelement tittel="AccordionPanel">
        Omdøpt til <Code>AccordionItemContent</Code>.
      </Listeelement>
      <Listeelement tittel="AccordionIcon">
        Omdøpt til <Code>AccordionItemIndicator</Code>.
      </Listeelement>
    </Liste>
  </Tekstblokk>
);
