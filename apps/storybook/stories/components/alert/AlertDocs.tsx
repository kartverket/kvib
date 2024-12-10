import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const AlertDocs = () => (
  <Dokumentasjonsside
    tittel="Alert"
    beskrivelse={`Vi bruker Alert for å fremheve viktig informasjon og fange brukernes oppmerksomhet. Bruk komponenten varsomt, med enkel og tydelig tekst, som forteller hva brukeren må eller kan gjøre for å komme videre.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>vise en viktig beskjed brukeren må få med seg.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>bruke flere alerts samtidig, da dette kan overvelde brukerne og redusere effekten.</Listeelement>
        <Listeelement>validere enkeltfelt i skjema (bruk heller komponentens feilmeldinger).</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
