import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const FlexDocs = () => (
  <Dokumentasjonsside tittel="Flex" beskrivelse={"Vi bruker Flex til å håndtere flex-layouts."}>
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>å lage fleksible og responsive layouter.</Listeelement>
        <Listeelement>distribuere plass jevnt mellom elementer.</Listeelement>
        <Listeelement>justere plasseringen og størrelsen på elementer innen en container.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>faste layout-strukturer med statiske posisjoner.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
