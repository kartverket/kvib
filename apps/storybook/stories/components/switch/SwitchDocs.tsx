import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

export const SwitchDocs = () => (
  <Dokumentasjonsside
    tittel="Switch"
    beskrivelse={
      "Vi bruker Switch for å la brukeren veksle mellom to gjensidig utelukkende tilstander, som på eller av."
    }
  >
    <Tekstblokk tittel="Egnet til:">
      <Liste>
        <Listeelement>aktivering eller deaktivering av innstillinger.</Listeelement>
        <Listeelement>valg mellom to alternativer.</Listeelement>
        <Listeelement>situasjoner der umiddelbar tilbakemelding er nødvendig.</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Ikke egnet til:">
      <Liste>
        <Listeelement>valg mellom flere enn to alternativer; vurder andre alternativer.</Listeelement>
        <Listeelement>når endringen krever bekreftelse før den effektueres.</Listeelement>
        <Listeelement>situasjoner der valget ikke er enten/eller.</Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
