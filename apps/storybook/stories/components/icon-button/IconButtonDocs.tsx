import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const IconButtonDocs = () => (
  <Dokumentasjonsside
    tittel="Icon Button"
    beskrivelse={`Vi bruker Icon Button når brukeren skal utføre en handling med et ikon som visuell representasjon, vanligvis i stedet for en tekstknapp. Dette gir et kompakt og mer visuelt alternativ til tekstbaserte knapper. Sørg for at deh har beskrivende alt-tekst for skjermlesere.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>å representere vanlige handling (som lagre, dele lukke) med et gjenkjennelig ikon.</Listeelement>
        <Listeelement>når plass er begrenset og tekst ikke er nødvendig.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>når ikonet kan forveksles med andre ikoner.</Listeelement>
        <Listeelement>når mer beskrivende tekst er nødvendig for forståelse.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
