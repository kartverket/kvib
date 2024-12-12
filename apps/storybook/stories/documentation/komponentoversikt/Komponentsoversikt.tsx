import { CollectionItem, createListCollection } from "@chakra-ui/react";
import {
  Box,
  Card,
  Center,
  Link,
  Select,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValueText,
  SimpleGrid,
  Stack,
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
  const komponenter = Object.keys(Komponenter(theme))
    .flatMap(categoryKey => {
      const category = Komponenter(theme)[categoryKey];
      return Object.keys(category.komponenter).map(componentKey => category.komponenter[componentKey]);
    })
    .sort((a, b) => a.navn.localeCompare(b.navn));
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
        <SimpleGrid columns={[1, 2, 3]} gap="2rem">
          {komponenter.map(component => {
            return (
              <ComponentCard
                key={component.navn}
                title={component.navn}
                colorPalette={theme}
                link={component.link}
                component={component.story}
              />
            );
          })}
        </SimpleGrid>
      </Stack>
    </Box>
  );
};

const ComponentCard = ({
  title,
  component,
  colorPalette,
  link,
}: {
  title: string;
  component: ReactElement;
  colorPalette: ColorPalette;
  link: string;
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
    <Center
      ref={storyRef}
      bg="gray.50"
      border="none"
      height="11rem"
      padding="2rem"
      borderRadius="md"
      overflow="hidden"
      className="komp-story"
    >
      {isVisible && component}
    </Center>
  );
};
