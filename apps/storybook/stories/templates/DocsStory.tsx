import { Box, Heading, SimpleGrid, Text } from "@kvib/react/src";

type DocsStoryProps = {
  title: string;
  description: string;
  story: any;
};

export const DocsStory = ({ title, description, story }: DocsStoryProps) => {
  return (
    <SimpleGrid columns={2} spacing="2rem">
      <Box margin="25px 0 40px">
        <Heading size="md" as="h3">
          {title}
        </Heading>
        <Text>{description}</Text>
      </Box>
      <Box>{story}</Box>
    </SimpleGrid>
  );
};
