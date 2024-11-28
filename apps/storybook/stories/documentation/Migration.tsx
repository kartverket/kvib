import { Alert, Code, Text } from "@kvib/react";
import { Dokumentasjonsside } from "./utils/Dokumentasjonsside";
import { Liste } from "./utils/Liste";
import { Listeelement } from "./utils/Listeelement";
import { Tekstblokk } from "./utils/Tekstblokk";

export const Migration = () => (
  <Dokumentasjonsside
    tittel="Kvib 5"
    beskrivelse="Versjon 5 av Kvib bygger på Chakra 3 og har en rekke nyheter med seg. I denne oversikten vil vi fremheve de viktigste endringene og hvordan dette påvirker brukerne av tidligere versjoner av Kvib."
  >
    <Alert status="info" size="lg">
      Dokumentasjonen vår vil være litt utdatert i en tid fremover etter oppdateringen.
    </Alert>
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
      </Liste>
      <br />
      <Text as="h3" fontWeight={700} fontSize={"md"}>
        Props med nye navn
      </Text>
      <Liste>
        <Listeelement tittel="is*">
          Alle Chakra-props som tidligere har blitt kalt noe som starter på <Code>is*</Code>, som f.eks.{" "}
          <Code>isRequired</Code>, vil fra nå kun hete <Code>required</Code>.
        </Listeelement>
        <Listeelement tittel="spacing">
          Har blitt forenklet slik at alle komponenter bruker <Code>gap</Code>. Tidligere har det vært noen som bruker
          den ene og noen som bruker den andre, men nå er det kun <Code>gap</Code> som gjelder.
        </Listeelement>
      </Liste>
    </Tekstblokk>
    <Tekstblokk tittel="Nye komponenter">
      <Liste>
        <Listeelement tittel="ColorPicker"></Listeelement>
        <Listeelement tittel="ColorSwatch"></Listeelement>
      </Liste>
    </Tekstblokk>
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
  </Dokumentasjonsside>
);
