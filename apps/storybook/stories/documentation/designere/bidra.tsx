import { Dokumentasjonsside } from "../utils/Dokumentasjonsside";
import { Feedback } from "../utils/Feedback";
import { Liste } from "../utils/Liste";
import { Listeelement } from "../utils/Listeelement";
import { Tekstblokk } from "../utils/Tekstblokk";

export const BidraMedDesign = () => (
  <Dokumentasjonsside
    tittel="Bidra som designer"
    beskrivelse="Kartverkets designsystem er laget for å støtte de tverrfaglige produktteamene i å utvikle brukervennlige
    grensesnitt som følger Kartverkets visuelle profil og oppfyller kravene til universell utforming."
  >
    <Tekstblokk tittel="Samarbeid">
      Designsystemet er et levende produkt som kontinuerlig oppdateres og vedlikeholdes. Alle som ønsker å påvirke
      utviklingen eller gi tilbakemeldinger, er velkomne til å bidra. Målet er at designsystemet skal forbedre
      produktutviklingen hos Kartverket. I stedet for at Team Designsystem skal fungere som et bestillingssystem, ønsker
      vi å oppmuntre til godt samarbeid og aktiv deltakelse fra alle produktteamene.
    </Tekstblokk>

    <Tekstblokk tittel="Sandkassen i Figma">
      I et designsystem er samarbeid og deling av ideer nøkkelen til suksess. Figma-sandkassen gir alle muligheten til å
      bidra med sine innspill og inspirasjon for å skape et mer helhetlig system. I sandkassen kan alle dele sine
      forslag til hva de ønsker skal være en del av designsystemet. Det er også et sted for å dele skisser, som kan være
      til inspirasjon for andre designere.
    </Tekstblokk>

    <Tekstblokk tittel="Foreslå nytt design eller forbedringer">
      Kartverkets designsystem utvikles og forbedres kontinuerlig gjennom flere tilnærminger. Når nye komponenter
      foreslås, gjennomgår vi en vurderingsprosess der vi ser på problemet komponenten skal løse, samt verdien den
      tilfører. Vi vurderer også om komponenten samsvarer med designprinsippene, om den kan gjøres fleksibel nok, og om
      den passer inn i helheten.
      <Liste>
        <Listeelement tittel="Enkle endringer som flere team trenger">
          Når flere team etterspør små justeringer eller nye komponenter, følger vi opp ved å designe komponenten i
          Figma og legge den til i komponentbiblioteket, klar til bruk.
        </Listeelement>
        <Listeelement tittel="Komponenter som er spesifikke for ett team">
          Hvis en komponent kun er relevant for ett team, oppfordrer vi teamet til å utvikle den lokalt. Vi følger
          likevel med for å se om lignende behov oppstår hos andre produktteam.
        </Listeelement>
        <Listeelement tittel="Avanserte endringer eller nye komponenter som flere team trenger">
          For større endringer eller nye komponenter som er relevante for flere team, samarbeider vi med produktteamene
          for å utvikle en felles løsning som dekker behovene på tvers av alle team.
        </Listeelement>
      </Liste>
    </Tekstblokk>

    <Feedback />
  </Dokumentasjonsside>
);
