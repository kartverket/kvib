import { Box, Card, Heading, SimpleGrid, Stack, Text, Flex, Badge, Link, Icon } from "@kvib/react/src";
import { ComponentsBanner } from "../../templates/ComponentsBanner";
import { ComponentList } from "./ComponentList";
import { Story } from "@storybook/blocks";
import { useEffect, useRef, useState } from "react";

export const Components = () => {
  return (
    <Box>
      <ComponentsBanner title="Komponenter" description="Se en full oversikt over komponentene i designsystemet." />
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
                    story={component.code}
                    category={category.name}
                  ></ComponentCard>
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
  story,
  tag,
  link,
  category,
}: {
  title: string;
  description: string;
  story: string;
  tag?: string;
  link: string;
  category: string;
}) => {
  return (
    <Card variant="unstyled" size="sm">
      <Badge variant="solid" colorScheme="green" css={{ position: "absolute", left: "0.8rem", top: "0.8rem" }}>
        {tag}
      </Badge>
      <Flex
        bg="gray.50"
        border="none"
        height="10rem"
        alignItems="center"
        padding="2rem"
        width="100%"
        borderRadius="md"
        overflow="hidden"
      >
        {/* The width needs to be set because some of the stories fills the container */}
        <Box width="100%" maxH="100%">
          <LazyStory id={story} key={story} />
        </Box>
      </Flex>

      <Stack align="center">
        <Link
          padding="1rem"
          href={`/?path=/docs/${category}-${link}--docs`}
          display="flex"
          alignItems="center"
          gap="4px"
          textDecoration="none"
        >
          Gå til {title} <Icon icon="arrow_forward" className="docs-icon" weight={300} size={18} aria-hidden />
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
      <Heading as="h3" size="md" id={title}>
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

// Don't render the story until it's visible in the viewport
const LazyStory = ({ id }: { id: string }) => {
  const [isVisible, setIsVisible] = useState(false);
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Optionally disconnect once visible
        }
      },
      { threshold: 0.1 },
    ); // Adjust threshold as needed

    if (storyRef.current) {
      observer.observe(storyRef.current);
    }

    return () => {
      if (storyRef.current) {
        observer.disconnect();
      }
    };
  }, [id]);

  return <div ref={storyRef}>{isVisible && <Story id={id} />}</div>;
};
