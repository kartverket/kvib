import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const RatingDocs = () => (
  <Dokumentasjonsside
    tittel="Rating"
    beskrivelse={`Vi bruker Rating-komponenten for å la brukeren vurdere eller rangere innhold, produkter eller tjenester ved hjelp av et sett med stjerner eller ikoner.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>innhenting av tilbakemeldinger på produkter eller tjenester.</Listeelement>
        <Listeelement>situasjoner der en rask, visuell vurdering er hensiktsmessig.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>
          innsamling av detaljerte tilbakemeldinger; bruk da tekstfelt, spørreskjemaer eller andre relevante
          innsiktsmetoder.
        </Listeelement>
        <Listeelement>når en vurdering ikke kan uttrykkes numerisk eller med ikoner.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
