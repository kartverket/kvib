import { Box, Heading, SimpleGrid, Text } from "@kvib/react/src";

type DocsStoryProps = {
  title: string;
  description: string | JSX.Element;
  story: any;
  isVertical?: boolean;
};

export const DocsStory = ({ title, description, story, isVertical }: DocsStoryProps) => {
  return (
    <SimpleGrid columns={[1, 1, isVertical ? 1 : 2]} spacing={[0, 0, isVertical ? 0 : "2rem"]}>
      <Box>
        {title !== "" && (
          <Heading mt="25px" size="md" as="h3" id={title}>
            {title}
          </Heading>
        )}
        {description !== "" && <Text>{description}</Text>}
      </Box>
      <Box>{story}</Box>
    </SimpleGrid>
  );
};
