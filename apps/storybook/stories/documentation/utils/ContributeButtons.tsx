import { Button, Flex } from "@kvib/react/src";

export const ContributeButtons = () => {
  return (
    <Flex gap="18px">
      <Button variant="secondary" size="lg" leftIcon="mail">
        Send en mail
      </Button>
      <Button variant="secondary" size="lg">
        Bli med i slack-kanalen
      </Button>
      <Button variant="secondary" size="lg" leftIcon="polyline">
        Lag en pull-request på github
      </Button>
    </Flex>
  );
};
