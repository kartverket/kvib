import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const GridDocs = () => (
  <Dokumentasjonsside
    tittel="Grid"
    beskrivelse={"Vi bruker Grid for å lage layouter der innhold organiseres i rader og kolonner."}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>oppbygging av komplekse sidelayouts.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>organisering av elementer.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
