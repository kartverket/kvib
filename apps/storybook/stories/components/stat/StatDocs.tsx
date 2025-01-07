import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const StatDocs = () => (
  <Dokumentasjonsside
    tittel="Stat"
    beskrivelse="Vi bruker Stat for å vise statistiske data eller nøkkeltall på en tydelig og konsis måte."
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>presentasjon av viktige måledata, som for eksempel antall brukere eller tall.</Listeelement>
        <Listeelement>visning av prosentvise endringer eller trender.</Listeelement>
        <Listeelement>fremheving av nøkkelinformasjon i dashbord eller rapporter.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>detaljerte dataanalyser; bruk da tabeller eller grafer.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
