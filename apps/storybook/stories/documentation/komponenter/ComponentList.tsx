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
  Table,
  Code,
  Alert,
  Container,
  Grid,
  Avatar,
  Icon,
  Image,
  NumberInput,
  Breadcrumb,
  Tabs,
  Drawer,
  Tooltip,
  CloseButton,
  Checkbox,
  Datepicker,
  Timepicker,
  Editable,
  Radio,
  RangeSlider,
  Slider,
  PinInput,
  PinInputField,
  FileUpload,
  FormControl,
  FormLabel,
  Tag,
  Stat,
  Kbd,
  List,
  ListItem,
  UnorderedList,
  Accordion,
  Progress,
  CircularProgress,
  Skeleton,
  Spinner,
  Stepper,
  Step,
  AspectRatio,
  Wrap,
  Center,
  Highlight,
  Header,
  Footer,
  Divider,
  Logo,
  Link,
} from "@kvib/react/src";

interface ComponentProps {
  children?: string;
  icon?: string;
  placeholder?: string;
}

interface ComponentDetails {
  name: string;
  description: string;
  code: JSX.Element;
  props?: ComponentProps;
  tag?: string;
  link: string;
}

interface Category {
  name: string;
  description?: string;
  components: Record<string, ComponentDetails>;
}

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

