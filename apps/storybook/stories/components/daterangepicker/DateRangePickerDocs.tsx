import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const DateRangePickerDocs = () => (
  <Dokumentasjonsside
    tittel="Date Range Picker"
    beskrivelse={"Vi bruker Date Range Picker (periodevelger) for å la brukerne velge en tidsperiode mellom to datoer."}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>
          når du trenger å spesifisere en tidsperiode. Eksempelvis kan den brukes til å filtrere historiske kartdata for
          å vise arealendringer over tid, eller å hente frem informasjon for et spesifikt tidsrom.
        </Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>omfattende eller komplekse innhold som krever langvarig interaksjon.</Listeelement>
        <Listeelement>når du trenger én spesifikk dato (bruk en enkel Date Picker istedet).</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
