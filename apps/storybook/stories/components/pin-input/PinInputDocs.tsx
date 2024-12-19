import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const PinInputDocs = () => (
  <Dokumentasjonsside
    tittel="Pin Input"
    beskrivelse={`Vi bruker Pin Input for å la brukeren skrive inn en PIN-kode eller annen kort sekvens av sifre.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>innsamling av PIN-koder.</Listeelement>
        <Listeelement>kort sekvens av tall, som verifikasjonskoder.</Listeelement>
        <Listeelement>steg i autentisering eller sikkerhetsprosesser.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>lengre tekst eller komplekse passord.</Listeelement>
        <Listeelement>innsamling av ikke-sensitiv informasjon.</Listeelement>
        <Listeelement>felter uten krav til spesifikt antall tegn.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
