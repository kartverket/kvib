import { Box, Heading, SimpleGrid, Text } from "@kvib/react/src";

type DocsStoryProps = {
  title: string;
  description: string;
  story: any;
};

export const DocsStory = ({ title, description, story }: DocsStoryProps) => {
  return (
    <SimpleGrid columns={[1, 1, 2]} spacing={[0, 0, "2rem"]}>
      <Box marginTop="25px">
        <Heading size="md" as="h3">
          {title}
        </Heading>
        <Text>{description}</Text>
      </Box>
      <Box>{story}</Box>
    </SimpleGrid>
  );
};
