import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const PortalDocs = () => (
  <Dokumentasjonsside
    tittel="Portal"
    beskrivelse={`Vi Portal for å rendre et element utenfor DOM-hierarkiet. Dette er nyttig for å vise innhold som ikke skal påvirkes av foreldrekomponenter.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>
          når innholdet skal vises på et annet sted enn der det er definert, som en modal eller en tooltip.
        </Listeelement>
        <Listeelement>for å unngå at foreldrekomponenter påvirker stilen til innholdet.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>å bruke for enkle elementer som ikke trenger å være utenfor DOM-hierarkiet.</Listeelement>
        <Listeelement>å bruke for innhold som skal påvirkes av foreldrekomponenter.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
