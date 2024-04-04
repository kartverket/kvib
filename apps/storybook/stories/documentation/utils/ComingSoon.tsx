import { Card, CardBody, Text } from "@kvib/react/src";

export const ComingSoon = () => {
  return (
    <Card h="400px" backgroundSize="cover" backgroundImage="assets/banner.svg" marginBottom="2rem" padding="0 2rem">
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width={["100%", "80%", "45%"]}
        margin="1rem 0"
      >
        <Text color="white" fontSize="lg" marginTop="1.5rem" marginBottom="0" as={"b"}>
          Denne siden er under utvikling. <br />
          Mer informasjon kommer snart.
        </Text>
        <Text color="white" fontSize="md" fontWeight="medium" marginTop="1.5rem" marginBottom="0">
          Takk for at du besøker oss! <br />
          Vi jobber hardt med å skape en spennende og nyttig plattform for designere og utviklere.
        </Text>
        <Text color="white" fontSize="md" fontWeight="medium" marginTop="1.5rem" marginBottom="0">
          Vennligst kom tilbake senere for å oppdage hva vi har på lager for deg. Din tålmodighet og interesse blir satt
          pris på.
        </Text>
      </CardBody>
    </Card>
  );
};
