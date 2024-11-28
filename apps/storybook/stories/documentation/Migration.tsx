import { Code, Text } from "@kvib/react";
import { Dokumentasjonsside } from "./utils/Dokumentasjonsside";
import { Liste } from "./utils/Liste";
import { Listeelement } from "./utils/Listeelement";
import { Tekstblokk } from "./utils/Tekstblokk";

export const Migration = () => (
  <Dokumentasjonsside
    tittel="Kvib 5"
    beskrivelse="Versjon 5 av Kvib bygger på Chakra 3 og har en rekke nyheter med seg. I denne oversikten vil vi fremheve de viktigste endringene og hvordan dette påvirker brukerne av tidligere versjoner av Kvib."
  >
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
  </Dokumentasjonsside>
);
