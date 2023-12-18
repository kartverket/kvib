import { Box, Card, CardBody, Heading, SimpleGrid, Stack, Text, Flex, Badge, Link } from "@kvib/react/src";
import { ComponentsBanner } from "./ComponentsBanner";
import { ComponentList } from "./ComponentList";

export const Components = () => {
  return (
    <Box>
      <ComponentsBanner />
      <Stack gap="3rem">
        {Object.keys(ComponentList).map((categoryKey) => {
          const category = ComponentList[categoryKey];
          return (
            <ComponentCategory key={categoryKey} title={category.name} description={category.description}>
              {Object.keys(category.components).map((componentKey) => {
                const component = category.components[componentKey];
                return (
                  <ComponentCard
                    key={componentKey}
                    title={component.name}
                    description={component.description}
                    tag={component.tag}
                    link={component.link}
                  >
                    {component.code}
                  </ComponentCard>
                );
              })}
            </ComponentCategory>
          );
        })}
      </Stack>
    </Box>
  );
};

const ComponentCard = ({
  title,
  children,
  tag,
  link,
}: {
  title: string;
  description: string;
  children: React.ReactNode;
  tag?: string;
  link: string;
}) => {
  return (
    <Card
      variant="outline"
      _hover={{ shadow: "md" }}
      _focus={{ borderColor: "green.400", boxShadow: "0 0 0 1px green" }}
      borderRadius="xl"
      size="sm"
    >
      <Badge variant="solid" colorScheme="green" css={{ position: "absolute", left: "1rem", top: "1rem" }}>
        {tag}
      </Badge>
      <Flex
        bg="blue.50"
        border="none"
        height="10rem"
        alignItems="center"
        justifyContent="center"
        padding="2rem"
        width="100%"
        borderTopRadius="xl"
        overflow="hidden"
      >
        {children}
      </Flex>

      <Stack _hover={{ boxShadow: "0 2px 0 0 green inset" }}>
        <Link fontWeight="bold" padding="1rem" href={`/?path=/docs/komponenter-${link}--docs`}>
          {title}
        </Link>
      </Stack>
    </Card>
  );
};

const ComponentCategory = ({
  title,
  children,
  description,
}: {
  title: string;
  children: React.ReactNode;
  description?: string;
}) => {
  return (
    <Box>
      <Heading as="h3" size="md">
        {title}
      </Heading>
      <Text marginBottom={"1.5rem"} fontSize="md">
        {description}
      </Text>
      <SimpleGrid columns={[2, null, 3]} spacing={5}>
        {children}
      </SimpleGrid>
    </Box>
  );
};
