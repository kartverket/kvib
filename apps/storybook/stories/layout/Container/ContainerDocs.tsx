import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const ContainerDocs = () => (
  <Dokumentasjonsside
    tittel="Container"
    beskrivelse={"Vi bruker Containere for å begrense innholdets bredde ved et spesifikt breakpoint."}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>tilpasse innhold etter ulike skjermstørrelser.</Listeelement>
        <Listeelement>kontrollere bredde basert på breakpoints.</Listeelement>
        <Listeelement>sentere innhold i responsiv layout.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>innhold som krever fast plassering eller spesifikke måleverdier.</Listeelement>
        <Listeelement>ikke-responsivt innhold.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
