import {
  Box,
  Link,
  Table,
  TableBody as Tbody,
  TableCell as Td,
  Text,
  TableCell as Th,
  TableHeader as Thead,
  TableRow as Tr,
} from "@kvib/react";
import { Dokumentasjonsside } from "../../documentation/utils/Dokumentasjonsside";
import { Liste } from "../../documentation/utils/Liste";
import { Listeelement } from "../../documentation/utils/Listeelement";
import { Tekstblokk } from "../../documentation/utils/Tekstblokk";

const TypografiTable = () => (
  <Box border="1px solid var(--kvib-colors-gray-200)" mt="16px" p="16px" boxSizing="content-box" width="100%">
    <Table
      width="100%"
      size="md"
      css={{
        "td, th": {
          borderBottom: "1px solid var(--kvib-colors-gray-200)",
        },
        borderSpacing: "0",
      }}
    >
      <Thead
        css={{
          th: {
            fontSize: "md",
            lineHeight: "md",
            fontWeight: 700,
            textTransform: "none",
            color: "var(--kvib-colors-black)",
            pt: "var(--kvib-space-4)",
            pb: "var(--kvib-space-4)",
          },
        }}
      >
        <Tr>
          <Th>Hierarki</Th>
          <Th>Desktop (px/line-height)</Th>
          <Th>Mobil (px/line-height)</Th>
          <Th>Bruk</Th>
        </Tr>
      </Thead>
      <Tbody
        css={{
          "tr:last-of-type td": {
            borderBottom: "none",
          },
        }}
      >
        <Tr>
          <Td>Forside</Td>
          <Td>5XL - Bold, 48px/48px</Td>
          <Td>3XL - Bold, 30px/36px</Td>
          <Td>Hovedoverskrift forside</Td>
        </Tr>
        <Tr>
          <Td>H1</Td>
          <Td>3XL - Bold, 30px/36px</Td>
          <Td>2XL - Bold, 24px/32px</Td>
          <Td>Seksjonsoverskrifter</Td>
        </Tr>
        <Tr>
          <Td>H2</Td>
          <Td>XL - Bold, 20px/28px</Td>
          <Td>L - Bold, 18px/28px</Td>
          <Td>Underseksjoner</Td>
        </Tr>
        <Tr>
          <Td>H3</Td>
          <Td>M - Bold, 16px/24px</Td>
          <Td>M - Bold, 16px/24px</Td>
          <Td>Underoverskrifter</Td>
        </Tr>
        <Tr>
          <Td>Brødtekst</Td>
          <Td>M - Regular, 16px</Td>
          <Td>S - Regular, 14px</Td>
          <Td>Generell tekst</Td>
        </Tr>
        <Tr>
          <Td>Lenke</Td>
          <Td>M - Bold, 16px, underline</Td>
          <Td>M - Bold, 16px, underline</Td>
          <Td>Klikkbare lenker</Td>
        </Tr>
      </Tbody>
    </Table>
  </Box>
);

const Beskrivelse = () => (
  <>
    Kartverket bruker Mulish som hovedfont og vi benytter oss av to vekter: Regular og Bold. Andre vekter kan unntaksvis
    brukes ved behov. Du kan lese mer om typografi i{" "}
    <Link
      href="https://www.kartverket.no/om-kartverket/kartverkets-identitet"
      target="_blank"
      rel="noopener noreferrer"
      external={false}
    >
      Kartverkets designmanual
    </Link>
    . Typografien ligger tilgjengelig i Kartverkets Designsystem i Figma. Om du trenger å laste ned Mulish, kan du gjøre
    det fra{" "}
    <Link href="https://fonts.google.com/specimen/Mulish" target="_blank" rel="noopener noreferrer" external>
      Google Fonts
    </Link>
    .
  </>
);

export const Typografi = () => (
  <Dokumentasjonsside tittel="Typografi" beskrivelse={<Beskrivelse />}>
    <Tekstblokk tittel="Typografisk hiearki">
      Under har vi definert et typografihierarki for både desktop og mobil.
      <TypografiTable />
    </Tekstblokk>

    <Tekstblokk tittel="Nyttige retningslinjer">
      <Text fontSize="md" fontWeight={500} p="0" m="0" mt="1rem">
        For desktop:
      </Text>
      <Liste pb="16px">
        <Listeelement tittel="Bredde">
          Innholdet på hovedsider bør ha en maksimal bredde på 1120 px og støttesider på 836 px. Fra 1024 px og oppover
          skal innholdet være sentrert og følge grid-systemet med passende padding.
        </Listeelement>
        <Listeelement tittel="Padding og Whitespace">
          Plasser H1 alltid 80 px under headeren, med 16 px mellom H1 og det følgende innholdet.
        </Listeelement>
      </Liste>

      <Text fontSize="md" fontWeight={500} p="0" m="0">
        For mobil:
      </Text>
      <Liste>
        <Listeelement tittel="Bredde og marger">Bruk 16 px margin til venstre og høyre for hovedinnhold.</Listeelement>
        <Listeelement tittel="Padding og Whitespace">
          Plasser H1 alltid 24 px under headeren, med 12 px mellom H1 og det følgende innholdet.
        </Listeelement>
      </Liste>
    </Tekstblokk>
  </Dokumentasjonsside>
);
