import { Code } from "@kvib/react";
import { Liste } from "../../utils/Liste";
import { Listeelement } from "../../utils/Listeelement";
import { Tekstblokk } from "../../utils/Tekstblokk";

export const MigreringTypography = () => (
  <Tekstblokk tittel="Typography">
    <Liste>
      <Listeelement tittel="variant">
        Finnes ikke lengre på bl.a. <Code>Heading</Code>. Bruk kombinasjonen av <Code>as</Code> og <Code>size</Code> for
        å sette størrelse, som f.eks. <Code>{`<Heading as="h1" size="xl">Overskrift</Heading>`}</Code>.
      </Listeelement>
    </Liste>
  </Tekstblokk>
);
