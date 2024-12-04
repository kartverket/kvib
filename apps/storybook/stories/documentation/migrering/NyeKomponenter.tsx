import { Code } from "@kvib/react";

export const nyeKomponenter = [
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

export const kompMedNyeNavn = [
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
