import { Flex } from "@/layout";
import { Logo } from "@/logo";
import { Link } from "@/typography";

type FooterInlineProps = {
  logoLink?: string;
  accessibilityUrl?: string;
  /**The contact info email-adress
   * @default https://kartverket.no/om-kartverket/personvern*/
  privacyUrl?: string;
  colorPalette?: "green" | "blue" | "gray";
  children?: React.ReactNode;
};

export const FooterInline = ({
  logoLink,
  accessibilityUrl,
  privacyUrl = "https://kartverket.no/om-kartverket/personvern",
  colorPalette = "green",
  children,
}: FooterInlineProps) => {
  return (
    <Flex
      borderTop="{borders.1px}"
      borderColor="gray.500"
      mt="1rem"
      justifyContent="space-between"
      pt="10px"
      gap="2rem"
    >
      <Link href={logoLink} external={false} colorPalette={colorPalette}>
        <Logo size={130} variant="horizontal" />
      </Link>
      <Flex alignItems="center" gap="1rem" wrap="wrap">
        {children}
        {accessibilityUrl && (
          <Link
            href={accessibilityUrl}
            aria-label="Besøk denne sidens tilgjengelighetserklæring"
            fontWeight="bold"
            colorPalette={colorPalette}
          >
            Tilgjengelighetserklæring
          </Link>
        )}
        <Link
          href={privacyUrl}
          aria-label="Besøk Kartverket sin personvernserklæring"
          fontWeight="bold"
          colorPalette={colorPalette}
        >
          Personvern
        </Link>
      </Flex>
    </Flex>
  );
};
