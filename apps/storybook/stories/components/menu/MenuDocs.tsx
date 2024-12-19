import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const MenuDocs = () => (
  <Dokumentasjonsside
    tittel="Menu"
    beskrivelse={`Vi bruker Menu når vi ønsker å samle relaterte handlinger i en nedtrekksmeny. Den er nyttig for å skjule sekundære handlinger som ikke trenger å være synlige hele tiden.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>gruppere valg og strukturere innhold</Listeelement>
        <Listeelement>filtrere innhold</Listeelement>
        <Listeelement>forenkle navigasjon</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>primærhandlinger</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
