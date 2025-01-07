import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const TextAreaDocs = () => (
  <Dokumentasjonsside
    tittel="Text Area"
    beskrivelse={
      "Vi bruker Text Area  for å la brukeren skrive inn lengre tekst, som beskrivelser eller tilbakemeldinger."
    }
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>innsamling av lengre tekstinnhold.</Listeelement>
        <Listeelement>skjemaer som krever detaljerte svar.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>innsamling av korte tekstsvar; bruk da Input-komponenten.</Listeelement>
        <Listeelement>
          situasjoner der strukturert data er nødvendig, som e-postadresser eller telefonnumre.
        </Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
