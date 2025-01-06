import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const SelectNativeDocs = () => (
  <Dokumentasjonsside
    tittel="Select (Native)"
    beskrivelse="Vi bruker Select (Native) for å la brukeren velge ett alternativ fra en liste med forhåndsdefinerte valg, ved å benytte nettleserens innebygde stil for nedtrekksmenyer."
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>konsistent utseende på tvers av plattformer.</Listeelement>
        <Listeelement>enkle valg der standard nettleseratferd er nok.</Listeelement>
        <Listeelement>rask implementering uten tilpasning.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>
          når det er behov for tilpasset styling som samsvarer med et spesifikt design; bruk Select-komponenten som
          tilbyr tilpasningsmuligheter for design og funksjonalitet.
        </Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
