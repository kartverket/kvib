import { Code, Link } from "@kvib/react";
import { Liste } from "../../utils/Liste";
import { Listeelement } from "../../utils/Listeelement";
import { Tekstblokk } from "../../utils/Tekstblokk";

export const MigreringAlert = () => (
  <Tekstblokk tittel="Alert">
    <Liste>
      <Listeelement tittel="Færre varianter">
        Variantene <Code>top-accent</Code> og <Code>left-accent</Code> er fjernet. Eneste gyldige varianter er nå{" "}
        <Code>solid</Code>, <Code>subtle</Code>, <Code>outline</Code> og <Code>plain</Code>. Eksempler på hvordan de
        forskjellige variantene ser ut finner du foreløpig i dokumentasjonen til Chakra her:{" "}
        <Link href="https://www.chakra-ui.com/docs/components/alert#variants" target="_blank">
          https://www.chakra-ui.com/docs/components/alert#variants
        </Link>
        , hvor standarden er satt til <Code>subtle</Code>. .
      </Listeelement>
      <Listeelement tittel="AlertIcon">
        Er fjernet. Standard-ikon settes ut fra status på alerten (infotegn på <Code>info</Code>, <Code>warning</Code>
        og <Code>error</Code>, checkmark for <Code>success</Code>), men kan overstyres gjennom <Code>icon</Code>-propen
        på <Code>Alert</Code>.
      </Listeelement>
    </Liste>
  </Tekstblokk>
);
