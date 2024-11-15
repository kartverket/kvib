import { Card, CardBody, CardProps, Text } from "@kvib/react/src";

interface ComponentBannerProps extends CardProps {
  title: string;
  description?: string;
  hasCodeBelow?: boolean;
}

export const ComponentsBanner = ({ title, description, hasCodeBelow, ...props }: ComponentBannerProps) => {
  return (
    <Card
      variant="subtle"
      bg="green.500"
      p="1rem 2.5rem"
      mb={hasCodeBelow ? "0" : "2rem"}
      className={hasCodeBelow ? "ComponentsBanner" : ""}
      {...props}
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
