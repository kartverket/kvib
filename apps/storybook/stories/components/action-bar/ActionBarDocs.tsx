import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const ActionBarDocs = () => (
  <Dokumentasjonsside
    tittel="Action Bar"
    beskrivelse={`Vi bruker Action Bar for å vise et sett med handlinger nederst på skjermen, slik at brukeren enkelt kan få tilgang til viktige funksjoner.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>gi brukeren rask tilgang til primære handlinger på en side eller i en applikasjon.</Listeelement>
        <Listeelement>vise handlinger som er relevante for konteksten eller brukerens nåværende oppgave.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>erstatte viktig navigasjon som hovedmenyer eller sidemenyer.</Listeelement>
        <Listeelement>
          være en fast del av grensesnittet hvis handlingene ikke er relevante for alle sider eller visninger.
        </Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
