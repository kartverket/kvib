import {
  Accordion,
  AccordionButton,
  AccordionItem,
  AccordionPanel,
  Avatar,
  Badge,
  Box,
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  Button,
  Card,
  CardBody,
  Center,
  Checkbox,
  CloseButton,
  Code,
  Container,
  Datepicker,
  Divider,
  Editable,
  EditableInput,
  EditablePreview,
  FileUpload,
  Flex,
  FooterInline,
  FormControl,
  FormErrorMessage,
  FormHelperText,
  Grid,
  Header,
  Heading,
  Highlight,
  HStack,
  Icon,
  IconButton,
  Image,
  Input,
  Kbd,
  Link,
  LinkOverlay,
  ListItem,
  Logo,
  Menu,
  MenuButton,
  MenuItem,
  MenuList,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  OrderedList,
  PinInput,
  PinInputField,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Radio,
  RadioGroup,
  RangeSlider,
  RangeSliderFilledTrack,
  RangeSliderThumb,
  RangeSliderTrack,
  Search,
  Select,
  Show,
  SimpleGrid,
  SkipNavLink,
  Slider,
  SliderFilledTrack,
  SliderThumb,
  SliderTrack,
  Stack,
  Stat,
  Switch,
  Tab,
  Table,
  TableContainer,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Tag,
  Tbody,
  Td,
  Text,
  Textarea,
  Th,
  Thead,
  Timepicker,
  Tooltip,
  Tr,
  VisuallyHidden,
  Wrap,
} from "@kvib/react/src";
import { ReactElement } from "react";
import { PortalNestedExample } from "../../components/annet/portal/Portal.stories";
import { DrawerExample } from "../../components/overlay/drawer/Drawer.stories";

interface Komponentdetaljer {
  navn: string;
  beskrivelse: string;
  komponent: ReactElement;
  tag?: string;
  link: string;
}

interface Kategori {
  navn: string;
  beskrivelse?: string;
  komponenter: Record<string, Komponentdetaljer>;
}

