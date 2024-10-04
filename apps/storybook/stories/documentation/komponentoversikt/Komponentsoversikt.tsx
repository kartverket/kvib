import { Badge, Box, Card, Flex, Heading, Icon, Link, SimpleGrid, Stack, Text } from "@kvib/react/src";
import { ReactElement, useEffect, useRef, useState } from "react";
import { ComponentsBanner } from "../../templates/ComponentsBanner";
import { Komponenter } from "./Komponenter";

export const Komponentsoversikt = () => {
  return <Components />;
};

export const Components = () => {
  return (
    <Box>
      <ComponentsBanner title="Komponenter" description="Se en full oversikt over komponentene i designsystemet." />
      <Stack gap="3rem">
        {Object.keys(Komponenter).map((categoryKey) => {
          const category = Komponenter[categoryKey];
          return (
            <ComponentCategory key={categoryKey} title={category.navn} description={category.beskrivelse}>
              {Object.keys(category.komponenter).map((componentKey) => {
                const component = category.komponenter[componentKey];
                return (
                  <ComponentCard
                    key={componentKey}
                    title={component.navn}
                    description={component.beskrivelse}
                    tag={component.tag}
                    link={component.link}
                    component={component.komponent}
                    category={category.navn}
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
  component,
  tag,
  link,
  category,
}: {
  title: string;
  description: string;
  component: ReactElement;
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
        justifyContent={"center"}
        alignItems="center"
        padding="2rem"
        width="100%"
        borderRadius="md"
        overflow="hidden"
      >
        {/* The width needs to be set because some of the stories fills the container */}
        <LazyStory component={component} />
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
          Gå til {title} <Icon icon="arrow_forward" weight={300} size={18} aria-hidden />
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
const LazyStory = ({ component }: { component: ReactElement }) => {
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
  }, [component]);

  return <div ref={storyRef}>{isVisible && component}</div>;
};
