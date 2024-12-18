import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const HighlightDocs = () => (
  <Dokumentasjonsside tittel="Highlight" beskrivelse={`Vi bruker Highlight til å fremheve ord i en tekst.`}>
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>å trekke oppmerksomhet til viktige ord eller setninger.</Listeelement>
        <Listeelement>å forbedre lesbarhet og finne relevant informasjon raskt.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>å fremheve for mye tekst, da det kan gjøre innholdet tungt og vanskelig å lese.</Listeelement>
        <Listeelement>fremheve uten klar intensjon, da det kan forvirre brukeren om hva som er viktig.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
