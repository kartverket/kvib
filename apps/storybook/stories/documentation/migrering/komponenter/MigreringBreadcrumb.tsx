import { Code } from "@kvib/react";
import { Liste } from "../../utils/Liste";
import { Listeelement } from "../../utils/Listeelement";
import { Tekstblokk } from "../../utils/Tekstblokk";
import { Kodeeksempel } from "../Kodeeksempel";

export const MigreringBreadcrumb = () => (
  <Tekstblokk tittel="Breadcrumb">
    <Liste>
      <Listeelement tittel="BreadcrumbItem">
        Er forenklet og slått sammen med <Code>BreadcrumbLink</Code>.
      </Listeelement>
      <Listeelement tittel="isCurrentPage">
        Denne propen er erstattet med komponenten <Code>BreadcrumbCurrentLink</Code>.
      </Listeelement>
    </Liste>
    <Kodeeksempel
      beskrivelse="Før:"
      kildekode={`
<Breadcrumb>
  <BreadcrumbItem>
  <BreadcrumbLink href='#'>Docs</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem>
  <BreadcrumbLink href='#'>Components</BreadcrumbLink>
  </BreadcrumbItem>

  <BreadcrumbItem isCurrentPage>
  <BreadcrumbLink href='#'>Props</BreadcrumbLink>
  </BreadcrumbItem>
</Breadcrumb> `}
    />
    <Kodeeksempel
      beskrivelse="Nå:"
      kildekode={`
<BreadcrumbRoot>
  <BreadcrumbLink href="#">Docs</BreadcrumbLink>
  <BreadcrumbLink href="#">Components</BreadcrumbLink>
  <BreadcrumbCurrentLink>Props</BreadcrumbCurrentLink>
</BreadcrumbRoot>
`}
    />
  </Tekstblokk>
);
