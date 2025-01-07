import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const TooltipDocs = () => (
  <Dokumentasjonsside
    tittel="Tooltip"
    beskrivelse={"Vi bruker Tooltip for å vise tilleggsinformasjon når brukeren holder markøren over et element."}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>å gi korte forklaringer eller beskrivelser av elementer.</Listeelement>
        <Listeelement>å vise hjelpetekst for ikoner eller knapper.</Listeelement>
        <Listeelement>å tilby kontekstuell informasjon uten å forstyrre brukeropplevelsen.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>å vise viktig informasjon som brukeren kan gå glipp av; vurder en Modal.</Listeelement>
        <Listeelement>
          situasjoner der innholdet må være tilgjengelig på berøringsenheter uten hover-funksjonalitet.
        </Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
