import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const BleedDocs = () => (
  <Dokumentasjonsside
    tittel="Bleed"
    beskrivelse={
      "Vi bruker Bleed for å la et element bryte ut av grensene til sin containter ved å bruke en negativ margin."
    }
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>overstyre padding fra parant-element.</Listeelement>
        <Listeelement>å tillate at innhold strekker seg utenfor sitt vanlige område.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>større layout-strukturerer.</Listeelement>
        <Listeelement>bruk i header eller footer.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
