import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const ProgressDocs = () => (
  <Dokumentasjonsside
    tittel="Progress"
    beskrivelse={`Vi bruker Progress for å visualisere fremdriften i en pågående prosess, som lasting eller oppgaveløsning.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>vise fremdrift i lineære prosesser, som filopplasting eller skjemautfylling.</Listeelement>
        <Listeelement>indikere prosentandel av en oppgave som er fullført.</Listeelement>
        <Listeelement>gi brukeren oversikt over hvor mye som gjenstår av en prosess.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>prosesser med ukjent eller udefinert varighet.</Listeelement>
        <Listeelement>når en enkel Progress Circle er tilstrekkelig for å indikere aktivitet.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
