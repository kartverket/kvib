import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const ClipboardDocs = () => (
  <Dokumentasjonsside tittel="Clipboard" beskrivelse={`Vi bruker clipboard for å kopiere tekst til utklippstavlen.`}>
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>
          når du vil at brukeren raskt skal kunne kopiere informasjon som foreksempel en URL-adresse.
        </Listeelement>
        <Listeelement>kopi av tekst der det er viktig å unngå feil.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>
          sensitive data som kopieres til utklippstavlen kan være tilgjengelig for andre som bruker samme maskin, med
          mindre historikken slettes manuelt. Det er viktig å være bevisst på dette, spesielt i applikasjoner som
          håndterer sensitiv informasjon. Dette ansvaret ligger hovedsakelig hos brukeren, men det er nyttig å være
          oppmerksom på risikoen som utvikler eller designer.
        </Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
