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
        Omdøpt til <Code>TableHeader</Code>.
      </Listeelement>
      <Listeelement tittel="Tbody">
        Omdøpt til <Code>TableBody</Code>.
      </Listeelement>
      <Listeelement tittel="Tr">
        Omdøpt til <Code>TableRow</Code>.
      </Listeelement>
      <Listeelement tittel="Th">
        Omdøpt til <Code>TableColumnHeader</Code>.
      </Listeelement>
      <Listeelement tittel="Td">
        Omdøpt til <Code>TableCell</Code>.
      </Listeelement>
      <Listeelement tittel="Tfoot">
        Omdøpt til <Code>TableFooter</Code>.
      </Listeelement>
    </Liste>
  </Tekstblokk>
);
