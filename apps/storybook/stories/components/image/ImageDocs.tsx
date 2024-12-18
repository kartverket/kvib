import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const ImageDocs = () => (
  <Dokumentasjonsside
    tittel="Image"
    beskrivelse={`Vi bruker Image til å vise frem bilder. Sørg for beskrivende alt-tekst for skjermlesere.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>når bildene er viktig del av innholdet (f.eks profilbilder og produktbilder).</Listeelement>
        <Listeelement>når du trenger å vise bilder med variabel størrelse eller format.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>når bilder ikke oppfyller tilgjengelighetskrav, som tilstrekkelig kontrast.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
