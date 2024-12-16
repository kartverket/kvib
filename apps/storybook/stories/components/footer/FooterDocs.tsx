import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const FooterDocs = () => (
  <Dokumentasjonsside
    tittel="Footer"
    beskrivelse={`En footer er en seksjon som vises nederst på en nettside og sikrer at brukerne kan finne nødvendig informasjon på et kjent sted. Komponten er med å tydeliggjøre Kartverket som avsender.`}
  >
    <Tekstblokk tittel="Nyttige retningslinjer">
      <Liste>
        <Listeelement>unngå overbelastning av innhold og inkluder bare nødvendige og relevante lenker.</Listeelement>
        <Listeelement>
          innholdet bør tilpasses skjermstørrelsen, og eventuelle navigasjonslenger skal være lett tilgjengelig.
        </Listeelement>
        <Listeelement>Husk at footeren må inneholde lenke til personvern og tilgjengelighet.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
