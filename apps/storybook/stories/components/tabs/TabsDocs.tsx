import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const TabsDocs = () => (
  <Dokumentasjonsside
    tittel="Tabs"
    beskrivelse={
      "Vi bruker Tabs for å organisere innhold i separate faner, slik at brukeren kan navigere mellom ulike seksjoner uten å forlate siden."
    }
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>å dele opp innhold i logiske seksjoner.</Listeelement>
        <Listeelement>navigasjon mellom relaterte data eller funksjoner.</Listeelement>
        <Listeelement>å redusere visuell kompleksitet ved å vise én seksjon om gangen.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>navigasjon mellom helt separate sider; bruk da en meny eller lenker.</Listeelement>
        <Listeelement>situasjoner der alt innhold bør være synlig samtidig.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
