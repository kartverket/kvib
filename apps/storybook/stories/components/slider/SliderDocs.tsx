import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const SliderDocs = () => (
  <Dokumentasjonsside
    tittel="Slider"
    beskrivelse="Vi bruker Slider for å velge en verdi eller et spenn ved å dra en markør langs en linje."
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>når brukeren skal velge en verdi innenfor et kontinuerlig spenn.</Listeelement>
        <Listeelement>justeringer med visuell tilbakemelding.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>når finmotorikk kan være en utfordring; tilby alternativer inntastingsmetoder.</Listeelement>
        <Listeelement>diskrete valg; vurder andre alternativer som for eksempel radio.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
