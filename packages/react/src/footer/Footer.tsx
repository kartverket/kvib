import { Box, Flex, FlexProps } from "@/layout";
import { Logo } from "@/logo";
import { Separator } from "@/separator";
import { Heading, Link, Text } from "@/typography";

export type FooterProps = {
  accessibilityUrl?: string;
  excludePrivacyLink?: boolean;
  excludeSocialMedia?: boolean;
  excludeOpeningHours?: boolean;
  excludeContactInfo?: boolean;
  excludeHelp?: boolean;
  excludeNews?: boolean;
  /**The contact info email-adress
   * @default post@kartverket.no*/
  contactInfoEmailAddress?: string;
  colorPalette?: "green" | "blue" | "gray";
};

const FooterToggleableFlex = (props: FlexProps) => {
  if (props.hidden) return null;

  return (
    <Flex flexDir={props.flexDir || "column"} gap={1} flex={1} {...props}>
      {props.children}
    </Flex>
  );
};

export const Footer = ({
  accessibilityUrl,
  excludeContactInfo,
  excludeOpeningHours,
  excludeHelp,
  excludeNews,
  excludeSocialMedia,
  excludePrivacyLink,
  colorPalette = "green",
  contactInfoEmailAddress = "post@kartverket.no",
}: FooterProps) => {
  const onlyOneIncluded =
    (!excludeContactInfo || !excludeOpeningHours ? 1 : 0) + (!excludeHelp ? 1 : 0) + (!excludeNews ? 1 : 0) <= 1;

  return (
    <Box marginTop="auto" alignSelf="flex-end" w="full" py="12" px="6" bg="#f5f2f2" borderTop="8px solid #1a833b">
      <Flex flexDir="column" gap={8} maxWidth={1200} mx="auto">
        <Flex alignItems="flex-start" justifyContent="space-between" gap={10} flexWrap="wrap">
          <Logo size={200} variant="horizontal" />
          <Flex gap={8} flex="1" flexWrap="wrap">
            <Flex gap={8} flexDir={onlyOneIncluded ? "row" : "column"} justify="space-between">
              <FooterToggleableFlex hidden={excludeContactInfo}>
                <Heading size="md" pb={2}>
                  Kontakt oss
                </Heading>
                <Text>
                  Telefon:{" "}
                  <Link
                    fontWeight="bold"
                    aria-label="Ring Kartverket på telefon"
                    href="tel:32118000"
                    colorPalette={colorPalette}
                  >
                    {" "}
                    32 11 80 00{" "}
                  </Link>
                </Text>
                <Text>
                  E-post:{" "}
                  <Link
                    fontWeight="bold"
                    aria-label="Send e-post til Kartverket"
                    href={"mailto:" + contactInfoEmailAddress}
                    colorPalette={colorPalette}
                  >
                    {" "}
                    {contactInfoEmailAddress}{" "}
                  </Link>
                </Text>
                <Link
                  p={0}
                  fontWeight="bold"
                  aria-label="Besøk Kartverket sin kontaktinformasjon"
                  href="https://kartverket.no/om-kartverket/kontakt-oss"
                  colorPalette={colorPalette}
                >
                  {" "}
                  Kontaktinfo og adresser{" "}
                </Link>
              </FooterToggleableFlex>
              <FooterToggleableFlex hidden={excludeOpeningHours}>
                <Text fontWeight="bold"> Åpningstider (mandag-fredag) </Text>
                <Text> Kundesenter/sentralbord: 09.00-15.00 </Text>
                <Text> Resepsjon: 08.00-15.00 </Text>
              </FooterToggleableFlex>
            </Flex>
            <FooterToggleableFlex hidden={excludeHelp}>
              <Heading size="md"> Hjelp </Heading>
              <Link
                href="https://status.kartverket.no/"
                aria-label="Besøk Kartverket sine driftsmeldinger"
                fontWeight="bold"
                colorPalette={colorPalette}
              >
                {" "}
                Driftsmeldinger{" "}
              </Link>
              <Link
                href="https://kartverket.no/om-kartverket/faq"
                aria-label="Besøk Kartverket sin oversikt over ofte spurte spørsmål"
                fontWeight="bold"
                colorPalette={colorPalette}
              >
                {" "}
                Ofte stilte spørsmål{" "}
              </Link>
              <Link
                href="https://kartverket.no/eiendom/skjema/alleskjema"
                aria-label="Besøk Kartverket sin oversikt over skjemaer"
                fontWeight="bold"
                colorPalette={colorPalette}
              >
                {" "}
                Skjemaer{" "}
              </Link>
            </FooterToggleableFlex>
            <FooterToggleableFlex hidden={excludeNews}>
              <Heading size="md"> Aktuelt </Heading>
              <Link
                href="https://kartverket.no/om-kartverket/arrangement"
                aria-label="Besøk Kartverket sin oversikt over Arrangementer og kurs"
                fontWeight="bold"
                colorPalette={colorPalette}
              >
                {" "}
                Arrangementer og kurs{" "}
              </Link>
              <Link
                href="https://kartverket.no/om-kartverket/nyheter"
                aria-label="Besøk Kartverket sine Nyheter"
                fontWeight="bold"
                colorPalette={colorPalette}
              >
                {" "}
                Nyheter{" "}
              </Link>
              <Link
                href="https://kartverket.no/om-kartverket/jobb-i-kartverket"
                aria-label="Besøk Kartverket sin side med informasjon for jobb i Kartverket"
                fontWeight="bold"
                colorPalette={colorPalette}
              >
                {" "}
                Ledige stillinger{" "}
              </Link>
              <Link
                href="https://kartverket.no/om-kartverket/presse"
                aria-label="Besøk Kartverket sin presse-side"
                fontWeight="bold"
                colorPalette={colorPalette}
              >
                {" "}
                Presse{" "}
              </Link>
            </FooterToggleableFlex>
          </Flex>
        </Flex>
        <Separator opacity="1" borderColor="gray.400" />
        <Flex align="center" justify="space-between" gap={10} flexWrap="wrap">
          {excludeSocialMedia ? (
            <Box></Box>
          ) : (
            <FooterToggleableFlex align="center" gap={3} flexWrap="wrap" flexDir="row">
              <Heading size="md"> Følg oss: </Heading>
              <Link
                href="https://www.facebook.com/kartverket.no"
                aria-label="Besøk Kartverket sin Facebook-side"
                fontWeight="bold"
                colorPalette={colorPalette}
              >
                Facebook
              </Link>
              <Link
                href="https://twitter.com/Kartverket"
                aria-label="Besøk Kartverket sin Twitter-side"
                fontWeight="bold"
                colorPalette={colorPalette}
              >
                Twitter
              </Link>
              <Link
                href="https://www.instagram.com/kartverket.no/"
                aria-label="Besøk Kartverket sin Instagram-side"
                fontWeight="bold"
                colorPalette={colorPalette}
              >
                Instagram
              </Link>
              <Link
                href="https://www.linkedin.com/company/65713"
                aria-label="Besøk Kartverket sin LinkedIn-side"
                fontWeight="bold"
                colorPalette={colorPalette}
              >
                LinkedIn
              </Link>
              <Link
                href="https://pub.dialogapi.no/s/3403d74a-8e34-4ab5-a221-1bf58c425982"
                aria-label="Besøk Kartverket sin side for å melde seg på nyhetsvarsler"
                fontWeight="bold"
                colorPalette={colorPalette}
              >
                Newsletter
              </Link>
              <Link
                href="https://vimeo.com/kartverket/videos"
                aria-label="Besøk Kartverket sin Vimeo-side"
                fontWeight="bold"
                colorPalette={colorPalette}
              >
                Video
              </Link>
            </FooterToggleableFlex>
          )}
          <Flex align="center" gap={3} flexWrap="wrap">
            {!excludePrivacyLink && (
              <Link
                href="https://kartverket.no/om-kartverket/personvern"
                aria-label="Besøk Kartverket sin personvernserklæring"
                fontWeight="bold"
                colorPalette={colorPalette}
              >
                Personvern
              </Link>
            )}
            {accessibilityUrl && (
              <Link
                href={accessibilityUrl}
                aria-label="Besøk denne sidens tilgjengelighetserklæring"
                fontWeight="bold"
                colorPalette={colorPalette}
              >
                {" "}
                Tilgjengelighetserklæring
              </Link>
            )}
          </Flex>
        </Flex>
      </Flex>
    </Box>
  );
};
