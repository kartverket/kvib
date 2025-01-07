import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const TimepickerDocs = () => (
  <Dokumentasjonsside
    tittel="Timepicker"
    beskrivelse={"Vi bruker Timepicker for å la brukeren velge et spesifikt tidspunkt på en enkel og strukturert måte."}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>valg av tid for hendelser, som møter eller påminnelser.</Listeelement>
        <Listeelement>situasjoner der brukeren trenger nøyaktig kontroll over tidspunkt.</Listeelement>
        <Listeelement>skjemaer som krever spesifikk tidsangivelse.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>valg av dato; bruk en Datepicker-komponent.</Listeelement>
        <Listeelement>valg av et tidsintervall; bruk en DateRangePicker-komponent.</Listeelement>
        <Listeelement>situasjoner der presisjon ikke er viktig; bruk en enkel tekstboks.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
