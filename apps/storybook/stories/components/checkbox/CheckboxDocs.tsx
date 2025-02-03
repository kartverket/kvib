import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";
import { Link } from "@kvib/react";

export const CheckboxDocs = () => (
  <Dokumentasjonsside
    tittel="Checkbox"
    beskrivelse={`Vi bruker Checkbox (avmerkingsbokser) for å gi brukerne mulighet til å velge ett eller flere alternativer. Checkbox skal som hovedregel kun plasseres vertikalt, av hensyn til lesbarhet.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>når brukeren skal kunne velge ett eller flere alternativer.</Listeelement>
        <Listeelement>
          når brukeren skal bekrefte et valg, som for eksempel å "akseptere vilkår" for en tjeneste, eller lignende
          funksjonalitet.
        </Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>
          når det kun er mulig å velge ett alternativ fra listen (bruk{""} <Link href="/?path=/docs/komponenter-radio--docs">radio</Link> i stedet).
        </Listeelement>
        <Listeelement>når det er mer enn 10 alternativer å velge mellom (bruk{""} <Link href="/?path=/docs/komponenter-select--docs">select</Link> i stedet).</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
