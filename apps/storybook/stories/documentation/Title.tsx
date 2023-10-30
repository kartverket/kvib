import { Card, CardBody, Text, Image } from "@kvib/react/src";

export const Title = () => {
  return (
    <Card h="350px" backgroundImage="assets/TitleBg.svg" marginBottom="2rem" padding="0 1rem">
      <CardBody
        display="flex"
        flexDirection="column"
        justifyContent="flex-end"
        width={["100%", "90%", "70%"]}
        marginBottom="1rem"
      >
        <Image width={["80%", "60%"]} src="assets/KVDSLogo.svg" />
        <Text color="white" fontSize="lg" fontWeight={"medium"}>
          Designsystemet tilbyr komponenter til våre designere og utviklere, slik at de kan jobbe mer effektivt mot å
          skape enkle, intuitive og knallbra opplevelser for brukere av Kartverkets tjenester.
        </Text>
      </CardBody>
    </Card>
  );
};