export const ComponentList: Record<string, Category> = {
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
      CloseButteon: {
        name: "CloseButton",
        description: "CloseButton",
        code: <CloseButton />,
        props: undefined,
        link: "close-button",
      },
    },
  },
  Form: {
    name: "Skjemaelementer",
    description:
      "Skjemaelementer er komponenter som brukes i skjemaer. De kan brukes alene eller i kombinasjon med andre komponenter.",
    components: {
      FormControl: {
        name: "FormControl",
        description: "FormControl",
        code: (
          <FormControl>
            <FormLabel>FormControl</FormLabel>
            <Input placeholder="FormControl" />
          </FormControl>
        ),
        props: undefined,
        link: "",
      },
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
      NumberInput: {
        name: "NumberInput",
        description: "NumberInput",
        code: <NumberInput placeholder="NumberInput" />,
        props: {
          placeholder: "NumberInput",
        },
        link: "",
      },
      CheckBox: {
        name: "CheckBox",
        description: "CheckBox",
        code: <Checkbox isChecked />,
        props: undefined,
        link: "",
      },
      DatePicker: {
        name: "DatePicker",
        description: "DatePicker",
        code: <Datepicker />,
        props: undefined,
        link: "",
      },
      TimePicker: {
        name: "TimePicker",
        description: "TimePicker",
        code: <Timepicker />,
        props: undefined,
        link: "",
      },
      Editable: {
        name: "Editable",
        description: "Editable",
        code: <Editable>Editable</Editable>,
        props: undefined,
        link: "",
      },
      Radio: {
        name: "Radio",
        description: "Radio",
        code: <Radio>Radio</Radio>,
        props: undefined,
        link: "",
      },
      RangeSlider: {
        name: "RangeSlider",
        description: "RangeSlider",
        code: <RangeSlider />,
        props: undefined,
        link: "",
      },
      Slider: {
        name: "Slider",
        description: "Slider",
        code: <Slider />,
        props: undefined,
        link: "",
      },
      PinInput: {
        name: "PinInput",
        description: "PinInput",
        code: (
          <PinInput>
            <PinInputField />
            <PinInputField />
            <PinInputField />
            <PinInputField />
          </PinInput>
        ),
        props: undefined,
        link: "",
      },
      FileUpload: {
        name: "FileUpload",
        description: "FileUpload",
        code: <FileUpload />,
        props: undefined,
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
  DataDisplay: {
    name: "Datavisning",
    components: {
      Badge: {
        name: "Badge",
        description: "",
        code: <Badge>Badge</Badge>,
        props: undefined,
        link: "",
      },
      Table: {
        name: "Table",
        description: "",
        code: <Table>Table</Table>,
        props: undefined,
        link: "",
      },
      Code: {
        name: "Code",
        description: "",
        code: <Code>Code</Code>,
        props: undefined,
        link: "",
      },
      Tag: {
        name: "Tag",
        description: "",
        code: <Tag>Tag</Tag>,
        props: undefined,
        link: "",
      },
      Stat: {
        name: "Stat",
        description: "",
        code: <Stat>Stat</Stat>,
        props: undefined,
        link: "",
      },
      Card: {
        name: "Card",
        description: "",
        code: (
          <Card>
            <CardBody>Card</CardBody>
          </Card>
        ),
        props: undefined,
        link: "",
      },
      Kbd: {
        name: "Kbd",
        description: "",
        code: <Kbd>Kbd</Kbd>,
        props: undefined,
        link: "",
      },
      List: {
        name: "List",
        description: "",
        code: (
          <UnorderedList>
            <ListItem>Punkt</ListItem>
            <ListItem>Punkt</ListItem>
          </UnorderedList>
        ),
        props: undefined,
        link: "",
      },
      Accordion: {
        name: "Accordion",
        description: "",
        code: <Accordion>Accordion</Accordion>,
        props: undefined,
        link: "",
      },
    },
  },
  Feedback: {
    name: "Tilbakemelding",
    components: {
      Alert: {
        name: "Alert",
        description: "",
        code: <Alert>Alert</Alert>,
        props: undefined,
        link: "",
      },
      Toast: {
        name: "Toast",
        description: "",
        code: <Box>Todo</Box>,
        props: undefined,
        link: "",
      },
      Progress: {
        name: "Progress",
        description: "",
        code: <Progress>Progress</Progress>,
        props: undefined,
        link: "",
      },
      CircularProgress: {
        name: "CircularProgress",
        description: "",
        code: <CircularProgress>Progress</CircularProgress>,
        props: undefined,
        link: "",
      },
      Skeleton: {
        name: "Skeleton",
        description: "",
        code: <Skeleton>Skeleton</Skeleton>,
        props: undefined,
        link: "",
      },
      Spinner: {
        name: "Spinner",
        description: "",
        code: <Spinner />,
        props: undefined,
        link: "",
      },
      Stepper: {
        name: "Stepper",
        description: "",
        code: (
          <Stepper index={0}>
            <Step></Step>
          </Stepper>
        ),
        props: undefined,
        link: "",
      },
    },
  },
  Layout: {
    name: "Layout",
    components: {
      Box: {
        name: "Box",
        description: "",
        code: <Box>Box</Box>,
        props: undefined,
        link: "",
      },
      Container: {
        name: "Container",
        description: "",
        code: <Container>Container</Container>,
        props: undefined,
        link: "",
      },
      Flex: {
        name: "FlexBox",
        description: "",
        code: <Flex>Flex</Flex>,
        props: undefined,
        link: "",
      },
      Grid: {
        name: "Grid",
        description: "",
        code: <Grid>Grid</Grid>,
        props: undefined,
        link: "",
      },
      AspectRatio: {
        name: "AspectRatio",
        description: "",
        code: (
          <AspectRatio>
            <Box>AspectRatio</Box>
          </AspectRatio>
        ),
        props: undefined,
        link: "",
      },
      Stack: {
        name: "Stack",
        description: "",
        code: <Stack>Stack</Stack>,
        props: undefined,
        link: "",
      },
      SimpleGrid: {
        name: "SimpleGrid",
        description: "",
        code: <SimpleGrid>SimpleGrid</SimpleGrid>,
        props: undefined,
        link: "",
      },
      Wrap: {
        name: "Wrap",
        description: "",
        code: <Wrap>Wrap</Wrap>,
        props: undefined,
        link: "",
      },
      Center: {
        name: "Center",
        description: "",
        code: <Center>Center</Center>,
        props: undefined,
        link: "",
      },
    },
  },
  Typography: {
    name: "Typografi",
    components: {
      Heading: {
        name: "Heading",
        description: "",
        code: <Heading>Heading</Heading>,
        props: undefined,
        link: "",
      },
      Text: {
        name: "Text",
        description: "",
        code: <Text>Text</Text>,
        props: undefined,
        link: "",
      },
      Highlight: {
        name: "Highlight",
        description: "",
        code: <Highlight query="Fremhev">Fremhev ord</Highlight>,
        props: undefined,
        link: "",
      },
    },
  },
  PageElements: {
    name: "Sideelementer",
    components: {
      Logo: {
        name: "Logo",
        description: "",
        code: <Logo />,
        props: undefined,
        link: "",
      },
      Header: {
        name: "Header",
        description: "",
        code: <Header></Header>,
        props: undefined,
        link: "header",
      },
      Footer: {
        name: "Footer",
        description: "",
        code: <Footer excludeContactInfo excludeHelp excludeNews excludeOpeningHours excludeSocialMedia />,
        props: undefined,
        link: "footer",
      },
      Divider: {
        name: "Divider",
        description: "",
        code: <Divider />,
        props: undefined,
        link: "divider",
      },
    },
  },
  Media: {
    name: "Media",
    components: {
      Image: {
        name: "Image",
        description: "",
        code: (
          <Image src="https://images.unsplash.com/photo-1619468129361-605ebea04b44?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2942&q=80" />
        ),
        props: undefined,
        link: "",
      },
      Icon: {
        name: "Icon",
        description: "",
        code: <Icon icon={"function"} />,
        props: undefined,
        link: "",
      },
      Avatar: {
        name: "Avatar",
        description: "",
        code: <Avatar>Avatar</Avatar>,
        props: undefined,
        link: "",
      },
    },
  },

  Navigation: {
    name: "Navigasjon",
    components: {
      Breadcrumbs: {
        name: "Breadcrumb",
        description: "",
        code: <Breadcrumb>Breadcrumb</Breadcrumb>,
        link: "breadcrumb",
      },
      Tabs: {
        name: "Tabs",
        description: "",
        code: <Box>Todo</Box>,
        link: "tabs",
      },
      Menu: {
        name: "Menu",
        description: "",
        code: <Box>Todo</Box>,
        link: "menu",
      },
      Link: {
        name: "Link",
        description: "",
        code: <Link>Link</Link>,
        link: "link",
      },
      LinkOverlay: {
        name: "LinkOverlay",
        description: "",
        code: <Box>Todo</Box>,
        link: "link-overlay",
      },
      SkipNav: {
        name: "SkipNav",
        description: "",
        code: <Box>Todo</Box>,
        link: "skip-nav",
      },
    },
  },
  Popups: {
    name: "Popups",
    components: {
      Tooltip: {
        name: "Tooltip",
        description: "",
        code: <Tooltip label="Tooltip">Tooltip</Tooltip>,
        link: "",
      },
      Modal: {
        name: "Modal",
        description: "",
        code: <Box>Todo</Box>,
        link: "",
      },
      Popover: {
        name: "Popover",
        description: "",
        code: <Box>Todo</Box>,
        link: "",
      },
      AlertDialog: {
        name: "Alert Dialog",
        description: "",
        code: <Box>Todo</Box>,
        link: "",
      },
      Drawer: {
        name: "Drawer",
        description: "",
        code: <Box>Todo</Box>,
        link: "",
      },
    },
  },
  Others: {
    name: "Annet",
    components: {
      VisuallyHidden: {
        name: "Visually Hidden",
        description: "",
        code: <Box>Todo</Box>,
        link: "",
      },
      ShowHide: {
        name: "Show/Hide",
        description: "",
        code: <Box>Todo</Box>,
        link: "",
      },
      SkipNav: {
        name: "Skip Nav",
        description: "",
        code: <Box>Todo</Box>,
        link: "",
      },
      Portal: {
        name: "Portal",
        description: "",
        code: <Box>Todo</Box>,
        link: "",
      },
    },
  },
};
