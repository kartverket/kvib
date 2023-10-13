import { Flex, Link, Logo } from "@kvib/react/src";
import { colors } from "../theme/tokens";

type FooterInlineProps = {
  logoLink?: string;
  accessibilityUrl?: string;
  children?: React.ReactNode;
};

export const FooterInline = ({ logoLink, accessibilityUrl, children }: FooterInlineProps) => {
  return (
    <Flex
      borderTop={`1px solid ${colors.gray[300]}`}
      marginTop="1rem"
      justifyContent="space-between"
      paddingTop="10px"
      gap="2rem"
    >
      <Link href={logoLink} isExternal={false}>
        <Logo size={130} variant="horizontal" />
      </Link>
      <Flex alignItems="center" gap="1rem" wrap="wrap">
        {children}
        {accessibilityUrl && (
          <Link href={accessibilityUrl} aria-label="Besøk denne sidens tilgjengelighetserklæring" fontWeight="bold">
            Tilgjengelighetserklæring
          </Link>
        )}
        <Link
          href="https://kartverket.no/om-kartverket/personvern"
          aria-label="Besøk Kartverket sin personvernserklæring"
          fontWeight="bold"
        >
          Personvern
        </Link>
      </Flex>
    </Flex>
  );
};
