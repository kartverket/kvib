import { Link } from "@kvib/react/src";
import { Dokumentasjonsside } from "../../../documentation/utils/Dokumentasjonsside";
import { Tekstblokk } from "../../../documentation/utils/Tekstblokk";

export const DateRangePicker = () => (
  <Dokumentasjonsside tittel="DateRangePicker" beskrivelse={"En datovelger for å velge en periode mellom to datoer."}>
    <Tekstblokk tittel="Slik bruker du DateRangePicker">
      DateRangePicker bygger på{" "}
      <Link
        href="https://daypicker.dev/docs/selection-modes#range-mode"
        target="_blank"
        rel="noopener noreferrer"
        isExternal={false}
      >
        React Daypicker
      </Link>{" "}
      og eksponerer alle props som tilbys for denne komponenten når mode er satt til "range".
    </Tekstblokk>
  </Dokumentasjonsside>
);
