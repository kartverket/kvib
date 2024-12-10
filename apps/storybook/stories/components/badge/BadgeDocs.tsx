import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const BadgeDocs = () => (
  <Dokumentasjonsside
    tittel="Badge"
    beskrivelse={`Vi bruker Badge for å fremheve status og gi brukeren rask visuell informasjon. Bruk korte, beskrivende ord og gjenkjennelige farger (f.eks. rød for feil, grønn for ferdig). Plasser badge nær relevant informasjon for tydelig sammenheng.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>vise statusindikasjoner som “Ny”, “Under behandling”, “Ferdig”, osv.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>lange tekster som gjør badge vanskelig å lese.</Listeelement>
        <Listeelement>informasjon som ikke er viktig å vise umiddelbart.</Listeelement>
        <Listeelement>bruk av mange badges på samme side, da det kan skape forvirring.</Listeelement>
        <Listeelement>kategorisering av elementer (bruk tag-komponenten).</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
