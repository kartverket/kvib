import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const SearchAsyncDocs = () => (
  <Dokumentasjonsside
    tittel="Search Async"
    beskrivelse="Vi bruker Search Async for å la brukeren søke etter informasjon med sanntidsresultater som oppdateres mens de skriver."
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>store datamengder hvor umiddelbar tilbakemelding forbedrer brukeropplevelsen.</Listeelement>
        <Listeelement>når rask filtrering av resultater er nødvendig.</Listeelement>
        <Listeelement>applikasjoner der effektivitet og responsivitet er viktig.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>når sanntidsoppdateringer kan belaste systemet unødig.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
