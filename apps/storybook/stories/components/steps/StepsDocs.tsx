import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const StepsDocs = () => (
  <Dokumentasjonsside
    tittel="Steps"
    beskrivelse={"Vi bruker Steps for å indikere fremdrift gjennom en flertrinnsprosess."}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>vise trinnvis fremgang i en registreringsprosess.</Listeelement>
        <Listeelement>guide brukeren gjennom komplekse skjemaer eller arbeidsflyter.</Listeelement>
        <Listeelement>
          forbedre brukeropplevelsen ved å tydeliggjøre hvor i prosessen brukeren befinner seg.
        </Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>enkle oppgaver som ikke krever flere trinn.</Listeelement>
        <Listeelement>situasjoner der alle alternativer bør vises samtidig.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
