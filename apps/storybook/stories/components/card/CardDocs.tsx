import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const CardDocs = () => (
  <Dokumentasjonsside
    tittel="Card"
    beskrivelse={`Vi bruker Card for å fremheve relatert informasjon og gi mulighet for handling, som å klikke på en lenke for mer informasjon. Bruk bilder, ikoner og tilleggstekst for å utdype innholdet.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>gruppere innhold og handlinger som hører sammen.</Listeelement>
        <Listeelement>kan brukes som navigasjonskort for å lede brukerne videre til en annen side.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>å blande for mange forskjellige typer innhold i et enkelt kort.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
