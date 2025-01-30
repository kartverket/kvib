import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";
import { Tilleggsinfo } from "../../documentation/utils/Tilleggsinfo";

export const ButtonDocs = () => (
  <Dokumentasjonsside
    tittel="Button"
    beskrivelse={`Vi bruker Button for å la brukerne utføre handlinger. Det finnes fire varianter: primary, secondary, tertiary og ghost som kommer i ulike farger og størrelser. Knappetekstene skal være korte, enkle og handlingsfokuserte, helst med maks to ord. For nettsider som skal gå under kartverket.no bruker vi grønn og for forvaltningstjenester bruker vi blå.`}
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

export const SolidButtonDocs = () => (
  <Tilleggsinfo
    tittel="Solid (Primary Button)"
    beskrivelse={
      'Vi bruker denne knappen til den viktigste handlingen på en side - hovedhandlingen, som "Lagre", "Neste" eller "Send søknad". En side kan noen ganger ha mer enn en hovedhandling, men ikke mange.'
    }
  />
);

export const OutlineButtonDocs = () => (
  <Tilleggsinfo
    tittel="Outline (Secondary Button)"
    beskrivelse={
      'Vi bruker denne knappen til valg som ikke er hovedhandlingen, ofte sammen med en primærknapp. For eksempel kan en sekundærknapp være "Avbryt" når hovedknappen er "Lagre".'
    }
  />
);

export const GhostButtonDocs = () => (
  <Tilleggsinfo
    tittel="Ghost (Tertiary Button)"
    beskrivelse={
      "Vi bruker denne knappen til nedtonede valg. Hvis den brukes alene, bør den ha et ikon for å tydeliggjøre at det er en knapp."
    }
  />
);

export const PlainButtonDocs = () => (
  <Tilleggsinfo
    tittel="Plain Button"
    beskrivelse={
      "Vi bruker denne knappen til nedtonede valg. Hvis den brukes alene, bør den ha et ikon for å tydeliggjøre at det er en knapp."
    }
  />
);

export const NeutralButtonDocs = () => (
  <Tilleggsinfo
    tittel="Neutral"
    beskrivelse={
      "Grå-fargen er mer nøytral og kan brukes når det er flere knapper på en side som ikke skal ta så mye oppmerksomhet."
    }
  />
);

export const ErrorDangerButtonDocs = () => (
  <Tilleggsinfo
    tittel="Error/Danger"
    beskrivelse={
      'Rød-fargen brukes til destruktive handlinger som ikke kan angres, som "Slett", for å tydeliggjøre alvorlighetsgraden.'
    }
  />
);

export const LoadingButtonDocs = () => (
  <Tilleggsinfo
    tittel="Loading"
    beskrivelse={"Når vi skal vise brukeren at knappen laster noe, kan vi kombinere knappen med en spinner."}
  />
);

export const DisabledButtonDocs = () => (
  <Tilleggsinfo
    tittel="Disabled"
    beskrivelse={
      "Deaktiverte knapper bør unngås fordi de kan være vanskelige å oppfatte. Noen brukere vil ikke forstå hva knappen sier eller hvorfor den ikke er klikkbar."
    }
  />
);
