import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";
import { Tilleggsinfo } from "../../documentation/utils/Tilleggsinfo";

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

export const InformativeAlertDocs = () => (
  <Tilleggsinfo
    tittel="Informative"
    beskrivelse={
      "Bruk Info til å formidle nyttig informasjon for brukerne som ikke er kritisk for å fullføre oppgaven."
    }
  />
);

export const SuccessAlertDocs = () => (
  <Tilleggsinfo
    tittel="Success"
    beskrivelse={"Bruk Success for å bekrefte at en oppgave er fullført, eller at handlingen ble utført vellykket."}
  />
);

export const WarningAlertDocs = () => (
  <Tilleggsinfo
    tittel="Warning"
    beskrivelse={
      "Bruk warning når du vil at brukeren skal foreta en bestemt handling eller for å advare dem om noe viktig."
    }
  />
);

export const ErrorAlertDocs = () => (
  <Tilleggsinfo
    tittel="Error"
    beskrivelse={"Bruk Error for å informere om noe som er kritisk eller som hindrer brukeren i å komme videre."}
  />
);
