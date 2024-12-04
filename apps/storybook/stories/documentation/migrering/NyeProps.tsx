import { Code } from "@kvib/react";
import { Source } from "@storybook/blocks";
import { Kodeeksempel } from "./Kodeeksempel";

export const nyeProps = [
  {
    title: "is<X>",
    description: (
      <>
        Alle Chakra-props som tidligere har blitt kalt noe som starter på <Code>{`is<X>`}</Code>, som f.eks.{" "}
        <Code>isRequired</Code>, vil fra nå kun hete <Code>{`<x>`}</Code>, altså <Code>required</Code>. Det samme
        gjelder <Code>defaultIsOpen</Code>, som nå heter <Code>defaultOpen</Code>.
      </>
    ),
  },
  {
    title: "colorScheme",
    description: (
      <>
        Heter nå <Code>colorPalette</Code>. Man kan også bruke variantene av en fargepalett slik{" "}
        <Code>{`<Box bg="colorPalette.400">...</Box>`}</Code>
      </>
    ),
  },
  {
    title: "spacing",
    description: (
      <>
        Har blitt forenklet slik at alle komponenter bruker <Code>gap</Code>. Tidligere har det vært noen som bruker den
        ene og noen som bruker den andre, men nå er det kun <Code>gap</Code> som gjelder.
      </>
    ),
  },
  {
    title: "spacingX",
    description: (
      <>
        Heter nå <Code>columnGap</Code>.
      </>
    ),
  },
  {
    title: "spacingY",
    description: (
      <>
        Heter nå <Code>rowGap</Code>.
      </>
    ),
  },
  {
    title: "sx",
    description: (
      <>
        <Code>sx</Code> har nå bli erstattet med <Code>css</Code>.
      </>
    ),
  },
  {
    title: "status",
    description: (
      <>
        Heter nå <Code>type</Code>.
      </>
    ),
  },
  {
    title: "noOfLines",
    description: (
      <>
        Heter nå <Code>lineClamp</Code>.
      </>
    ),
  },
  {
    title: "truncated",
    description: (
      <>
        Heter nå <Code>truncate</Code>.
      </>
    ),
  },
  {
    title: "allowMultiple",
    description: (
      <>
        Heter nå <Code>multiple</Code>.
      </>
    ),
  },
  {
    title: "allowToggle",
    description: (
      <>
        Heter nå <Code>collapsible</Code>.
      </>
    ),
  },
  {
    title: "initialFocusRef og finalFocusRef",
    description: (
      <>
        Heter nå <Code>initialFocusEl</Code> og <Code>finalFocusEl</Code>.
      </>
    ),
  },
  {
    title: "returnFocusOnClose",
    description: (
      <>
        Heter nå <Code>restoreFocus</Code>.
      </>
    ),
  },
  {
    title: "blockScrollOnMount",
    description: (
      <>
        Heter nå <Code>preventScroll</Code>.
      </>
    ),
  },
  {
    title: "onOpen og onClose",
    description: (
      <>
        Heter nå <Code>onOpenChange</Code>.
      </>
    ),
  },
  {
    title: "isFullHeight",
    description: (
      <>
        <Code>Drawer</Code> sin <Code>isFullHeight</Code> prop er fjernet. Bruk <Code>height=100dvh</Code> i stedet.
      </>
    ),
  },
  {
    title: "isRound",
    description: (
      <>
        Komponenter som støttet <Code>isRound</Code> støtter nå <Code>shape=pill</Code> i stedet.
      </>
    ),
  },
  {
    title: "_activeLink",
    description: (
      <>
        Heter nå <Code>_currentPage</Code>.
      </>
    ),
  },
  {
    title: "_activeStep",
    description: (
      <>
        Heter nå <Code>_currentStep</Code>.
      </>
    ),
  },
  {
    title: "as",
    description: (
      <>
        Der man tidligere har kunne inferere props gjennom <Code>as</Code>, slik som{" "}
        <Code>{`<Button as={ReactRouterLink} to="..." />`}</Code> for å legge til støtte for andre routing-verktøy i en
        knapp, må man nå bruke <Code>asChild</Code> på rot-komponenten i stedet. Eksempelet over vil da se slik ut:
        <Source
          code={`
<Button asChild>
  <ReactRouterLink to="..." />
</Button>
          `}
        />
        <br />
        Det samme gjelder for andre komponenter som tidligere har støttet <Code>as</Code>. Her er et eksempel på hvordan
        man tidligere kunne bruke <Code>as</Code> på en <Code>BreadcrumbLink</Code>-komponent og hvordan man nå må gjøre
        det:
        <Kodeeksempel
          beskrivelse="Før gjorde man sånn her:"
          kildekode={`
<BreadcrumbLink as={NavLink} to={route.pathname}>
  {route.handle}
</BreadcrumbLink>
          `}
        />
        <Kodeeksempel
          beskrivelse="Nå:"
          kildekode={`
<BreadcrumbLink asChild>
  <NavLink to={route.pathname}>
    {route.handle}
  </NavLink>
</BreadcrumbLink>
          `}
        />
      </>
    ),
  },
];
