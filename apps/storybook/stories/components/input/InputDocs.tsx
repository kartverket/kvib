import { Link } from "@kvib/react";
import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const InputDocs = () => (
  <Dokumentasjonsside
    tittel="Input"
    beskrivelse={`Input er et skjemaelement som lar brukeren skrive inn informasjon (f.eks. tekst, e-post eller passord), som deretter brukes i løsningen.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>korte tekster og svar.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>
          mer utfyllende svar som er lengre enn én linje (bruk{" "}
          <Link href="/?path=/docs/komponenter-textarea--docs">Textarea</Link>).
        </Listeelement>
        <Listeelement>
          søk; bruk <Link href="/?path=/docs/komponenter-search--docs">Search</Link>
        </Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Nyttige retningslinjer">
      <Liste>
        <Listeelement>hold ledeteksten kort, unngå at den går over to linjer og plasser over inputfeltet.</Listeelement>
        <Listeelement>unngå plassholdetekst som forsvinner når brukeren skriver.</Listeelement>
        <Listeelement>
          tilpass bredden etter forventet innhold (f.eks smal for telefonnummer, bredere for stedsnavn).
        </Listeelement>
        <Listeelement>tillat kopiering og liming for enklere utfylling.</Listeelement>
        <Listeelement>unngå deaktivert tilstand; vurder behovet for feltet.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
