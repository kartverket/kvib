import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const EditableDocs = () => (
  <Dokumentasjonsside tittel="Editable" beskrivelse={`Vi bruker Editable for å endre tekst direkte på siden.`}>
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>endring av korte tekster, som titler eller navn.</Listeelement>
        <Listeelement>rask redigering uten å forlate konteksten.</Listeelement>
        <Listeelement>situasjoner der direkte tilbakemelding på endringene er viktig.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>omfattende eller formatert tekstredigering.</Listeelement>
        <Listeelement>komplekse redigeringsoppgaver med flere trinn.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
