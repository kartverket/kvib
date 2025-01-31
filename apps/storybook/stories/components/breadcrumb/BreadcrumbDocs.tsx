import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const BreadcrumbDocs = () => (
  <Dokumentasjonsside
    tittel="Breadcrumb"
    beskrivelse={`Vi bruker brødsmulestier (breadcrumb) som et navigasjonselement for å vise brukerens plassering på et overordnet nivå, for eksempel på et nettsted. De plasseres høyt på siden, gjerne rett under hovedmenyen og -navigasjonen, men over sidetittelen.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>når det er tre eller flere nivåer i en hierarkisk struktur.</Listeelement>
        <Listeelement>å gå tilbake til et tidligere trinn eller et overordnet nivå i løsningen.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>lineær navigasjon, som for eksempel trinnene i en arbeidsflyt eller et skjema.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
