import { Card, Text, Heading, Link, SimpleGrid, LinkBox, Flex, UnorderedList, Box, Stack } from "@kvib/react/src";

export const StarCard = () => {
  return (
    <IntroCard>
      <Stack spacing="2rem">
        <Text fontSize="2xl">Ledestjerner</Text>
        <Flex gap="1rem" alignItems="center">
          <Box>👨‍👨‍👦‍👦</Box> <Box fontWeight="medium">Brukerrettet og imøtekomme universell utforming</Box>
        </Flex>
        <Flex gap="1rem" alignItems="center">
          <Box>💸</Box>
          <Box as="text" fontWeight="medium">
            Redusere design- og teknisk gjeld
          </Box>
        </Flex>
        <Flex gap="1rem" alignItems="center">
          <Box>🎨</Box>
          <Box as="text" fontWeight="medium">
            Bidra til merkevarekonsistens og skalerbarhet
          </Box>
        </Flex>
        <Flex gap="1rem" alignItems="center">
          <Box>📋</Box>
          <Box as="text" fontWeight="medium">
            Gode beskrivelser over retningslinjer
          </Box>
        </Flex>
        <Flex gap="1rem" alignItems="center">
          <Box>🚀</Box>
          <Box as="text" fontWeight="medium">
            Komme raskere i gang!
          </Box>
        </Flex>
      </Stack>
    </IntroCard>
  );
};

export const LinksCard = () => {
  return (
    <IntroCard>
      <Text fontSize="2xl">Nyttige lenker</Text>

      <Element>
        <Link
          fontWeight="bold"
          href="https://kartverket.atlassian.net/wiki/spaces/TB/overview?homepageId=325713953"
          isExternal={false}
        >
          Confluence
        </Link>
        Følg teamet og prosjektet i Confluence.
      </Element>

      <Element>
        <Link
          fontWeight="bold"
          href="https://kartverket.atlassian.net/jira/software/projects/KOMP/boards/80"
          isExternal={false}
        >
          Oppgaveboardet i Jira
        </Link>
        Se status på designsystemet og oppgaver som er under arbeid på oppgaveboardet i Jira.
      </Element>

      <Element>
        <Link fontWeight="bold" href="https://github.com/kartverket/kvib" isExternal={false}>
          Github
        </Link>
        Github-repoet er et monorepo som består av dokumentasjonssiden til designsystemet i Storybook og
        komponentbiblioteket i React.
      </Element>

      <Element>
        <Link
          fontWeight="bold"
          href="https://www.figma.com/file/j0OBUEuQZlrbQOV6ariHTo/Designsystem"
          isExternal={false}
        >
          Figma
        </Link>
        I Figma finner du komponenter og tokens som er klare til bruk.
      </Element>

      <Element>
        <Link fontWeight="bold" href="https://kartverket.atlassian.net/wiki/spaces/UX/overview" isExternal={false}>
          Håndboken i interaksjonsdesign
        </Link>
        Benytt deg av håndboken i interaksjonsdesign for å jobbe brukersentrert med design og utvikling i Kartverket.
      </Element>
    </IntroCard>
  );
};

export const SurveyCard = () => {
  return (
    <IntroCard>
      <Text fontSize="2xl">Er du en bruker av systemet? - Ta spørreundersøkelsen!</Text>
      <Text fontSize="md">
        Team Designsystem ønsker å kontinuerlig forbedre Kartverkets Designystem for å bedre møte dine behov. Som et
        verdsatt medlem av fellesskapet vårt, inviterer vi deg til å dele innsikten din gjennom vårt
        tilbakemeldingsskjema for designsystemet.
      </Text>
      <Text fontSize="md" marginTop="0">
        Ved å besvare dette spørreskjemaet vil du ha en direkte innvirkning på hvordan designsystemet utvikler seg. Dine
        tanker og erfaringer vil hjelpe oss å forstå hva som fungerer bra og identifisere områder der vi kan gjøre
        forbedringer. Ditt bidrag vil gjøre oss i stand til å lage et designsystem som er enklere å bruke, bidrar til
        høyere konsistens og forbedrer arbeidsflyten din.
      </Text>

      <Element>
        <Link
          fontWeight="bold"
          href="https://forms.office.com/Pages/ResponsePage.aspx?id=osh0f85Dskaw6LYwbLpzo2TDj9LhmetKqqmL3qbrXF5UQjVGMkVNVFZFVUQ0WElFNFo1N1dQUFVNRi4u"
          isExternal={false}
        >
          Spørreundersøkelse i Microsoft Forms
        </Link>
        Beregnet tid: 5 min 🕒
      </Element>
    </IntroCard>
  );
};

export const FeedbackCard = () => {
  return (
    <IntroCard>
      <Text fontSize="2xl">Ser du noe som mangler?</Text>
      <Text fontSize="md" marginBottom={0}>
        Et designsystem er i kontinuerlig utvikling. Komponentene og retningslinjene endrer seg konstant i takt med
        ønsker og behov. Ser du noe som mangler eller noe som kunne vært annerledes? Har du møtt på en bug, eller
        trenger du en feature som ikke er tenkt på? Bidra til at designsystemet og Kartverket blir enda bedre ved å
        gjøre en av følgende:
      </Text>

      <Element>
        <Box fontWeight="bold">Slack</Box>
        Ta kontakt på slack i #gen-designsystem
      </Element>

      <Element>
        <Link fontWeight="bold" href="https://github.com/kartverket/kvib/issues/new/choose" isExternal={false}>
          Opprett en issue på github
        </Link>
        Sjekk at issuen ikke finnes fra før og fyll ut et av skjemaene.
      </Element>

      <Element>
        <Link fontWeight="bold" href="/?path=/docs/info-bidra-hurtigveiledning--docs" isExternal={false}>
          Bidra med en PR
        </Link>
        Sjekk ut bidragsløypa og fiks ønsket ditt selv! Dette vil ofte være raskest.
      </Element>
    </IntroCard>
  );
};

// Helpers

type IntroCardProps = {
  children: React.ReactNode;
};

export const IntroCard = ({ children }: IntroCardProps) => {
  return (
    <Card variant="outline" padding="3rem" borderColor="gray.300">
      {children}
    </Card>
  );
};

export const Element = ({ children }: IntroCardProps) => {
  return (
    <Flex paddingTop="1rem" direction="column">
      {children}
    </Flex>
  );
};
