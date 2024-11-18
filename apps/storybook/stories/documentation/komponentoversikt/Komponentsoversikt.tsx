import {
  Badge,
  Box,
  Card,
  Field,
  Flex,
  Heading,
  Link,
  NativeSelect,
  NativeSelectField,
  SimpleGrid,
  Stack,
  Text,
} from "@kvib/react/src";
import { ChangeEvent, ReactElement, useEffect, useRef, useState } from "react";
import { ComponentsBanner } from "../../templates/ComponentsBanner";
import { Komponenter } from "./Komponenter";
import { ColorPalette } from "./StoryRendering";

export const Komponentsoversikt = () => <Components />;

export const Components = () => {
  const [theme, setTheme] = useState<ColorPalette>("green");
  return (
    <Box className="sb-unstyled">
      <ComponentsBanner
        title="Komponenter"
        description="Se en full oversikt over komponentene i designsystemet."
        bg={`${theme}.500`}
      />
      <Field label="Velg fargetema">
        <NativeSelect size="md" width="240px">
          <NativeSelectField
            value={theme}
            onChange={(e: ChangeEvent<HTMLSelectElement>) => setTheme(e.target.value as ColorPalette)}
            marginBottom="2rem"
            maxW="12rem"
          >
            <option value="green">Grønn</option>
            <option value="blue">Blå</option>
          </NativeSelectField>
        </NativeSelect>
      </Field>
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
                    colorPalette={theme}
                    tag={component.tag}
                    link={component.link}
                    component={component.story}
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
  colorPalette,
  tag,
  link,
  category,
}: {
  title: string;
  component: ReactElement;
  colorPalette: ColorPalette;
  tag?: string;
  link: string;
  category: string;
}) => (
  <Card unstyled size="md">
    <Badge variant="solid" colorPalette={colorPalette} css={{ position: "absolute", left: "0.8rem", top: "0.8rem" }}>
      {tag}
    </Badge>
    <LazyStory component={component} />

    <Stack align="center">
      <Link
        padding="1rem"
        href={`/?path=/docs/${category}-${link}--docs`}
        alignItems="center"
        colorPalette={colorPalette}
      >
        Gå til {title}
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
  children: ReactElement[];
  description?: string;
}) => (
  <Box>
    <Heading as="h3" size="md" id={title}>
      {title}
    </Heading>
    <Text marginBottom={"1.5rem"} fontSize="md">
      {description}
    </Text>
    <SimpleGrid columns={[2, null, 3]} gap={5}>
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

  return (
    <Flex
      ref={storyRef}
      bg="gray.50"
      border="none"
      height="11rem"
      justifyContent="center"
      alignItems="center"
      padding="2rem"
      width="100%"
      borderRadius="md"
      overflow="hidden"
      boxSizing="border-box"
    >
      {isVisible && component}
    </Flex>
  );
};
