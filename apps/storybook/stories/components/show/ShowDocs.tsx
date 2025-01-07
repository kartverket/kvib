import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const ShowDocs = () => (
  <Dokumentasjonsside tittel="Show" beskrivelse="Vi bruker Show for å vise eller skjule innhold basert på en tilstand.">
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>dynamisk visning basert på brukerinteraksjon.</Listeelement>
        <Listeelement>skjule innhold inntil en betingelse er oppfylt.</Listeelement>
        <Listeelement>vise innhold kontekstuelt for bedre opplevelse.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>komplekse visningslogikker; bruk robuste løsninger.</Listeelement>
        <Listeelement>når SEO er kritisk; skjult innhold kan påvirke negativt.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
