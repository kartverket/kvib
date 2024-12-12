import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const DialogDocs = () => (
  <Dokumentasjonsside
    tittel="Dialog"
    beskrivelse={`Vi bruker Dialog til å vise viktig informasjon i et midlertidig vindu. Dialogen fanger brukerens oppmerksomhet før videre interaksjon uten å forstyrre arbeidsflyten.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>å sikre at brukeren får med seg viktig informasjon eller advarsler.</Listeelement>
        <Listeelement>be om handlinger som foreksempel slette eller lagre endringer.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>informasjon som brukeren må ha tilgang til kontinuerlig.</Listeelement>
        <Listeelement>vise store mengder tekst eller komplekse interaksjoner.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
