import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const KbdDocs = () => (
  <Dokumentasjonsside
    tittel="Keyboard Key (Kbd)"
    beskrivelse={`Vi bruker Kbd til å vise tastaturkombinasjoner for en handling, vanligvis for å indikere hurtigtaster eller snarveier i et grensesnitt.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>når du viser tastaturkombinasjoner for handlinger (f.eks. "Ctrl + C").</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>
          når grensesnittet er designet for å være fullstendig berøringsbasert, uten tastaturinteraksjon.
        </Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
