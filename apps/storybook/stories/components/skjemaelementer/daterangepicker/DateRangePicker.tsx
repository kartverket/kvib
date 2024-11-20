import { Link, Text } from "@kvib/react/src";
import { Dokumentasjonsside } from "../../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../../documentation/utils/Liste";
import { Listeelement } from "../../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../../documentation/utils/Tekstblokk";

export const DateRangePicker = () => (
  <Dokumentasjonsside
    tittel="Date Range Picker"
    beskrivelse={"En periodevelger som lar brukerne velge mellom en tidsperiode mellom to datoer."}
    pb="0"
  >
    <Tekstblokk>
      <Text fontSize="md" fontWeight={700} p="0" m="0">
        Bør brukes når:
      </Text>
      <Liste pb="16px">
        <Listeelement>
          Brukeren trenger å spesifisere en tidsperiode. Eksempelvis kan den brukes til å filtrere historiske kartdata
          for å vise arealendringer over tid, eller å hente frem informasjon for et spesifikt tidsrom.
        </Listeelement>
      </Liste>
      <Text fontSize="md" fontWeight={700} p="0" m="0">
        Unngå når:
      </Text>
      <Liste pb="16px">
        <Listeelement>Brukeren kun trenger én spesifikk dato (bruk en enkel datovelger i stedet).</Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Slik bruker du komponenten">
      DateRangePicker bygger på{" "}
      <Link
        href="https://daypicker.dev/docs/selection-modes#range-mode"
        target="_blank"
        rel="noopener noreferrer"
        external={false}
      >
        React Daypicker
      </Link>{" "}
      og eksponerer alle props som tilbys for denne komponenten når mode er satt til "range".
    </Tekstblokk>
  </Dokumentasjonsside>
);
