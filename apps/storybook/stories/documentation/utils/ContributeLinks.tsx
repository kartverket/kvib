import { Flex, FlexProps, Icon, Link } from "@kvib/react";

export const ContributeLinks = (props: FlexProps) => {
  return (
    <Flex gap="18px" {...props}>
      <Link
        href="mailto:kvib-feedbacks-aaaahwh252gnftmofucpaa47ca@kartverketgroup.slack.com"
        fontSize={"lg"}
        fontWeight={400}
        m="0"
        p="0"
      >
        <Icon icon="mail" />
        Send en mail
      </Link>
      <Link href="https://slack.com/app_redirect?channel=gen-designsystem" fontSize={"lg"} fontWeight={400} m="0" p="0">
        <Icon icon="tag" />
        Bli med i slack-kanalen
      </Link>
      <Link href="https://github.com/kartverket/kvib" fontSize={"lg"} fontWeight={400} m="0" p="0">
        <Icon size={40} icon="polyline" />
        Lag en pull-request på github
      </Link>
    </Flex>
  );
};
