import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const HeaderDocs = () => (
  <Dokumentasjonsside
    tittel="Header"
    beskrivelse={`Vi bruker headeren som global navigasjon på våre nettsider og tjenester. Den gir brukerne en tydelig oversikt og bidrar til å synliggjøre Kartverket som avsender.`}
  >
    <Tekstblokk tittel="Nyttige retningslinjer">
      <Liste>
        <Listeelement>headeren skal alltid ha hvit bakgrunnsfarge.</Listeelement>
        <Listeelement>logo og tjenestenavn plasseres til venstre.</Listeelement>
        <Listeelement>interaktive elementer (søk, meny, innlogging/logg ut) plasseres til høyre.</Listeelement>
        <Listeelement>Kartverket-logoen skal brukes i sin helhet og ikke kombineres med andre navn.</Listeelement>
        <Listeelement>klikk på logoen tar brukeren tilbake til forsiden.</Listeelement>
        <Listeelement>på mobil skjules enkelte elementer og legges i menyen.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
