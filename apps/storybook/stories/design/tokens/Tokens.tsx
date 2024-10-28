import { ListItem, Text, UnorderedList } from "@kvib/react/src";
import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Feedback } from "../../documentation/utils/Feedback";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const Tokens = () => (
  <Dokumentasjonsside
    tittel="Tokens"
    beskrivelse="Design tokens er fundamentale byggeklosser i et designsystem, som definerer stil og designprinsipper vår designsystem. De fungerer som en felles kilde mellom design og utvikling, og sikrer at både designere og utviklere følger de samme retningslinjene."
  >
    <Tekstblokk tittel="Fordeler med design tokens">
      <Text fontSize={"lg"} fontWeight={400} m="0" p="0">
        Tokens gjør det lettere å implementere endringer på en konsistent måte. For eksempel, når vi ønsker å oppdatere
        en farge eller justere typografi, kan vi enkelt gjøre dette i tokenene, og endringene vil automatisk reflekteres
        i alle komponentene som bruker dem.
      </Text>
      <Text fontSize={"lg"} fontWeight={400} m="0" p="0" mt="1.5rem">
        Vi har også etablert variabler som er tema-baserte. Dette betyr at vi tar utgangspunkt i hovedfargene til
        Kartverket, som er grønn og blå, for å forenkle tilpasningen av stiler i skissene dine.
      </Text>
    </Tekstblokk>

    <Tekstblokk tittel="Eksempler på design tokens">
      <UnorderedList pl="1.75rem" m="0">
        <ListItem fontSize={"lg"} fontWeight={400} m="0" p="0">
          <b>Farger:</b> Primær- og sekundærfarger.
        </ListItem>
        <ListItem fontSize={"lg"} fontWeight={400} m="0" p="0">
          <b>Typografi:</b> Skrifttyper, størrelser og linjehøyder.
        </ListItem>
        <ListItem fontSize={"lg"} fontWeight={400} m="0" p="0">
          <b>Avstander:</b> Marginer og paddinger.
        </ListItem>
        <ListItem fontSize={"lg"} fontWeight={400} m="0" p="0">
          <b>Former:</b> Radiuser, skygger og andre visuelle effekter.
        </ListItem>
      </UnorderedList>
    </Tekstblokk>

    <Feedback />
  </Dokumentasjonsside>
);
