import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const NumberInputDocs = () => (
  <Dokumentasjonsside
    tittel="Number Input"
    beskrivelse={`Vi bruker Number Input til å angi et tall, og lar brukeren justere verdien ved å bruke stepper-knapper for å øke eller redusere verdien.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>for å angi numeriske verdier som kvanitet eller alder.</Listeelement>
        <Listeelement>når du ønkser å tillate presise justeringer av verdien.</Listeelement>
        <Listeelement>
          når inputverdien trenger validering, og minimums- og maksimumsverdier kan spesifiseres.
        </Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>når et tekstfelt uten restriksjoner er mer passende for brukernes behov.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
