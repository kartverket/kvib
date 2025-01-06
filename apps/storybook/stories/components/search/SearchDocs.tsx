import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const SearchDocs = () => (
  <Dokumentasjonsside
    tittel="Search"
    beskrivelse="Vi bruker Search for å la brukeren søke etter informasjon i applikasjonen eller på et nettsted."
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>når brukeren trenger å finne spesifikt innhold raskt.</Listeelement>
        <Listeelement>store datamengder der manuell navigasjon er upraktisk.</Listeelement>
        <Listeelement>filtrering av resultater basert på brukerens inndata.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>når enkle navigasjonslenker kan oppfylle brukerens behov.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
