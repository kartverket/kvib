import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const AvatarDocs = () => (
  <Dokumentasjonsside
    tittel="Avatar"
    beskrivelse={`Vi bruker Avatar for å vise et bilde, initialer eller et ikon som representerer en bruker eller profil.`}
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>representere brukere i lister, teamoversikter eller meldingsgrensesnitt.</Listeelement>
        <Listeelement>
          indikere status eller aktivitet, som "online" eller "borte", ved å kombinere med visuelle elementer som farger
          eller ikoner.
        </Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>
          vise detaljerte brukerdata som navn eller roller alene (bruk sammen med tekst for tydelighet).
        </Listeelement>
        <Listeelement>
          erstatte funksjoner der brukere må velge eller administrere flere profiler samtidig.
        </Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
