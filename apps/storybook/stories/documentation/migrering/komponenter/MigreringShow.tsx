import { Code } from "@kvib/react";
import { Tekstblokk } from "../../utils/Tekstblokk";
import { Kodeeksempel } from "../Kodeeksempel";

export const MigreringShow = () => (
  <Tekstblokk tittel="Show">
    Tidligere hadde man både <Code>Show</Code> og <Code>Hide</Code> for å vise og skjule innhold. Disse er nå forenklet
    til én komponent som heter <Code>Show</Code>.
    <Kodeeksempel
      beskrivelse="Eksempel på bruk"
      kildekode={`
<Show when={...} fallback={...}>
  <div>Innhold</div>
</Show>
`}
    />
  </Tekstblokk>
);
