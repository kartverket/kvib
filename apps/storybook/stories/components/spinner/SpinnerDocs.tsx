import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const SpinnerDocs = () => (
  <Dokumentasjonsside
    tittel="Spinner"
    beskrivelse="Vi bruker Spinner for å indikere at en prosess pågår, ved å vise en animert indikator som signaliserer til brukeren at systemet arbeider med en oppgave."
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>når ventetiden er kort og en enkel indikator er tilstrekkelig.</Listeelement>
        <Listeelement>dynamiske operasjoner som lasting av data eller innhold.</Listeelement>
        <Listeelement>situasjoner der spesifikke fremdriftsdetaljer ikke er nødvendig.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>når prosessen har en definert varighet; bruk en fremdriftsindikator.</Listeelement>
        <Listeelement>langvarige operasjoner som kan kreve mer informasjon.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
