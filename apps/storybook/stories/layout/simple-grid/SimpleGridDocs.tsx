import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const SimpleGridDocs = () => (
  <Dokumentasjonsside
    tittel="SimpleGrid"
    beskrivelse={"SimpleGrid tilbyr et enkelt og brukervennlig grensesnitt for å lage responsive grid-layouts."}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>oppbygging av enkel sidelayout.</Listeelement>
        <Listeelement>gruppere innhold i rader og kolonner.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>komplekse eller frie layoutstrukturer (bruk istedenfor Grid).</Listeelement>
        <Listeelement>uavhengig plassering av elementer uten grid.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
