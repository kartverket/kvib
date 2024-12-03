import { Code } from "@kvib/react";
import { Liste } from "../../utils/Liste";
import { Listeelement } from "../../utils/Listeelement";
import { Tekstblokk } from "../../utils/Tekstblokk";
import { Kodeeksempel } from "../Kodeeksempel";

export const MigreringInputGroup = () => (
  <Tekstblokk tittel="Input Group">
    <Liste>
      <Listeelement tittel="InputLeftAddon, InputRightAddon">
        Er fjernet. Bruk <Code>InputAddon</Code>-komponenten i stedet.
      </Listeelement>
      <Listeelement tittel="InputLeftElement, InputRightElement">
        Er fjernet. Bruk propsene <Code>startElement</Code> og <Code>endElement</Code> på <Code>InputGroup</Code> i
        stedet.
      </Listeelement>
    </Liste>
    <Kodeeksempel
      beskrivelse={
        <>
          Av en eller annen grunn så kan man ikke bruke <Code>InputGroup</Code> når man skal bruke{" "}
          <Code>InputAddon</Code>. Her blir man tvunget til å heller bruke <Code>Group</Code> med propen{" "}
          <Code>attached</Code>.
        </>
      }
      kildekode={`
<Group attached>
  <InputAddon>kr</InputAddon>
  <Input placeholder="Beløp" />
</Group>
      `}
    />
  </Tekstblokk>
);
