import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const RadioCardDocs = () => (
  <Dokumentasjonsside
    tittel="Radio Card"
    beskrivelse={`Vi bruker Radio Card for å la brukeren velge ett alternativ fra en gruppe ved hjelp av tydelige kort.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>
          når valgene skal være visuelt tydelige og kan beskrives med tekst, ikoner eller bilder.
        </Listeelement>
        <Listeelement>situasjoner der alle valgene må være synlige samtidig.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>
          når kun enkel tekst eller nummerering er tilstrekkelig, bruk da vanlige radioknapper.
        </Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
