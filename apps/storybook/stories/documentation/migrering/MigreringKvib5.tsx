import { Alert, Code, Text } from "@kvib/react";
import { Source } from "@storybook/blocks";
import { Dokumentasjonsside } from "../utils/Dokumentasjonsside";
import { Liste } from "../utils/Liste";
import { Listeelement } from "../utils/Listeelement";
import { Tekstblokk } from "../utils/Tekstblokk";
import { Kodeeksempel } from "./Kodeeksempel";
import { MigreringAccordion } from "./komponenter/MigreringAccordion";
import { MigreringAlert } from "./komponenter/MigreringAlert";
import { MigreringInputGroup } from "./komponenter/MigreringInputGroup";
import { MigreringNumberInput } from "./komponenter/MigreringNumberInput";
import { MigreringToast } from "./komponenter/MigreringToast";

const nyeKomponenter = [
  "Rating",
  "Select",
  "Password Input",
  "File Upload",
  "Checkbox Card",
  "Segment Control",
  "Nested Menu",
  "Color Swatch",
  "Color Picker",
  "Action Bar",
  "Clipboard",
  "Radio Card",
  "Timeline",
  "Toggle Tip",
  "Collapsible",
  "For",
  "Em",
  "Strong",
  "Quote",
  "Span",
  "Bleed",
  "Blockquote",
];

const kompMedNyeNavn = [
  {
    title: "Alert Dialog og Modal",
    description: (
      <>
        Slått sammen til én komponent kalt Dialog. Man gjør en Dialog om til en Alert Dialog ved å sette prop-en{" "}
        <Code>role="alertdialog"</Code>.
      </>
    ),
  },
  {
    title: "Divider",
    description: <>Kalles nå Separator.</>,
  },
  {
    title: "Form Control",
    description: <>Kalles nå Field.</>,
  },
  {
    title: "Wrap",
    description: (
      <>
        Er fjernet og tilbys nå gjennom HStack med prop-en <Code>wrap=wrap</Code>.
      </>
    ),
  },
  {
    title: "Select",
    description: (
      <>
        Select har blitt Select (Native) til fordel for en helt ny Select med Chakra-styling. Select (Native) trigger
        fortsatt den interne menyen som varierer fra nettleser til nettleser.
      </>
    ),
  },
  {
    title: "Show/Hide",
    description: <>Kalles nå Show.</>,
  },
  {
    title: "<X>Button",
    description: (
      <>
        Enkelte komponenter som har hatt en Button som child-komponent, slik som Accordion med AccordionButton, har nå
        blitt omdøpt til <Code>{`<X>Trigger`}</Code>.
      </>
    ),
  },
  {
    title: "<X>CloseButton",
    description: (
      <>
        Alle forskjellige CloseButton-komponenter, som f.eks. ModalCloseButton, har nå blitt samlet under én komponent
        som heter CloseButton. For Popover stemmer ikke dette helt, der heter den <Code>PopoverCloseTrigger</Code>.
      </>
    ),
  },
  {
    title: "<X>Overlay",
    description: (
      <>
        Kalles nå <Code>{`<X>Backdrop`}</Code>.
      </>
    ),
  },
  {
    title: "<X>Panel",
    description: (
      <>
        Kalles nå <Code>{`<X>Content`}</Code>.
      </>
    ),
  },
  {
    title: "<X>Icon",
    description: (
      <>
        Kalles nå <Code>{`<X>Indicator`}</Code>.
      </>
    ),
  },
  {
    title: "<X>Label",
    description: (
      <>
        Kalles noen steder, som f.eks. i <Code>Progress</Code>, nå <Code>{`<X>ValueText`}</Code>.
      </>
    ),
  },
  {
    title: "HelperText",
    description: (
      <>
        Kalles nå <Code>HelpText</Code>.
      </>
    ),
  },
  {
    title: "OrderedList og UnorderedList",
    description: (
      <>
        Har blitt forenklet til <Code>List</Code> med prop-en <Code>as</Code> for å velge mellom ulike typer lister. Her
        setter man <Code>as="ol"</Code> for en ordnet liste og <Code>as="ul"</Code> for en uordnet liste.
      </>
    ),
  },
];

