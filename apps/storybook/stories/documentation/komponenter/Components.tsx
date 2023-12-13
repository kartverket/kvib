import {
  Box,
  Button,
  Card,
  CardBody,
  Heading,
  IconButton,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Textarea,
  Text,
  Flex,
  Search,
  SearchAsync,
  Badge,
} from "@kvib/react/src";
import { ComponentsBanner } from "./ComponentsBanner";

interface ComponentProps {
  children?: string;
  icon?: string;
  placeholder?: string;
}

interface ComponentDetails {
  name: string;
  description: string;
  code: JSX.Element;
  props: ComponentProps;
  tag?: string;
  link: string;
}

interface Category {
  name: string;
  description?: string;
  components: Record<string, ComponentDetails>;
}

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
      as="a"
      variant="outline"
      _hover={{ shadow: "md" }}
      _focus={{ borderColor: "green.400", boxShadow: "0 0 0 1px green" }}
      borderRadius="xl"
      size="sm"
      href={`/?path=/docs/komponenter-${link}--docs`}
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
      >
        {children}
      </Flex>
      <CardBody>
        <Stack>
          <Heading as="h3" size="sm">
            {title}
          </Heading>
        </Stack>
      </CardBody>
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

// SearchAsync mock data
const fruits = [
  { label: "Eple", value: "eple" },
  { label: "Banan", value: "banan" },
  { label: "Kirsebær", value: "kirsebær" },
  { label: "Pære", value: "pære" },
  { label: "Svarthyll", value: "svarthyll" },
  { label: "Mango", value: "mango" },
  { label: "Ananas", value: "ananas" },
  { label: "Kiwi", value: "kiwi" },
  { label: "Papaya", value: "papaya" },
  { label: "Blåbær", value: "blåbær" },
  { label: "Jordbær", value: "jordbær" },
  { label: "Appelsin", value: "appelsin" },
  { label: "Druer", value: "druer" },
  { label: "Sitron", value: "sitron" },
  { label: "Melon", value: "melon" },
];

const mockLoadOptions = (inputValue: string, callback: (options: typeof fruits) => void) => {
  setTimeout(() => {
    const filteredFruits = fruits.filter((fruit) => fruit.label.toLowerCase().includes(inputValue.toLowerCase()));
    callback(filteredFruits);
  }, 500);
};

const handleChange = (selectedOption: any) => {
  console.log("Selected Option:", selectedOption);
};

const ComponentList: Record<string, Category> = {
  Buttons: {
    name: "Knapper",
    components: {
      Button: {
        name: "Button",
        description: "Button",
        code: <Button>Button</Button>,
        props: {
          children: "Button",
        },
        link: "button",
      },
      IconButton: {
        name: "IconButton",
        description: "IconButton",
        code: (
          <IconButton aria-label={""} icon="10k">
            IconButton
          </IconButton>
        ),
        props: {
          icon: "arrowRight",
          children: "IconButton",
        },
        link: "icon-button",
      },
    },
  },
  Form: {
    name: "Skjemaelementer",
    description:
      "Skjemaelementer er komponenter som brukes i skjemaer. De kan brukes alene eller i kombinasjon med andre komponenter.",
    components: {
      Input: {
        name: "Input",
        description: "Input",
        code: <Input placeholder="Input" />,
        props: {
          placeholder: "Input",
        },
        link: "input-input",
      },
      Select: {
        name: "Select",
        description: "Select",
        code: <Select placeholder="Select" />,
        props: {
          placeholder: "Select",
        },
        link: "",
      },
      Textarea: {
        name: "Textarea",
        description: "Textarea",
        code: <Textarea placeholder="Textarea" />,
        props: {
          placeholder: "Textarea",
        },
        link: "",
      },
    },
  },
  Search: {
    name: "Søk",
    components: {
      Search: {
        name: "Search",
        description: "Search",
        code: <Search placeholder="Search" />,
        props: {
          placeholder: "Search",
        },
        link: "",
      },
      SearchAsync: {
        name: "SearchAsync",
        description: "SearchAsync",
        code: <SearchAsync loadOptions={mockLoadOptions} onChange={handleChange} placeholder="SearchAsync" />,
        props: {
          placeholder: "SearchAsync",
        },
        link: "",
        tag: "beta",
      },
    },
  },
};
