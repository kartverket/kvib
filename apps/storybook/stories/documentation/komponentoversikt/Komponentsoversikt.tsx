import { CollectionItem, createListCollection } from "@chakra-ui/react";
import {
  Box,
  Card,
  Flex,
  Heading,
  Link,
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValueText,
  SimpleGrid,
  Stack,
  Text,
} from "@kvib/react";
import { ReactElement, useEffect, useRef, useState } from "react";
import { ComponentsBanner } from "../../templates/ComponentsBanner";
import { ColorPalette, Komponenter } from "./Komponenter";

const fargevalg = createListCollection({
  items: [
    { value: "green", label: "Grønn" },
    { value: "blue", label: "Blå" },
  ],
});

export const Komponentsoversikt = () => <Components />;

export const Components = () => {
  const [theme, setTheme] = useState<ColorPalette>("green");

  console.log(fargevalg);
  return (
    <Box className="sb-unstyled">
      <ComponentsBanner
        title="Komponenter"
        description="Se en full oversikt over komponentene i designsystemet."
        bg={`${theme}.500`}
      />
      <Select
        collection={fargevalg}
        size="sm"
        width="200px"
        value={theme}
        onChange={(e: React.ChangeEvent<HTMLSelectElement>) => setTheme(e.target.value as ColorPalette)}
        defaultValue={theme}
        mb="3rem"
      >
        <SelectLabel>Velg fargepalett</SelectLabel>
        <SelectTrigger>
          <SelectValueText placeholder="Velg fargepalett" />
        </SelectTrigger>
        <SelectContent>
          {fargevalg.items.map((item: CollectionItem) => (
            <SelectItem key={item.value} item={item}>
              {item.label}
            </SelectItem>
          ))}
        </SelectContent>
      </Select>
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
  link,
  category,
}: {
  title: string;
  component: ReactElement;
  colorPalette: ColorPalette;
  link: string;
  category: string;
}) => (
  <Card unstyled size="md">
    <LazyStory component={component} />

    <Stack align="center">
      <Link
        padding="1rem"
        href={`/?path=/docs/komponenter-${link}--docs`}
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
