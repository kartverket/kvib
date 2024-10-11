import {
  Badge,
  Box,
  Card,
  Flex,
  FormLabel,
  Heading,
  Icon,
  Link,
  Select,
  SimpleGrid,
  Stack,
  Text,
} from "@kvib/react/src";
import { ReactElement, useEffect, useRef, useState } from "react";
import { ComponentsBanner } from "../../templates/ComponentsBanner";
import { Komponenter } from "./Komponenter";

export const Komponentsoversikt = () => <Components />;

type ColorScheme = "green" | "blue";

export const Components = () => {
  const [theme, setTheme] = useState<ColorScheme>("green");
  return (
    <Box>
      <ComponentsBanner title="Komponenter" description="Se en full oversikt over komponentene i designsystemet." />
      <Box>
        <FormLabel htmlFor="theme">Velg fargetema</FormLabel>
        <Select value={theme} onChange={e => setTheme(e.target.value as ColorScheme)} marginBottom="2rem" maxW="12rem">
          <option value="green">Grønn</option>
          <option value="blue">Blå</option>
        </Select>
      </Box>
      <Stack gap="3rem">
        {Object.keys(Komponenter(theme)).map(categoryKey => {
          const category = Komponenter(theme)[categoryKey];
          return (
            <ComponentCategory key={categoryKey} title={category.navn} description={category.beskrivelse}>
              {Object.keys(category.komponenter).map(componentKey => {
                const component = category.komponenter[componentKey];
                return (
                  <ComponentCard
                    key={componentKey}
                    title={component.navn}
                    colorScheme={theme}
                    tag={component.tag}
                    link={component.link}
                    component={component.komponent}
                    category={categoryKey as string}
                  />
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
  colorScheme,
  tag,
  link,
  category,
}: {
  title: string;
  component: ReactElement;
  colorScheme: ColorScheme;
  tag?: string;
  link: string;
  category: string;
}) => (
  <Card variant="unstyled" size="sm">
    <Badge variant="solid" colorScheme={colorScheme} css={{ position: "absolute", left: "0.8rem", top: "0.8rem" }}>
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
        colorScheme={colorScheme}
      >
        Gå til {title} <Icon icon="arrow_forward" weight={300} size={18} aria-hidden />
      </Link>
    </Stack>
  </Card>
);

const ComponentCategory = ({
  title,
  children,
  description,
}: {
  title: string;
  children: React.ReactNode;
  description?: string;
}) => (
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

// Don't render the story until it's visible in the viewport
const LazyStory = ({ component }: { component: ReactElement }) => {
  const [isVisible, setIsVisible] = useState(false);
  const storyRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      entries => {
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
