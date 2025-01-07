import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const ToggleTipDocs = () => (
  <Dokumentasjonsside
    tittel="Toggle Tip"
    beskrivelse={
      "Vi bruker Toggle Tip for å vise tilleggsinformasjon som ligner på et verktøytips, men fungerer som en popover."
    }
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>å gi brukeren mer informasjon uten å navigere bort fra siden.</Listeelement>
        <Listeelement>situasjoner der en kort forklaring eller veiledning er nødvendig.</Listeelement>
        <Listeelement>å tilby kontekstuell hjelp på landingssider eller i skjemaer.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>visning av omfattende eller komplekse data; vurder en modal eller egen side.</Listeelement>
        <Listeelement>situasjoner der informasjonen må være konstant synlig.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
