import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const AccordionDocs = () => (
  <Dokumentasjonsside
    tittel="Accordion"
    beskrivelse={`Vi bruker accordion for å organisere mye informasjon ved å skjule innhold i seksjoner, som brukeren kan åpne og lukke. Bruk tydelige og beskrivende seksjonstitler som gjenspeiler innholdet, i stedet for vage titler som "Vis mer" eller "Les mer".`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>redusere scrolling på sider med mye innhold.</Listeelement>
        <Listeelement>gruppere informasjon der brukeren kun trenger én seksjon om gangen.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>
          presentere viktig innhold brukeren alltid må ha tilgang til, som foreksempel feilmeldinger.
        </Listeelement>
        <Listeelement>dele opp en logisk flyt eller håndtere komplekse interaksjoner som skjemaer.</Listeelement>
        <Listeelement>la brukeren velge mellom ulike alternativer.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
