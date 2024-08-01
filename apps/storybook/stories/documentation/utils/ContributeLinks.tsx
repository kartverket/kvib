import { Link, Flex, Icon } from "@kvib/react/src";

// export const ContributeButtons = () => {
//   return (
//     <Flex gap="18px">
//       <Button variant="tertiary" size="lg" leftIcon="mail">
//         Send en mail
//       </Button>
//       <Button variant="tertiary" size="lg" leftIcon="tag">
//         Bli med i slack-kanalen
//       </Button>
//       <Button variant="tertiary" size="lg" leftIcon="polyline">
//         Lag en pull-request på github
//       </Button>
//     </Flex>
//   );
// };

export const ContributeLinks = () => {
  return (
    <Flex gap="18px">
      <Link size="lg">
        <Icon icon="mail" />
        Send en mail
      </Link>
      <Link size="lg">
        <Icon icon="tag" />
        Bli med i slack-kanalen
      </Link>
      <Link size="lg">
        <Icon icon="polyline" />
        Lag en pull-request på github
      </Link>
    </Flex>
  );
};
