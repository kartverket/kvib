import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const FieldDocs = () => (
  <Dokumentasjonsside
    tittel="Field"
    beskrivelse={`Vi bruker Field til å legge til etiketter, hjelpetekst og feilmeldinger til skjemaelementer.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>å merke skjemaelementer med beskrivende tekst.</Listeelement>
        <Listeelement>å gi brukeren hjelp eller instruksjoner knyttet til et skjema.</Listeelement>
        <Listeelement>å vise feilmeldinger.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>å erstatte mer detaljerte hjelpesider eller dokumentasjon.</Listeelement>
        <Listeelement>å vise informasjon utenfor skjemaelementene.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
