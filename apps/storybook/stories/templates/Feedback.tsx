import { Button, Card, CardBody, Flex, Text, Image } from "@kvib/react/src";

type FeedbackProps = {
  component: string;
  width?: string;
};

export const Feedback = ({ component, width }: FeedbackProps) => {
  const issueUrl = `https://github.com/kartverket/kvib/issues/new?labels=innspill+%F0%9F%A5%B0%2Ckomponenter+%F0%9F%A7%A9&projects=&template=update-component.yml&title=%5BInnspill+til+komponent%5D%3A+%3C${component}%20/%3E`;

  return (
    <Card
      variant="unstyled"
      backgroundColor="green.50"
      width={width || ["fit-content", "fit-content", "auto"]}
      margin={"2rem 0"}
      padding={"1rem"}
    >
      <CardBody
        display="flex"
        flexDirection={["column", "column", "row"]}
        gap="1rem"
        justifyContent="space-between"
        padding="1rem"
        alignItems={["flex-start", "flex-start", "center"]}
      >
        <Flex gap=".5rem">
          <Text margin="0" fontWeight="medium" fontSize="md">
            Har du ris, ros eller innspill?
          </Text>
        </Flex>
        <Flex gap=".5rem" alignItems="center" flexWrap="wrap">
          <Button href={issueUrl} as="a" target="_blank" colorScheme="green" variant="tertiary" size="xs">
            Send inn et forslag
          </Button>
          <Button
            as="a"
            href="/?path=/docs/info-bidra-hurtigveiledning--docs"
            colorScheme="green"
            variant="tertiary"
            size="xs"
          >
            Bidra med PR
          </Button>
        </Flex>
      </CardBody>
    </Card>
  );
};
