import { Code, Link } from "@kvib/react";
import { Unstyled } from "@storybook/blocks";
import { Kodeeksempel } from "./Kodeeksempel";

export const fjernedeKomponenter = [
  {
    title: "Wrap",
    description: (
      <>
        Er fjernet og tilbys nå gjennom HStack med prop-en <Code>wrap=wrap</Code>.
      </>
    ),
  },
  {
    title: "forwardRef",
    description: (
      <>
        Er fjernet og erstattet med <Code>React.forwardRef</Code>.
      </>
    ),
  },
  {
    title: "ControlBox",
    description: <>Er tatt bort.</>,
  },
  {
    title: "@chakra-ui/icons",
    description: (
      <>
        Er tatt bort. Chakra anbefaler å heller bruker <Code>react-icons</Code>
        eller <Code>lucide-react</Code>.
      </>
    ),
  },
  {
    title: "AvatarGroup",
    description: (
      <>
        Er tatt bort til fordel for en mer generisk <Code>Group</Code>.
      </>
    ),
  },
  {
    title: "AvatarBadge",
    description: (
      <>
        Er tatt bort. Anbefaler å bruke <Code>Float</Code> i stedet.
      </>
    ),
  },
  {
    title: "TagLeftIcon og TagRightIcon",
    description: (
      <>
        Er tatt bort til fordel for å heller rendre ikonet direkte i <Code>Tag</Code>.
      </>
    ),
  },
  {
    title: "focusBorderColor og errorBorderColor",
    description: (
      <>
        Er tatt bort som props. Bruk <Code>--focus-color</Code> og <Code>--error-color</Code> i stedet.
      </>
    ),
  },
  {
    title: "preserveScrollBarGap",
    description: <>Er tatt bort.</>,
  },
  {
    title: "allowPinZoom",
    description: <>Er tatt bort.</>,
  },
  {
    title: "LinkOverlay sin isExternal-prop",
    description: (
      <>
        Denne er fjernet. Man kan heller inkludere en knapp som en del av div-en som blir overlayet og legge til{" "}
        <Code>external</Code> på denne.
      </>
    ),
  },
  {
    title: "align på Text-komponenten",
    description: (
      <>
        Fjernet til fordel for <Code>textAlign</Code>.
      </>
    ),
  },
  {
    title: "useTheme",
    description: (
      <>
        Er fjernet. Man kan nå hente ut tokens ved å bruke <Code>useKvibContext</Code> og kalle på <Code>token()</Code>.
        <Kodeeksempel
          beskrivelse="Bruk av tokens tidligere:"
          kildekode={`
const theme = useTheme()
const largeBreakpoint = theme.breakpoints.lg
`}
        />
        <Kodeeksempel
          beskrivelse="Nå hentes tokens ut slik:"
          kildekode={`
const system = useKvibContext();
const largeBreakpoint = system.token("breakpoints.lg");
`}
        />
        <Kodeeksempel
          beskrivelse={`
            I noen tilfeller har man tidligere ønsket å kombinere breakpoint-verdier med useMediaQuery for å
        sjekke om man befinner seg innenfor et visst breakpoint. Følgende kodesnutt viser et eksempel på hvordan man kan bruke breakpointet "mdToLg" for å sjekke om man befinner seg på tablet eller tilsvarende størrelse:
        `}
          kildekode={`
const system = useKvibContext();
const isTablet = useMediaQuery(getBreakpointCondition(system, "mdToLg"));
`}
        />
        <Unstyled>
          <Link href="/?path=/docs/komponenter-tokens-breakpoints--docs">Les mer om breakpoints her.</Link>
        </Unstyled>
      </>
    ),
  },
  {
    title: "<X>Title-komponent i flere komponenter",
    description: (
      <>
        I flere av komponentene som tidligere har tatt inn en <Code>{`<X>Title`}</Code>, som f.eks. <Code>Popover</Code>{" "}
        med <Code>PopoverTitle</Code>, er dette endret til prop-en <Code>title</Code> i rot-komponenten i stedet.
      </>
    ),
  },
];
