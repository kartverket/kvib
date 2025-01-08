import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const BoxDocs = () => (
  <Dokumentasjonsside
    tittel="Box"
    beskrivelse={
      "Vi bruker Box til å sette plassering, marginer og layout rundt innholdselementer. Den bruker design tokens for styling og fungerer ofte som en byggekloss for andre komponenter."
    }
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>enkel layout og strukturering</Listeelement>
        <Listeelement>responsiv design.</Listeelement>
        <Listeelement>konsistent styling.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>komplekse interaktive elementer.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
