import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const CodeDocs = () => (
  <Dokumentasjonsside tittel="Code" beskrivelse={`Vi bruker Code for å presentere kode i en tekst.`}>
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>fremheve små biter av koder i en setning.</Listeelement>
        <Listeelement>vise kode eller tekniske termer uten å forstyrre tekstflyten.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>vise store mengder kode.</Listeelement>
        <Listeelement>når koden må være interaktiv.</Listeelement>
        <Listeelement>når koden ikke er en del av forklaring, og står alene uten kontekst.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
