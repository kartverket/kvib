import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const TagDocs = () => (
  <Dokumentasjonsside
    tittel="Tag"
    beskrivelse={
      "Vi bruker Tags som merkelapper for å kategorisere elementer, slik at brukeren enkelt kan navigere og forstå komplekse datasett eller prosesser. Tags bør være korte og gjenkjennelige, plasseres bak tilhørende element, og ikke kombineres med knapper for å unngå forvirring."
    }
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>kommunisere kategori, emne, status eller lignende.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>
          å utføre komplekse handlinger; bruk knapper eller lenker for interaktive funksjoner.
        </Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
