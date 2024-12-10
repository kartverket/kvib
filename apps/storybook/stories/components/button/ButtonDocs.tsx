import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const ButtonDocs = () => (
  <Dokumentasjonsside
    tittel="Button"
    beskrivelse={`Vi bruker Button for å la brukerne utføre handlinger. Det finnes tre varianter: primary, secondary og tertiary, som kommer i ulike farger og størrelser. Knappetekstene skal være korte, enkle og handlingsfokuserte, helst med maks to ord. For nettsider som skal gå under kartverket.no bruker vi grønn og for forvaltningstjenester bruker vi blå.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>utføre viktige handlinger som å sende skjemaer, lagre data eller bekrefte valg.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>navigere til andre sider eller ut av tjenesten (bruk heller link-komponenten).</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
