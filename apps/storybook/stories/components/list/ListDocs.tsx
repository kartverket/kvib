import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const ListDocs = () => (
  <Dokumentasjonsside
    tittel="List"
    beskrivelse={`Vi bruker lister for å presentere relatert informasjon på en oversiktelig måte for brukerne. Bruk gjerne en overskrift for å gi en rask oversikt over innholdet.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>å presentere informasjon på en organisert og lettlest måte.</Listeelement>
        <Listeelement>når det er behov for å strukturere data i punkter eller nummererte lister.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>å sammenligne flere grupper av informasjon (bruk tabell i stedet).</Listeelement>
        <Listeelement>vise brukerne lengre innhold eller tekst (bruk avsnitt i stedet).</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
