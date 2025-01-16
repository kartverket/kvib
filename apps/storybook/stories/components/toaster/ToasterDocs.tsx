import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";
import { Tilleggsinfo } from "../../documentation/utils/Tilleggsinfo";

export const ToasterDocs = () => (
  <Dokumentasjonsside
    tittel="Toast"
    beskrivelse={
      "Vi bruker Toast for å vise midlertidige meldinger som bekrefter handlinger eller gir tilbakemeldinger."
    }
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>bekrefte vellykkede handlinger, som lagring eller sending.</Listeelement>
        <Listeelement>varsle om feil eller advarsler.</Listeelement>
        <Listeelement>gi oppdateringer uten å forstyrre arbeidsflyten.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>permanente meldinger; bruk Alert.</Listeelement>
        <Listeelement>innsamling av brukerinput; vurder Modal.</Listeelement>
        <Listeelement>omfattende informasjon.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);

export const InformativeToasterDocs = () => (
  <Tilleggsinfo
    tittel="Informative"
    beskrivelse={
      "Bruk Info til å formidle nyttig informasjon for brukerne som ikke er kritisk for å fullføre oppgaven."
    }
  />
);

export const WarningToasterDocs = () => (
  <Tilleggsinfo
    tittel="Warning"
    beskrivelse={
      "Bruk Warning når du vil at brukeren skal foreta en bestemt handling eller for å advare dem om noe viktig."
    }
  />
);

export const ErrorToasterDocs = () => (
  <Tilleggsinfo
    tittel="Error"
    beskrivelse={"Bruk Error for å informere om noe som er kritisk eller som hindrer brukeren i å komme videre."}
  />
);

export const SuccessToasterDocs = () => (
  <Tilleggsinfo
    tittel="Success"
    beskrivelse={"Bruk Success for å bekrefte at en oppgave er fullført, eller at handlingen ble utført vellykket."}
  />
);