export const Komponenter: (colorScheme: "green" | "blue") => Record<string, Kategori> = colorScheme => ({
  Skjemaelementer: {
    navn: "Skjemaelementer",
    komponenter: {
      Button: {
        navn: "Button",
        beskrivelse: "Button",
        komponent: <Button colorScheme={colorScheme}>Button</Button>,
        link: "button",
      },
      IconButton: {
        navn: "IconButton",
        beskrivelse: "IconButton",
        komponent: <IconButton icon="search" aria-label="Forhåndsvisning av IconButton" colorScheme={colorScheme} />,
        link: "icon-button",
      },
      CloseButteon: {
        navn: "CloseButton",
        beskrivelse: "CloseButton",
        komponent: <CloseButton />,
        link: "close-button",
      },
      Input: {
        navn: "Input",
        beskrivelse: "Input",
        komponent: <Input placeholder="Skriv her..." />,
        link: "input",
      },
      FormControl: {
        navn: "FormControl",
        beskrivelse: "FormControl",
        komponent: (
          <FormControl>
            <FormHelperText>Validering av innputt</FormHelperText>
            <Input placeholder="Skriv her..." />
            <FormErrorMessage>Feilmelding</FormErrorMessage>
          </FormControl>
        ),
        link: "form-control",
      },
      Select: {
        navn: "Select",
        beskrivelse: "Select",
        komponent: (
          <Select placeholder="Velg alternativ" aria-label="select">
            <option value="option1">Alternativ 1</option>
            <option value="option2">Alternativ 2</option>
            <option value="option3">Alternativ 3</option>
          </Select>
        ),
        link: "select",
      },
      Textarea: {
        navn: "Textarea",
        beskrivelse: "Textarea",
        komponent: <Textarea placeholder="Dette er et større tekstfelt" />,
        link: "textarea",
      },
      NumberInput: {
        navn: "NumberInput",
        beskrivelse: "NumberInput",
        komponent: (
          <NumberInput defaultValue={3507}>
            <NumberInputField />
            <NumberInputStepper />
          </NumberInput>
        ),
        link: "number-input",
      },
      CheckBox: {
        navn: "Checkbox",
        beskrivelse: "Checkbox",
        komponent: <Checkbox colorScheme={colorScheme}>Denne kan hukes av</Checkbox>,
        link: "checkbox",
      },
      DatePicker: {
        navn: "DatePicker",
        beskrivelse: "DatePicker",
        komponent: (
          <Datepicker
            aria-label="Datepicker-eksempel"
            placeholder="Velg dato"
            showOutsideDays
            showWeekNumber
            colorScheme={colorScheme}
          />
        ),
        link: "datepicker",
        tag: "beta",
      },
      TimePicker: {
        navn: "Timepicker",
        beskrivelse: "Timepicker",
        komponent: <Timepicker ariaLabel="Demo av Timepicker" colorScheme={colorScheme} />,
        link: "timepicker",
        tag: "beta",
      },
      Editable: {
        navn: "Editable",
        beskrivelse: "Editable",
        komponent: (
          <Editable defaultValue="Klikk for å redigere">
            <EditableInput />
            <EditablePreview />
          </Editable>
        ),
        link: "editable",
      },
      Radio: {
        navn: "Radio",
        beskrivelse: "Radio",
        komponent: (
          <RadioGroup defaultValue={"1"} colorScheme={colorScheme}>
            <Stack direction={"row"}>
              <Radio value={"1"}>En</Radio>
              <Radio value={"2"}>To</Radio>
              <Radio value={"3"}>Tre</Radio>
            </Stack>
          </RadioGroup>
        ),
        link: "radio",
      },
      Switch: {
        navn: "Switch",
        beskrivelse: "Switch",
        komponent: <Switch colorScheme={colorScheme} />,
        link: "switch",
      },
      Slider: {
        navn: "Slider",
        beskrivelse: "Slider",
        komponent: (
          <Slider minW={"12rem"} colorScheme={colorScheme}>
            <SliderTrack>
              <SliderFilledTrack />
            </SliderTrack>
            <SliderThumb />
          </Slider>
        ),
        link: "slider",
      },
      RangeSlider: {
        navn: "RangeSlider",
        beskrivelse: "RangeSlider",
        komponent: (
          <RangeSlider aria-label={["min", "max"]} defaultValue={[10, 40]} minW={"12rem"} colorScheme={colorScheme}>
            <RangeSliderTrack>
              <RangeSliderFilledTrack />
            </RangeSliderTrack>
            <RangeSliderThumb index={0} />
            <RangeSliderThumb index={1} />
          </RangeSlider>
        ),
        link: "range-slider",
      },
      PinInput: {
        navn: "PinInput",
        beskrivelse: "PinInput",
        komponent: (
          <HStack gap="0.5em">
            <PinInput colorScheme={colorScheme}>
              <PinInputField />
              <PinInputField />
              <PinInputField />
              <PinInputField />
            </PinInput>
          </HStack>
        ),
        link: "pin-input",
      },
      FileUpload: {
        navn: "FileUpload",
        beskrivelse: "FileUpload",
        komponent: <FileUpload />,
        link: "file-upload",
      },
    },
  },
  Søk: {
    navn: "Søk",
    komponenter: {
      Search: {
        navn: "Search",
        beskrivelse: "Search",
        komponent: <Search placeholder="Søk her..." colorScheme={colorScheme} />,
        link: "search",
      },
    },
  },
  Datavisning: {
    navn: "Datavisning",
    komponenter: {
      Badge: {
        navn: "Badge",
        beskrivelse: "",
        komponent: <Badge colorScheme={colorScheme}>Badge</Badge>,
        link: "badge",
      },
      Table: {
        navn: "Table",
        beskrivelse: "",
        komponent: (
          <TableContainer>
            <Table colorScheme={colorScheme}>
              <Thead>
                <Tr>
                  <Th>Header 1</Th>
                  <Th>Header 2</Th>
                </Tr>
              </Thead>
              <Tbody>
                <Tr>
                  <Td>Data 1</Td>
                  <Td>Data 2</Td>
                </Tr>
                <Tr>
                  <Td>Data 3</Td>
                  <Td>Data 4</Td>
                </Tr>
              </Tbody>
            </Table>
          </TableContainer>
        ),
        link: "table",
      },
      Code: {
        navn: "Code",
        beskrivelse: "",
        komponent: <Code children="Hello world" colorScheme={colorScheme} />,
        link: "code",
      },
      Tag: {
        navn: "Tag",
        beskrivelse: "",
        komponent: <Tag colorScheme={colorScheme}>Tag</Tag>,
        link: "tag",
      },
      Stat: {
        navn: "Stat",
        beskrivelse: "",
        komponent: <Stat colorScheme={colorScheme}>Metrikk</Stat>,
        link: "stat",
      },
      Card: {
        navn: "Card",
        beskrivelse: "",
        komponent: (
          <Card colorScheme={colorScheme}>
            <CardBody>Lorem ipsum dolor sit amet, consectetur adipiscing elit. </CardBody>
          </Card>
        ),
        link: "card",
      },
      Kbd: {
        navn: "Kbd",
        beskrivelse: "",
        komponent: (
          <HStack>
            <Kbd>Ctrl</Kbd>
            <Kbd>Alt</Kbd>
            <Kbd>Delete</Kbd>
          </HStack>
        ),
        link: "kbd",
      },
      List: {
        navn: "List",
        beskrivelse: "",
        komponent: (
          <OrderedList>
            <ListItem>Første punkt i listen</ListItem>
            <ListItem>Andre punkt</ListItem>
          </OrderedList>
        ),
        link: "list",
      },
      Accordion: {
        navn: "Accordion",
        beskrivelse: "",
        komponent: (
          <Accordion allowMultiple minW="12rem">
            <AccordionItem>
              <AccordionButton>Tittel 1</AccordionButton>
              <AccordionPanel>Innhold 1</AccordionPanel>
            </AccordionItem>
            <AccordionItem>
              <AccordionButton>Tittel 2</AccordionButton>
              <AccordionPanel>Innhold 2</AccordionPanel>
            </AccordionItem>
          </Accordion>
        ),
        link: "accordion",
      },
    },
  },
  Layout: {
    navn: "Layout",
    komponenter: {
      Box: {
        navn: "Box",
        beskrivelse: "",
        komponent: (
          <Box p="1rem" border={"1px solid black"}>
            En enkel boks med ramme
          </Box>
        ),
        link: "box",
      },
      Container: {
        navn: "Container",
        beskrivelse: "",
        komponent: (
          <Container p="1rem" border={"1px solid black"}>
            En container med ramme
          </Container>
        ),
        link: "container",
      },
      Flex: {
        navn: "Flex",
        beskrivelse: "",
        komponent: (
          <Flex gap="1rem">
            <Text color="gray.600">Tekst 1</Text>
            <Text color="red.400">Tekst 2</Text>
            <Text color="green.400">Tekst 3</Text>
          </Flex>
        ),
        link: "flex",
      },
      Grid: {
        navn: "Grid",
        beskrivelse: "",
        komponent: (
          <Grid templateColumns="repeat(3, 1fr)" templateRows="repeat(2, 1fr)" gap={6}>
            <Box w="70px" h="40px" bg="gray.600" />
            <Box bg="blue.400" />
            <Box bg="green.400" />
            <Box bg="gray.600" />
            <Box bg="blue.400" />
            <Box bg="green.400" />
          </Grid>
        ),
        link: "grid",
      },
      Stack: {
        navn: "Stack",
        beskrivelse: "",
        komponent: (
          <Stack>
            <Box bg="gray.600" w="70px" h="40px" />
            <Box bg="blue.400" w="70px" h="40px" />
            <Box bg="green.400" w="70px" h="40px" />
          </Stack>
        ),
        link: "stack",
      },
      SimpleGrid: {
        navn: "SimpleGrid",
        beskrivelse: "",
        komponent: (
          <SimpleGrid columns={2} gap={4}>
            <Box bg="gray.600" w="70px" h="40px" />
            <Box bg="blue.400" w="70px" h="40px" />
            <Box bg="green.400" w="70px" h="40px" />
            <Box bg="gray.600" w="70px" h="40px" />
          </SimpleGrid>
        ),
        link: "simplegrid",
      },
      Wrap: {
        navn: "Wrap",
        beskrivelse: "",
        komponent: (
          <Wrap>
            <Box bg="gray.600" w="70px" h="40px" />
            <Box bg="blue.400" w="70px" h="40px" />
            <Box bg="green.400" w="70px" h="40px" />
            <Box bg="gray.600" w="70px" h="40px" />
          </Wrap>
        ),
        link: "wrap",
      },
      Center: {
        navn: "Center",
        beskrivelse: "",
        komponent: (
          <Center bg={`${colorScheme}.100`} p="2rem">
            Sentrert innhold
          </Center>
        ),
        link: "center",
      },
    },
  },
  Designfundament: {
    navn: "Typografi",
    komponenter: {
      Heading: {
        navn: "Heading",
        beskrivelse: "",
        komponent: <Heading>Overskrift</Heading>,
        link: "heading",
      },
      Text: {
        navn: "Text",
        beskrivelse: "",
        komponent: <Text>Tekstkomponent med riktig font, farge og vekt.</Text>,
        link: "text",
      },
      Highlight: {
        navn: "Highlight",
        beskrivelse: "",
        komponent: (
          <Highlight
            query={"fremheve"}
            styles={{
              bg: "orange.100",
              px: "1",
              py: "1",
            }}
          >
            Det er mulig å fremheve ord.
          </Highlight>
        ),
        link: "highlight",
      },
    },
  },
  Sideelementer: {
    navn: "Sideelementer",
    komponenter: {
      Logo: {
        navn: "Logo",
        beskrivelse: "",
        komponent: <Logo />,
        link: "logo",
      },
      Header: {
        navn: "Header",
        beskrivelse: "",
        komponent: <Header />,
        link: "header",
        tag: "beta",
      },
      Footer: {
        navn: "Footer",
        beskrivelse: "",
        komponent: <FooterInline />,
        link: "footer-footer",
        tag: "beta",
      },
      Divider: {
        navn: "Divider",
        beskrivelse: "",
        komponent: <Divider w="12rem" borderWidth="2px" bg={"gray.200"} />,
        link: "divider",
      },
    },
  },
  Media: {
    navn: "Media",
    komponenter: {
      Image: {
        navn: "Image",
        beskrivelse: "",
        komponent: (
          <Image src="https://images.unsplash.com/photo-1477768663691-75454fd8e870?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=300&q=80" />
        ),
        link: "image",
      },
      Icon: {
        navn: "Icon",
        beskrivelse: "",
        komponent: <Icon icon="home" size={48} />,
        link: "ikoner",
      },
      Avatar: {
        navn: "Avatar",
        beskrivelse: "",
        komponent: (
          <Avatar
            name="Eksempel Navn"
            src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80"
          />
        ),
        link: "avatar",
      },
    },
  },
  Navigasjon: {
    navn: "Navigasjon",
    komponenter: {
      Breadcrumbs: {
        navn: "Breadcrumb",
        beskrivelse: "",
        komponent: (
          <Breadcrumb
            sx={{
              ol: {
                padding: 0,
              },
              li: {
                marginTop: 0,
                fontSize: "16px",
              },
            }}
            colorScheme={colorScheme}
          >
            <BreadcrumbItem>
              <BreadcrumbLink
                onClick={() => {
                  console.log("Klikket på hjem-brødsmule");
                }}
              >
                Home
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem>
              <BreadcrumbLink
                onClick={() => {
                  console.log("Klikket på docs-brødsmule");
                }}
              >
                Docs
              </BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbItem isCurrentPage>
              <BreadcrumbLink
                onClick={() => {
                  console.log("Klikket på breadcrumb-brødsmule");
                }}
              >
                Breadcrumb
              </BreadcrumbLink>
            </BreadcrumbItem>
          </Breadcrumb>
        ),
        link: "breadcrumb",
      },
      Tabs: {
        navn: "Tabs",
        beskrivelse: "",
        komponent: (
          <Tabs size="sm" colorScheme={colorScheme}>
            <TabList>
              <Tab>Tab 1</Tab>
              <Tab>Tab 2</Tab>
              <Tab>Tab 3</Tab>
            </TabList>
            <TabPanels>
              <TabPanel>
                <p>Innhold i tab 1</p>
              </TabPanel>
              <TabPanel>
                <p>Innhold i tab 2</p>
              </TabPanel>
              <TabPanel>
                <p>Innhold i tab 3</p>
              </TabPanel>
            </TabPanels>
          </Tabs>
        ),
        link: "tabs",
      },
      Menu: {
        navn: "Menu",
        beskrivelse: "",
        komponent: (
          <Menu>
            <MenuButton as={Button} rightIcon={"expand_more"} colorScheme={colorScheme}>
              Meny
            </MenuButton>
            <MenuList>
              <MenuItem>Last ned</MenuItem>
              <MenuItem onClick={() => alert("Kopi")}>Lag en kopi</MenuItem>
            </MenuList>
          </Menu>
        ),
        link: "menu",
      },
      Link: {
        navn: "Link",
        beskrivelse: "",
        komponent: (
          <Link
            href="#"
            onClick={e => {
              e.preventDefault();
              console.log("Klikket på lenke");
            }}
            colorScheme={colorScheme}
          >
            Lenke
          </Link>
        ),
        link: "link",
      },
      LinkOverlay: {
        navn: "LinkOverlay",
        beskrivelse: "",
        komponent: (
          <Box>
            <LinkOverlay
              href="#"
              onClick={e => {
                e.preventDefault();
                console.log("Klikket på lenke");
              }}
              color={`${colorScheme}.500`}
            >
              Lenke hvor man kan klikke i hele boksen
            </LinkOverlay>
          </Box>
        ),
        link: "linkoverlay",
      },
      SkipNav: {
        navn: "SkipNav",
        beskrivelse: "",
        komponent: (
          <div>
            Trykk her + tab
            <SkipNavLink color={`${colorScheme}.500`}>SkipNav</SkipNavLink>
          </div>
        ),
        link: "skipnav",
      },
    },
  },
  Overlay: {
    navn: "Overlay",
    komponenter: {
      Tooltip: {
        navn: "Tooltip",
        beskrivelse: "",
        komponent: <Tooltip label="Dette er en tooltip">Hover over meg</Tooltip>,
        link: "tooltip",
      },
      // TODO: Legg til modal direkte fra Story
      /* Modal: {
        navn: "Modal",
        beskrivelse: "",
        komponent: <ModalExample colorScheme={colorScheme} />,
        link: "modal",
      }, */
      Popover: {
        navn: "Popover",
        beskrivelse: "",
        komponent: (
          <Popover>
            <PopoverTrigger>
              <Button colorScheme={colorScheme}>Klikk for popover</Button>
            </PopoverTrigger>
            <PopoverContent>
              <PopoverArrow />
              <PopoverCloseButton />
              <PopoverHeader>Popover-overskrift</PopoverHeader>
              <PopoverBody>Dette er innholdet i popoveren</PopoverBody>
            </PopoverContent>
          </Popover>
        ),
        link: "popover",
      },
      // TODO: Legg til AlertDialog direkte fra Story
      /* AlertDialog: {
        navn: "Alert Dialog",
        beskrivelse: "",
        komponent:
        link: "alert-dialog",
      }, */
      Drawer: {
        navn: "Drawer",
        beskrivelse: "",
        komponent: (
          <DrawerExample
            colorScheme={colorScheme}
            children={undefined}
            onClose={function (): void {
              return;
            }}
            isOpen={false}
          />
        ),
        link: "drawer",
      },
    },
  },
  Annet: {
    navn: "Annet",
    komponenter: {
      VisuallyHidden: {
        navn: "Visually Hidden",
        beskrivelse: "",
        komponent: (
          <Box>
            Denne teksten er synlig, mens underteksten er visuelt skjult, men den finnes i DOM-en.
            <VisuallyHidden>Skjult undertekst</VisuallyHidden>
          </Box>
        ),
        link: "visually-hidden",
      },
      ShowHide: {
        navn: "Show/Hide",
        beskrivelse: "",
        komponent: (
          <>
            <Show above="md">Denne teksten vises på skjermer større enn "md".</Show>
            <Show below="md">Denne teksten vises på skjermer mindre enn "md".</Show>
          </>
        ),
        link: "show-hide",
      },
      Portal: {
        navn: "Portal",
        beskrivelse: "",
        komponent: <PortalNestedExample />,
        link: "portal",
      },
    },
  },
});
