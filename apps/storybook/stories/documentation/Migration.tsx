import { Alert, Code, Text } from "@kvib/react";
import { Dokumentasjonsside } from "./utils/Dokumentasjonsside";
import { Liste } from "./utils/Liste";
import { Listeelement } from "./utils/Listeelement";
import { Tekstblokk } from "./utils/Tekstblokk";

const nyeKomponenter = [
  "Rating",
  "Select",
  "Passwor Input",
  "File Upload",
  "Checkbox Card",
  "Segment Control",
  "Nested Menu",
  "Color Swatch",
  "Color Picker",
  "Action Bar",
  "Clipboard",
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
        <Listeelement tittel="Dot-notasjon for komponentene">
          Man kan nå importere én rot-komponent og få tilgang til alle underkomponentene gjennom dot-notasjon. Dette er
          standarden i Chakra fra nå, men for å unngå enorme mengder med breaking changes har vi valgt å fortsatt tilby
          komponentene våre som enkeltstående importer, i tillegg til dot-notasjon. Dette tas i bruk ved å importere{" "}
          <Code>Kvib*</Code>-komponentene, som f.eks. <Code>KvibAccordion</Code>. Dette gir tilgang til
          underkomponentene gjennom dot-notasjon, som f.eks. <Code>KvibAccordion.Item</Code>.
        </Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Komponenter med nye navn">
      Flere av komponentene har fått nye navn. Dette byr på breaking changes for de som oppgraderer fra tidligere
      versjoner av Kvib.
      <Liste>
        <Listeelement tittel="Alert Dialog og Modal">
          Slått sammen til én komponent kalt Dialog. Man gjør en Dialog om til en Alert Dialog ved å sette prop-en
          <Code>role="alertdialog"</Code>.
        </Listeelement>
        <Listeelement tittel="Divider">Kalles nå Separator.</Listeelement>
        <Listeelement tittel="Form Control">Kalles nå Field.</Listeelement>
        <Listeelement tittel="Wrap">
          Er fjernet og tilbys nå gjennom HStack med prop-en <Code>wrap=wrap</Code>.
        </Listeelement>
        <Listeelement tittel="Select">
          Select har blitt Select (Native) til fordel for en helt ny Select med Chakra-styling. Select (Native) trigger
          fortsatt den interne menyen som varierer fra nettleser til nettleser.
        </Listeelement>
      </Liste>
      <br />
      <Text as="h3" fontWeight={700} fontSize={"md"}>
        Props med nye navn
      </Text>
      <Liste>
        <Listeelement tittel="is*">
          Alle Chakra-props som tidligere har blitt kalt noe som starter på <Code>{`is<X>`}</Code>, som f.eks.{" "}
          <Code>isRequired</Code>, vil fra nå kun hete <Code>{`<x>`}</Code>, altså <Code>required</Code>. Det samme
          gjelder <Code>defaultIsOpen</Code>, som nå heter <Code>defaultOpen</Code>.
        </Listeelement>
        <Listeelement tittel="colorScheme">
          Heter nå <Code>colorPalette</Code>. Man kan også bruke variantene av en fargepalett slik{" "}
          <Code>{`<Box bg="colorPalette.400">...</Box>`}</Code>
        </Listeelement>
        <Listeelement tittel="spacing">
          Har blitt forenklet slik at alle komponenter bruker <Code>gap</Code>. Tidligere har det vært noen som bruker
          den ene og noen som bruker den andre, men nå er det kun <Code>gap</Code> som gjelder.
        </Listeelement>
        <Listeelement tittel="sx">
          <Code>sx</Code> har nå bli erstattet med <Code>css</Code>.
        </Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Nye komponenter">
      <Liste>
        {nyeKomponenter.sort().map(komponent => (
          <Listeelement key={komponent} tittel={komponent} />
        ))}
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