const nyeProps = [
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
      </>
    ),
  },
];

const nyeVarianter = [
  {
    title: "primary",
    description: (
      <>
        <Code>solid</Code>
      </>
    ),
  },
  {
    title: "secondary",
    description: (
      <>
        <Code>outline</Code>
      </>
    ),
  },
  {
    title: "tertiary",
    description: (
      <>
        <Code>ghost</Code>
      </>
    ),
  },
  {
    title: "ghost",
    description: (
      <>
        <Code>plain</Code>
      </>
    ),
  },
];

const fjernedeKomponenter = [
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
      </>
    ),
  },
];

const nySyntaks = [
  {
    title: "Dot-notasjon for komponentene",
    description: (
      <>
        Man kan nå importere én rot-komponent og få tilgang til alle underkomponentene gjennom dot-notasjon. Dette er
        standarden i Chakra fra nå, men for å unngå enorme mengder med breaking changes har vi valgt å fortsatt tilby
        komponentene våre som enkeltstående importer, i tillegg til dot-notasjon. Dette tas i bruk ved å importere{" "}
        <Code>Kvib*</Code>-komponentene, som f.eks. <Code>KvibAccordion</Code>. Dette gir tilgang til underkomponentene
        gjennom dot-notasjon, som f.eks. <Code>KvibAccordion.Item</Code>.
      </>
    ),
  },
];

export const Migration = () => (
  <Dokumentasjonsside
    tittel="Kvib 5"
    beskrivelse="Versjon 5 av Kvib bygger på Chakra 3 og har en rekke nyheter med seg. I denne oversikten vil vi fremheve de viktigste endringene og hvordan dette påvirker brukerne av tidligere versjoner av Kvib."
  >
    <Alert status="info" size="lg">
      Dokumentasjonen vår vil være litt utdatert i en tid fremover etter oppdateringen.
    </Alert>
    <Tekstblokk tittel="Syntaksendringer">
      <Liste>
        {nySyntaks
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .map(komponent => (
            <Listeelement key={komponent.title} tittel={komponent.title}>
              {komponent.description}
            </Listeelement>
          ))}
      </Liste>
    </Tekstblokk>
    <Text as="h2">Endringer i komponenter</Text>
    <MigreringAccordion />
    <MigreringAlert />
    <MigreringInputGroup />
    <MigreringNumberInput />
    <MigreringToast />
    <Tekstblokk tittel="Komponenter med nye navn">
      Flere av komponentene har fått nye navn. Dette byr på breaking changes for de som oppgraderer fra tidligere
      versjoner av Kvib.
      <Liste>
        {kompMedNyeNavn
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .map(komponent => (
            <Listeelement key={komponent.title} tittel={komponent.title}>
              {komponent.description}
            </Listeelement>
          ))}
      </Liste>
      <br />
      <Text as="h3" fontWeight={700} fontSize={"md"}>
        Props med nye navn
      </Text>
      <Liste>
        {nyeProps
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .map(prop => (
            <Listeelement key={prop.title} tittel={prop.title}>
              {prop.description}
            </Listeelement>
          ))}
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Varianter">
      <Liste>
        {nyeVarianter.map(variant => (
          <Listeelement key={variant.title} tittel={variant.title}>
            {variant.description}
          </Listeelement>
        ))}
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Nye komponenter">
      <Liste>
        {nyeKomponenter.sort().map(komponent => (
          <Listeelement key={komponent} tittel={komponent} />
        ))}
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Fjernede komponenter, hooks og props">
      <Liste>
        {fjernedeKomponenter
          .sort((a, b) => (a.title > b.title ? 1 : -1))
          .map(komponent => (
            <Listeelement key={komponent.title} tittel={komponent.title}>
              {komponent.description}
            </Listeelement>
          ))}
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
