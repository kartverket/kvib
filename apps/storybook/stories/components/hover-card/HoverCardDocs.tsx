import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const HoverCardDocs = () => (
  <Dokumentasjonsside
    tittel="Hover Card"
    beskrivelse={`Vi bruker Hover Card for å vise innhold når man hovrer over et element.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>vise ekstra informasjon, som tips og hjelpetekster.</Listeelement>
        <Listeelement>vise bilder/detaljer som er nyttig ved interaksjon.</Listeelement>
        <Listeelement>interaktiv opplevelsen uten overbelasting av støy.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>vise viktig informasjon som brukeren må se med en gang.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
