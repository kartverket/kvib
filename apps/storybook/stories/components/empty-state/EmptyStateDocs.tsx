import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const EmptyStateDocs = () => (
  <Dokumentasjonsside
    tittel="Empty State"
    beskrivelse={`Vi bruker Empty State for å kommuniserer tydelig hvorfor en side eller seksjon mangler innhold og gir brukeren veiledning om hva de kan gjøre videre.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>vise at det ikke er noe innhold tilgjengelig.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>erstatning for feilmeldinger ved tekniske problemer.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
