import { Card, CardBody, Text, Image } from "@kvib/react/src";

export const Banner = () => {
  return (
    <Card h="400px" backgroundSize="cover" backgroundImage="assets/banner.svg" marginBottom="2rem" padding="0 2rem">
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width={["100%", "80%", "45%"]}
        margin="1rem 0"
      >
        <Image src="assets/KVDSLogo.svg" maxWidth="16rem" />
        <Text color="white" fontSize="md" fontWeight="medium" marginTop="1.5rem" marginBottom="0">
          Designsystemet består av gjenbrukbare komponenter, visuelle retningslinjer og mønstre til bruk for alle i
          Kartverket.
        </Text>
        <Text color="white" fontSize="md" fontWeight="medium">
          Slik sikrer vi visuell konsistens og grunnleggende universell utforming på tvers av tjenester og produkter –
          alt bygget på en felles grunnmur.
        </Text>
      </CardBody>
    </Card>
  );
};
