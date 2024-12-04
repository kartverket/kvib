import { Code } from "@kvib/react";
import { Liste } from "../../utils/Liste";
import { Listeelement } from "../../utils/Listeelement";
import { Tekstblokk } from "../../utils/Tekstblokk";

export const MigreringTooltip = () => (
  <Tekstblokk tittel="Tooltip">
    <Liste>
      <Listeelement tittel="label">
        Omdøpt til <Code>content</Code>.
      </Listeelement>
    </Liste>
  </Tekstblokk>
);
