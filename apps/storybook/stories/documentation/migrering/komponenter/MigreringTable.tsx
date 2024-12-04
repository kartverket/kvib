import { Code } from "@kvib/react";
import { Liste } from "../../utils/Liste";
import { Listeelement } from "../../utils/Listeelement";
import { Tekstblokk } from "../../utils/Tekstblokk";

export const MigreringTable = () => (
  <Tekstblokk tittel="Table">
    <Liste>
      <Listeelement tittel="variant">
        <Code>"striped"</Code>-varianten er byttet byttet ut med den propen <Code>striped</Code> som settes på{" "}
        <Code>Table</Code>, slik som dette: <Code>{`<Table striped>`}</Code>.
      </Listeelement>
      <Listeelement tittel="Thead">
        Er omdøpt til <Code>TableHeader</Code>.
      </Listeelement>
      <Listeelement tittel="Tbody">
        Er omdøpt til <Code>TableBody</Code>.
      </Listeelement>
      <Listeelement tittel="Tr">
        Er omdøpt til <Code>TableRow</Code>.
      </Listeelement>
      <Listeelement tittel="Th">
        Er omdøpt til <Code>TableColumnHeader</Code>.
      </Listeelement>
      <Listeelement tittel="Td">
        Er omdøpt til <Code>TableCell</Code>.
      </Listeelement>
      <Listeelement tittel="Tfoot">
        Er omdøpt til <Code>TableFooter</Code>.
      </Listeelement>
    </Liste>
  </Tekstblokk>
);
