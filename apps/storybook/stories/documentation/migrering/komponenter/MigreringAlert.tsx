import { Code } from "@kvib/react";
import { Liste } from "../../utils/Liste";
import { Listeelement } from "../../utils/Listeelement";
import { Tekstblokk } from "../../utils/Tekstblokk";

export const MigreringAlert = () => (
  <Tekstblokk tittel="Alert">
    <Liste>
      <Listeelement tittel="Færre varianter">
        Variantene <Code>top-accent</Code> og <Code>left-accent</Code> er fjernet. Eneste gyldige varianter er nå{" "}
        <Code>solid</Code>, <Code>subtle</Code>, <Code>outline</Code> og <Code>plain</Code>.
      </Listeelement>
      <Listeelement tittel="AlertIcon">
        Er fjernet. Standard-ikon settes ut fra status på alerten (infotegn på <Code>info</Code>, <Code>warning</Code>
        og <Code>error</Code>, checkmark for <Code>success</Code>), men kan overstyres gjennom <Code>icon</Code>-propen
        på <Code>Alert</Code>.
      </Listeelement>
    </Liste>
  </Tekstblokk>
);
