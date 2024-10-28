import { HStack, Link, ListItem, Text, UnorderedList } from "@kvib/react/src";
import { Dokumentasjonsside } from "../utils/Dokumentasjonsside";
import { Tekstblokk } from "../utils/Tekstblokk";

export const BidraMedDesign = () => (
  <Dokumentasjonsside
    tittel="Bidra som designer"
    beskrivelse="Kartverkets designsystem er laget for å støtte de tverrfaglige produktteamene i å utvikle brukervennlige
    grensesnitt som følger Kartverkets visuelle profil og oppfyller kravene til universell utforming."
  >
    <Tekstblokk tittel="Samarbeid">
      <Text fontSize={"lg"} fontWeight={400} m="0" p="0">
        Designsystemet er et levende produkt som kontinuerlig oppdateres og vedlikeholdes. Alle som ønsker å påvirke
        utviklingen eller gi tilbakemeldinger, er velkomne til å bidra. Målet er at designsystemet skal forbedre
        produktutviklingen hos Kartverket. I stedet for at Team Designsystem skal fungere som et bestillingssystem,
        ønsker vi å oppmuntre til godt samarbeid og aktiv deltakelse fra alle produktteamene.
      </Text>
    </Tekstblokk>

    <Tekstblokk tittel="Sandkassen i Figma">
      <Text fontSize={"lg"} fontWeight={400} m="0" p="0">
        I et designsystem er samarbeid og deling av ideer nøkkelen til suksess. Figma-sandkassen gir alle muligheten til
        å bidra med sine innspill og inspirasjon for å skape et mer helhetlig system. I sandkassen kan alle dele sine
        forslag til hva de ønsker skal være en del av designsystemet. Det er også et sted for å dele skisser, som kan
        være til inspirasjon for andre designere.
      </Text>
    </Tekstblokk>

    <Tekstblokk tittel="Foreslå nytt design eller forbedringer">
      <Text fontSize={"lg"} fontWeight={400} m="0" p="0">
        Kartverkets designsystem utvikles og forbedres kontinuerlig gjennom flere tilnærminger. Når nye komponenter
        foreslås, gjennomgår vi en vurderingsprosess der vi ser på problemet komponenten skal løse, samt verdien den
        tilfører. Vi vurderer også om komponenten samsvarer med designprinsippene, om den kan gjøres fleksibel nok, og
        om den passer inn i helheten.
        <UnorderedList>
          <ListItem fontSize={"lg"} fontWeight={400} m="0" p="0">
            <b>Enkle endringer som flere team trenger:</b> Når flere team etterspør små justeringer eller nye
            komponenter, følger vi opp ved å designe komponenten i Figma og legge den til i komponentbiblioteket, klar
            til bruk.
          </ListItem>
          <ListItem fontSize={"lg"} fontWeight={400} m="0" p="0">
            <b>Komponenter som er spesifikke for ett team:</b> Hvis en komponent kun er relevant for ett team,
            oppfordrer vi teamet til å utvikle den lokalt. Vi følger likevel med for å se om lignende behov oppstår hos
            andre produktteam.
          </ListItem>
          <ListItem fontSize={"lg"} fontWeight={400} m="0" p="0">
            <b>Avanserte endringer eller nye komponenter som flere team trenger:</b> For større endringer eller nye
            komponenter som er relevante for flere team, samarbeider vi med produktteamene for å utvikle en felles
            løsning som dekker behovene på tvers av alle team.
          </ListItem>
        </UnorderedList>
      </Text>
    </Tekstblokk>

    <Tekstblokk tittel="Vil du bidra?">
      <Text fontSize={"lg"} fontWeight={400} m="0" p="0">
        Vi setter pris på alle tilbakemeldinger, ideer og innspill, så ikke nøl med å ta kontakt.
        <HStack gap="2rem" pt="1.5rem">
          <Link
            href="mailto:kvib-feedbacks-aaaahwh252gnftmofucpaa47ca@kartverketgroup.slack.com"
            fontSize={"lg"}
            fontWeight={400}
            m="0"
            p="0"
          >
            Send en mail
          </Link>
          <Link
            href="https://slack.com/app_redirect?channel=gen-designsystem"
            fontSize={"lg"}
            fontWeight={400}
            m="0"
            p="0"
          >
            Bli med i Slack-kanalen
          </Link>
          <Link href="https://github.com/kartverket/kvib" fontSize={"lg"} fontWeight={400} m="0" p="0">
            Lag en pull request på Github
          </Link>
        </HStack>
      </Text>
    </Tekstblokk>
  </Dokumentasjonsside>
);
