import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const StackDocs = () => (
  <Dokumentasjonsside
    tittel="Stack"
    beskrivelse={"Vi bruker Stack til gruppere elementer horisontant og vertikalt ved lik avstand."}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>
          organisering av innhold i vertikal eller horisontal rekkefølge for å skape en enkel og oversiktelig struktur,
          som foreksempel gruppering av skjema-elementer eller layout av knapper som trenger en enhetlig plassering.
        </Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>oppbygging komplekse grid-strukturer eller større side-layout.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
