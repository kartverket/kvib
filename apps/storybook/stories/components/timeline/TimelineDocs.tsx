import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const TimelineDocs = () => (
  <Dokumentasjonsside
    tittel="Timeline"
    beskrivelse={"Vi bruker Timeline for å vise en liste over hendelser i kronologisk rekkefølge."}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>presentasjon av historiske data eller milepæler.</Listeelement>
        <Listeelement>visualisering av prosjektfremdrift eller tidslinjer.</Listeelement>
        <Listeelement>visning av sekvensielle hendelser eller prosesser.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>
          situasjoner der interaktivitet eller filtrering er nødvendig; vurder da mer avanserte komponenter.
        </Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
