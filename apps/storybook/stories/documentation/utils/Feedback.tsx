import { HStack, Link, Text } from "@kvib/react";
import { Tekstblokk } from "./Tekstblokk";

export const Feedback = () => (
  <Tekstblokk tittel="Vil du bidra?">
    <Text fontSize={"md"} fontWeight={400} m="0" p="0">
      Vi setter pris på alle tilbakemeldinger, ideer og innspill, så ikke nøl med å ta kontakt.
      <HStack gap="2rem" pt="1rem">
        <Link
          href="mailto:kvib-feedbacks-aaaahwh252gnftmofucpaa47ca@kartverketgroup.slack.com"
          fontSize={"md"}
          fontWeight={400}
          m="0"
          p="0"
        >
          Send en mail
        </Link>
        <Link
          href="https://slack.com/app_redirect?channel=gen-designsystem"
          fontSize={"md"}
          fontWeight={400}
          m="0"
          p="0"
        >
          Bli med i Slack-kanalen
        </Link>
        <Link href="https://github.com/kartverket/kvib" fontSize={"md"} fontWeight={400} m="0" p="0">
          Lag en pull request på Github
        </Link>
      </HStack>
    </Text>
  </Tekstblokk>
);
