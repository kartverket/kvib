import { Alert, AlertDescription } from "@kvib/react";
import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const ThemeDocs = () => (
  <Dokumentasjonsside
    tittel="Theme"
    beskrivelse={
      "Vi bruker Theme til å overstyre temaet for spesifikke deler av brukergrensesnittet, og tvinge dem til lys- eller mørk modus. "
    }
  >
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>å endre temaet for hele applikasjonen eller nettsiden globalt.</Listeelement>
        <Listeelement>å håndtere mer komplekse stilendringer som ikke er relatert til lys/mørk modus.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Alert status={"info"} title={"Obs!"}>
      <AlertDescription>
        Foreløpig tilbys Kvib-fargene kun i lyse varianter. Per nå vil kun bakgrunnsfargen endres ved bytte av tema, og
        ikke selve utseendet på komponentene.
      </AlertDescription>
    </Alert>
  </Dokumentasjonsside>
);
