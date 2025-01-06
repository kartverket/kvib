import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const StatusDocs = () => (
  <Dokumentasjonsside
    tittel="Status"
    beskrivelse={
      'Vi bruker Status for å indikere statusen til en prosess eller tilstand, ved å vise en visuell indikator som representerer ulike statuser som "suksess", "feil", "advarsel" eller "informasjon".'
    }
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>kommunisere resultatet av en handling.</Listeelement>
        <Listeelement>varsle om feil eller problemer.</Listeelement>
        <Listeelement>vise systemtilstander, som tilkoblingsstatus.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>komplekse meldinger; bruk Alert.</Listeelement>
        <Listeelement>kontinuerlig status; bruk Spinner eller Progress.</Listeelement>
        <Listeelement>når indikatoren alene ikke gir nok kontekst; legg til tekst.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
