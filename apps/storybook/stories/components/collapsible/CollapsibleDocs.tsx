import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const CollapsibleDocs = () => (
  <Dokumentasjonsside
    tittel="Collapsible"
    beskrivelse={`Vi bruker Collapsible for å utvide og skjule ekstra innhold når det er nødvendig. `}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>fjerne distrasksjoner for å holde grensesnittet ryddig og fokuseret.</Listeelement>
        <Listeelement>for instruksjoner eller veiledning.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>viktige informasjonselementer som alltid bør være synlig.</Listeelement>
        <Listeelement>
          når det er mange alternativer eller mye informasjon, kan det være vanskelig for brukeren å navigere effektivt.
          En annen navigasjonsløsning kan være mer hensiktsmessig.
        </Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
