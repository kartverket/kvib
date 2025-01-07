import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

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
