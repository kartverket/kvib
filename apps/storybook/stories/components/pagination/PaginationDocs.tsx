import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const PaginationDocs = () => (
  <Dokumentasjonsside
    tittel="Pagination"
    beskrivelse={`Vi bruker Pagination for å dele opp store mengder innhold i mindre, oversiktlige sider, slik at brukeren enkelt kan navigere.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>
          når innholdet er for stort til å vises på én side, som søkeresultater eller produktlister.
        </Listeelement>
        <Listeelement>når brukeren trenger kontroll over navigasjonen mellom sider.</Listeelement>
        <Listeelement>for å redusere lastetid ved å vise data i mindre porsjoner.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>når alt innhold kan vises på én side uten ytelsesproblemer.</Listeelement>
        <Listeelement>når kontinuerlig rulling gir bedre brukeropplevelse.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
