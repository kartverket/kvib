import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const ProgressCircleDocs = () => (
  <Dokumentasjonsside
    tittel="Progress Circle"
    beskrivelse={`Vi bruker Progress Circle for å vise fremdriften i en oppgave ved hjelp av en sirkulær visualisering.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>vvisualisering av fremdrift i prosesser med kjent varighet.</Listeelement>
        <Listeelement>indikasjon av prosent fullført i en kompakt, sirkulær visning.</Listeelement>
        <Listeelement>bruk i dashboards eller steder med begrenset plass.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>prosesser med ukjent eller udefinert varighet.</Listeelement>
        <Listeelement>situasjoner der en lineær fremdriftsindikator er mer intuitiv.</Listeelement>
        <Listeelement>når detaljert tekstlig fremdriftsinformasjon er nødvendig.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
