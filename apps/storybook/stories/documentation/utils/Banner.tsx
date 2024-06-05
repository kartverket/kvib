import { Card, CardBody, Text } from "@kvib/react/src";

type BannerProps = {
  children: React.ReactNode;
};

export const Banner = ({ children }: BannerProps) => {
  return (
    <Card
      variant="unstyled"
      backgroundSize="contain"
      backgroundPosition="top"
      backgroundRepeat="no-repeat"
      backgroundImage="assets/banner-green.svg"
      backgroundColor="green.500"
      marginBottom="1rem"
      padding="3rem"
      className="frontpage-banner"
    >
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width={["100%", "80%", "45%"]}
        margin="2rem 0 6rem 0"
      >
        <Text color="white" fontSize="3xl" fontWeight="bold" marginTop="0" marginBottom="1rem">
          Alt du trenger på ett sted
        </Text>
        <Text color="white" fontSize="md" fontWeight="medium" marginTop="1.5rem" marginBottom="0">
          Designsystemet består av gjenbrukbare komponenter, visuelle retningslinjer og mønstre til bruk for alle i
          Kartverket.
        </Text>
        <Text color="white" fontSize="md" fontWeight="medium">
          Slik sikrer vi visuell konsistens og grunnleggende universell utforming på tvers av tjenester og produkter –
          alt bygget på én felles grunnmur.
        </Text>
      </CardBody>
      {children}
    </Card>
  );
};
