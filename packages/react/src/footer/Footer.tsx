import { Box, Divider, Flex, FlexProps, Heading, Image, Link, Text } from "@kvib/react/src";

export type FooterProps = {
  accessibilityUrl?: string;
  excludeSocialMedia?: boolean;
  excludeOpeningHours?: boolean;
  excludeContactInfo?: boolean;
  excludeHelp?: boolean;
  excludeNews?: boolean;
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
}: FooterProps) => {
  const onlyOneIncluded =
    (!excludeContactInfo || !excludeOpeningHours ? 1 : 0) + (!excludeHelp ? 1 : 0) + (!excludeNews ? 1 : 0) <= 1;
  console.log(onlyOneIncluded);

  return (
    <Box marginTop="auto" alignSelf="flex-end" w="full" py="12" px="6" bg="#f5f2f2" borderTop="8px solid #1a833b">
      <Flex flexDir="column" gap={8} maxWidth={1200} mx="auto">
        <Flex alignItems="flex-start" justifyContent="space-between" gap={10} flexWrap="wrap">
          <Image src={"null"} alt="Kartverket Logo" w="140px" />
          <Flex gap={8} flex="1" flexWrap="wrap">
            <Flex gap={8} flexDir={onlyOneIncluded ? "row" : "column"} justify="space-between">
              <FooterToggleableFlex hidden={excludeContactInfo}>
                <Heading size="md" pb={2}>
                  Kontakt oss
                </Heading>
                <Text>
                  Telefon:{" "}
                  <Link fontWeight="bold" href="tel:32118000">
                    {" "}
                    32 11 80 00{" "}
                  </Link>
                </Text>
                <Text>
                  E-post:{" "}
                  <Link fontWeight="bold" href="mailto:post@kartverket.no">
                    {" "}
                    post@kartverket.no{" "}
                  </Link>
                </Text>
                <Link p={0} fontWeight="bold" href="https://kartverket.no/om-kartverket/kontakt-oss">
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
              <Link href="http://status.kartverket.no/" fontWeight="bold">
                {" "}
                Driftsmeldinger{" "}
              </Link>
              <Link href="https://kartverket.no/om-kartverket/faq" fontWeight="bold">
                {" "}
                Ofte stilte spørsmål{" "}
              </Link>
              <Link href="https://kartverket.no/eiendom/skjema/alleskjema" fontWeight="bold">
                {" "}
                Skjemaer{" "}
              </Link>
            </FooterToggleableFlex>
            <FooterToggleableFlex hidden={excludeNews}>
              <Heading size="md"> Aktuelt </Heading>
              <Link href="https://kartverket.no/om-kartverket/arrangement" fontWeight="bold">
                {" "}
                Arrangementer og kurs{" "}
              </Link>
              <Link href="https://kartverket.no/om-kartverket/nyheter" fontWeight="bold">
                {" "}
                Nyheter{" "}
              </Link>
              <Link href="https://kartverket.no/om-kartverket/jobb-i-kartverket" fontWeight="bold">
                {" "}
                Ledige stillinger{" "}
              </Link>
              <Link href="https://kartverket.no/om-kartverket/presse" fontWeight="bold">
                {" "}
                Presse{" "}
              </Link>
            </FooterToggleableFlex>
          </Flex>
        </Flex>
        <Divider opacity="1" borderColor="gray.400" />
        <Flex align="center" justify="space-between" gap={10} flexWrap="wrap">
          {excludeSocialMedia ? (
            <Box></Box>
          ) : (
            <FooterToggleableFlex align="center" gap={3} flexWrap="wrap" flexDir="row">
              <Heading size="md"> Følg oss: </Heading>
              <Link href="https://www.facebook.com/kartverket.no" fontWeight="bold">
                Facebook
              </Link>
              <Link href="https://twitter.com/Kartverket" fontWeight="bold">
                Twitter
              </Link>
              <Link href="https://www.instagram.com/kartverket.no/" fontWeight="bold">
                Instagram
              </Link>
              <Link href="https://www.linkedin.com/company/65713" fontWeight="bold">
                LinkedIn
              </Link>
              <Link href="https://pub.dialogapi.no/s/3403d74a-8e34-4ab5-a221-1bf58c425982" fontWeight="bold">
                Newsletter
              </Link>
              <Link href="https://vimeo.com/kartverket/videos" fontWeight="bold">
                Video
              </Link>
            </FooterToggleableFlex>
          )}
          <Flex align="center" gap={3} flexWrap="wrap">
            <Link href="https://kartverket.no/om-kartverket/personvern" fontWeight="bold">
              Personvern
            </Link>
            {accessibilityUrl && (
              <Link href={accessibilityUrl} fontWeight="bold">
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
