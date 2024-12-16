import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const FileUploadDocs = () => (
  <Dokumentasjonsside
    tittel="File Upload"
    beskrivelse={`Vi bruker File Upload-funksjonaliteten for å laste opp filer til et system.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>opplasting av filer som bilder og dokumenter.</Listeelement>
        <Listeelement>å gi brukeren muligheten til å velge og vise filen før opplasting.</Listeelement>
        <Listeelement>å vise status for opplastingen og eventuelle feilmeldinger.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>opplasting av sensitive filer uten ekstra sikkerhetstiltak.</Listeelement>
        <Listeelement>
          å håndtere mer komplekse prosesser som krever flere steg eller godkjenning før opplasting.
        </Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
