import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const DatepickerDocs = () => (
  <Dokumentasjonsside tittel="Datepicker" beskrivelse={`Vi bruker Datepicker for å velge datoer.`}>
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>velge en enkelt dato.</Listeelement>
        <Listeelement>sikre korrekt datoformat og validering.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>valg av datoer som strekker seg over lengre tid.</Listeelement>
        <Listeelement>valg av datoer langt tilbake eller langt frem i tid.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
