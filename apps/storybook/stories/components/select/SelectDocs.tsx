import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const SelectDocs = () => (
  <Dokumentasjonsside
    tittel="Select"
    beskrivelse="Vi bruker Select for å la brukeren velge ett alternativ fra en liste med forhåndsdefinerte valg."
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>når brukeren skal velge ett alternativ blant mange.</Listeelement>
        <Listeelement>situasjoner med begrenset plass.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>valg av flere alternativer; bruk avmerkingsbokser.</Listeelement>
        <Listeelement>få alternativer; bruk radioknapper.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
