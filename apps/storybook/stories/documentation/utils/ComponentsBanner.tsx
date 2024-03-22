import { Card, CardBody, Text } from "@kvib/react/src";

export const ComponentsBanner = () => {
  return (
    <Card h="200px" backgroundSize="cover" backgroundColor="green.500" marginBottom="2rem" padding="0 2rem">
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="center"
        width={["100%", "80%", "45%"]}
        margin="1rem 0"
      >
        <Text color="white" fontSize="4xl" fontWeight="bold">
          Komponenter
        </Text>
        <Text color="white" fontSize="md" fontWeight="medium" marginTop="1rem" marginBottom="0">
          Lær mer om komponentene i designsystemet og hvordan du kan bruke dem i din løsning.
        </Text>
      </CardBody>
    </Card>
  );
};
