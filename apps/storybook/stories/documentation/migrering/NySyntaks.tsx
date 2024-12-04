import { Code } from "@kvib/react";

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
];
