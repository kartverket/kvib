import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const PopoverDocs = () => (
  <Dokumentasjonsside
    tittel="Popover"
    beskrivelse={`Vi bruker Popover for å vise tilleggsinformasjon eller handlinger i et lite, kontekstuelt vindu.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>vise informasjon som ikke krever ny side.</Listeelement>
        <Listeelement>tilby handlinger relatert til en spesifikk interaksjon.</Listeelement>
        <Listeelement>situasjoner hvor brukeren trenger kortfattede valg.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>viktig informasjon som krever brukerens fulle oppmerksomhet.</Listeelement>
        <Listeelement>komplekse interaksjoner eller store mengder innhold.</Listeelement>
        <Listeelement>situasjoner der en modal eller ny side er bedre egnet.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
