import { Code, Link } from "@kvib/react";

export const nySyntaks = [
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
  {
    title: "Tokens",
    description: (
      <>
        Måten tokens benyttes på er endret. Enn så lenge er det litt bugs (?) eller avvik fra standarden på hva som blir
        akseptert, men det skal være mulig å benytte seg av tokens på følgende måte:{" "}
        <Code>{`<...="{colors.colorPalette.400}">...</=>`}</Code>. Merk at man wrapper tokens med krøllparantes og at
        man fra nå av bruker hele stinavnet til tokenet. Så for breadcrumbs blir det f.eks.{" "}
        <Code>{`{breadcrumbs.lg}`}</Code>, for shadows blir det <Code>{`{shadows.lg}`}</Code>, for fontstørrelser blir
        det <Code>{`{fontSizes.md}`}</Code> osv.. Mer informasjon om bruk finner du på Chakra sine sider:{" "}
        <Link href="https://www.chakra-ui.com/docs/styling/css-variables" target="_blank">
          Chakra UI - CSS Variables
        </Link>
        .
      </>
    ),
  },
];
