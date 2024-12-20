import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const RadioDocs = () => (
  <Dokumentasjonsside
    tittel="Radio"
    beskrivelse={`Vi bruker Radio-komponenten for å la brukeren velge ett alternativ fra en gruppe med forhåndsdefinerte valg.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>når brukeren skal velge ett alternativ blant flere.</Listeelement>
        <Listeelement>situasjoner der alle valg må være synlige samtidig.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>når brukeren kan velge flere alternativer samtidig; bruk da avmerkingsbokser.</Listeelement>
        <Listeelement>for lange lister med alternativer; vurder da en nedtrekksmeny.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
