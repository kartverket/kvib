import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const DataListDocs = () => (
  <Dokumentasjonsside
    tittel="Data List"
    beskrivelse={`Vi bruker Data List til å vise en liste med lignende dataelementer.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>å presentere informasjonen på en strukturert og lettfattelig måte.</Listeelement>
        <Listeelement>når det er nødvendig med rask navigering og oversikt over relaterte data.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>komplekse datavisualiseringer.</Listeelement>
        <Listeelement>for scenarioer der dataene oppdateres kontinuerlig.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
