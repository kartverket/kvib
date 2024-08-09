import { Link, Flex, Icon } from "@kvib/react/src";

export const ContributeLinks = () => {
  return (
    <Flex gap="18px">
      <Link href="mailto:kvib-feedbacks-aaaahwh252gnftmofucpaa47ca@kartverketgroup.slack.com">
        <Icon icon="mail" />
        Send en mail
      </Link>
      <Link href="https://slack.com/app_redirect?channel=gen-designsystem">
        <Icon icon="tag" />
        Bli med i slack-kanalen
      </Link>
      <Link href="https://github.com/kartverket/kvib">
        <Icon icon="polyline" />
        Lag en pull-request på github
      </Link>
    </Flex>
  );
};
