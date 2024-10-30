import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Feedback } from "../../documentation/utils/Feedback";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const Tokens = () => (
  <Dokumentasjonsside
    tittel="Tokens"
    beskrivelse="Design tokens er fundamentale byggeklosser i et designsystem, som definerer stil og designprinsipper vår designsystem. De fungerer som en felles kilde mellom design og utvikling, og sikrer at både designere og utviklere følger de samme retningslinjene."
  >
    <Tekstblokk tittel="Fordeler med design tokens">
      Tokens gjør det lettere å implementere endringer på en konsistent måte. For eksempel, når vi ønsker å oppdatere en
      farge eller justere typografi, kan vi enkelt gjøre dette i tokenene, og endringene vil automatisk reflekteres i
      alle komponentene som bruker dem.
      <br />
      <br />
      Vi har også etablert variabler som er tema-baserte. Dette betyr at vi tar utgangspunkt i hovedfargene til
      Kartverket, som er grønn og blå, for å forenkle tilpasningen av stiler i skissene dine.
    </Tekstblokk>

    <Tekstblokk tittel="Eksempler på design tokens">
      <Liste>
        <Listeelement tittel="Farger">Primær- og sekundærfarger.</Listeelement>
        <Listeelement tittel="Typografi">Skrifttyper, størrelser og linjehøyder.</Listeelement>
        <Listeelement tittel="Avstander">Marginer og paddinger.</Listeelement>
        <Listeelement tittel="Former">Radiuser, skygger og andre visuelle effekter.</Listeelement>
      </Liste>
    </Tekstblokk>

    <Feedback />
  </Dokumentasjonsside>
);
