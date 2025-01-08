import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const FloatDocs = () => (
  <Dokumentasjonsside
    tittel="Float"
    beskrivelse={"Vi bruker Float til å forankre elementer til kanten på en container."}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>nøyaktig posisjonering innenfor layout.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>dynamisk plassering av elementer.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
