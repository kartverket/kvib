import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const SegmentedControlDocs = () => (
  <Dokumentasjonsside
    tittel="Segmented Control"
    beskrivelse={`Vi bruker Segmented Control for å la brukeren velge ett alternativ fra et horisontalt sett med valg.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>valg mellom få, relaterte alternativer.</Listeelement>
        <Listeelement>når alle valg skal være synlige samtidig.</Listeelement>
        <Listeelement>situasjoner der rask bytting mellom alternativer er ønskelig.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>mange valg, vurder andre alternativer som f.eks nedtrekksmeny.</Listeelement>
        <Listeelement>komplekse valg med lange beskrivelser.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
