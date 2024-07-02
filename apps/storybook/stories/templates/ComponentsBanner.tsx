import { Card, CardBody, Text } from "@kvib/react/src";

type ComponentBannerProps = {
  title: string;
  description?: string;
  hasCodeBelow?: boolean;
};

export const ComponentsBanner = ({ title, description, hasCodeBelow }: ComponentBannerProps) => {
  return (
    <Card
      variant="unstyled"
      backgroundColor="green.500"
      padding="1rem 2.5rem"
      marginBottom={hasCodeBelow ? "" : "2rem"}
      className={hasCodeBelow ? "ComponentsBanner" : ""}
    >
      <CardBody display="flex" flexDirection="column" justifyContent="center" margin="1rem 0">
        <Text color="white" fontSize="4xl" fontWeight="bold">
          {title}
        </Text>
        <Text color="white" fontSize="md" fontWeight="medium" marginTop="1rem">
          {description}
        </Text>
      </CardBody>
    </Card>
  );
};
