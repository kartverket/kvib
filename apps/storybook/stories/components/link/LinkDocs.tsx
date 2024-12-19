import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const LinkDocs = () => (
  <Dokumentasjonsside
    tittel="Link"
    beskrivelse={`Vi bruker Link for å navigere til interne eller eksterne sider og filer.`}
  >
    <Tekstblokk tittel="Nyttige retningslinjer:">
      <Liste>
        <Listeelement>
          for å tydeliggjøre at en lenke fører til en ekstern nettside, markeres eksterne lenker med et ikon til høyre
          for lenketeksten.
        </Listeelement>
        <Listeelement>sørg for at lenketeksten gir en klar identifikasjon på hvor lengen fører. </Listeelement>
        <Listeelement>unngå å ha lenketekster som foreksempel “Les mer” eller “Trykk her”.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
