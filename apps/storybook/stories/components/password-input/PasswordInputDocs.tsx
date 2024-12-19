import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const PasswordInputDocs = () => (
  <Dokumentasjonsside
    tittel="Password Input"
    beskrivelse={`Vi bruker Password Input for å la brukeren skrive inn passord på en sikker måte.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>Innsamling av passord i skjemaer.</Listeelement>
        <Listeelement>Felter som krever skjult inntasting av tekst.</Listeelement>
        <Listeelement>Sikker autentisering.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>Felter som ikke krever skjult tekst.</Listeelement>
        <Listeelement>Informasjon som ikke er sensitiv.</Listeelement>
        <Listeelement>Når brukeren skal se inntastingen hele tiden.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
