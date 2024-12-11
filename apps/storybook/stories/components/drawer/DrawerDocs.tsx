import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const DrawerDocs = () => (
  <Dokumentasjonsside
    tittel="Drawer"
    beskrivelse={`Vi bruker Drawer for å vise navigasjon eller annet innhold i et skyvepanel som kan trekkes ut fra skjermens kant.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>
          å gi rask tilgang til ekstra innhold eller navigasjonselementer uten å forstyrre brukerens arbeidsflyt.
        </Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>komplekst innhold som krever kontinuerlig visning og langvarig interaksjon.</Listeelement>
        <Listeelement>
          visning av kritisk informasjon. Dersom informasjonen er viktig for at brukeren skal kunne fullføre en oppgave,
          bør den være synlig hele tiden, og ikke skjules i et skyvepanel.
        </Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
