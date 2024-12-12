import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const CloseButtonDocs = () => (
  <Dokumentasjonsside tittel="Close Button" beskrivelse={`Vi bruker Close Button for å trigge lukke-funksjonaliteten.`}>
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>lukke modaler eller dialoger.</Listeelement>
        <Listeelement>avbryte en midlertidig handling.</Listeelement>
        <Listeelement>gi en enkel måte å avslutte en interaksjon.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>navigasjon mellom sider.</Listeelement>
        <Listeelement>irreversible handlinger uten advarsel.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
