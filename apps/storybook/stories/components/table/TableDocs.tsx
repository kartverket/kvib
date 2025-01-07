import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const TableDocs = () => (
  <Dokumentasjonsside
    tittel="Table"
    beskrivelse={
      "Vi bruker Table for å organisere og vise data i et tabellformat, noe som gir en strukturert og lettfattelig presentasjon av informasjon."
    }
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>presentasjon av data som naturlig passer i rader og kolonner.</Listeelement>
        <Listeelement>sammenligning av relaterte dataelementer.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>
          komplekse datasett som krever interaktiv filtrering eller sortering; vurder andre datavisualiseringsverktøy.
        </Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
