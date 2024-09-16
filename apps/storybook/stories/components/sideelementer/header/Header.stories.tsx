import {
  Box,
  Header as KvibHeader,
  Heading,
  HStack,
  Icon,
  Search,
  SearchAsync,
  Stack,
  Tab,
  TabList,
  Tabs,
} from "@kvib/react/src";
import { colors } from "@kvib/react/src/theme/tokens";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibHeader> = {
  title: "Sideelementer/Header",
  component: KvibHeader,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
    a11y: {
      // Label warnings + contrast ratio because of chakra wrapper.
      disable: true,
    },
  },
  argTypes: {
    justifyContent: {
      table: {
        type: { summary: "start | center | space-between" },
        defaultValue: { summary: "space-between" },
      },
      options: ["start", "center", "space-between"],
      control: { type: "radio" },
    },
    logoLinkDisabled: {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    logoLink: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "/" },
      },
      control: "text",
    },
    logoLinkProps: {
      table: { summary: "object" },
      defaultValue: { summary: undefined },
    },
    showMenuButton: {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    showChildrenInMenu: {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
      control: "boolean",
    },
    collapseBreakpoint: {
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "sm" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    gap: {
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 90 },
      },
      control: "number",
    },
    logoVariant: {
      table: {
        type: { summary: "horizontal | vertical" },
        defaultValue: { summary: "horizontal" },
      },
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
  },
  args: { onMenuButtonClick: undefined },
};

export default meta;
type Story = StoryObj<typeof KvibHeader>;

const fruits = [
  { label: "Eple", value: "eple" },
  { label: "Banan", value: "banan" },
  { label: "Kirsebær", value: "kirsebær" },
  { label: "Pære", value: "pære" },
  { label: "Svarthyll", value: "svarthyll" },
];

const mockLoadOptions = (inputValue: string, callback: (options: typeof fruits) => void) => {
  setTimeout(() => {
    const filteredFruits = fruits.filter((fruit) => fruit.label.toLowerCase().includes(inputValue.toLowerCase()));
    callback(filteredFruits);
  }, 500);
};

export const Header: Story = {
  args: { logoAltText: "Kartverket Logo" },
  render: (args) => <KvibHeader {...args} />,
};

export const HeaderElements: Story = {
  args: {
    justifyContent: "space-between",
    onMenuButtonClick: undefined,
    gap: 50,
    collapseBreakpoint: "md",
    logoAltText: "Kartverket Logo",
  },
  render: (args) => (
    <KvibHeader {...args}>
      <Heading size="md">Eiendom</Heading>
      <Search bgColor="white" maxWidth={400} placeholder="Søk her..."></Search>
      <Tabs colorScheme="blue" size="md">
        <TabList>
          <Tab w={90}>Fane 1</Tab>
          <Tab w={90}>Fane 2</Tab>
        </TabList>
      </Tabs>
    </KvibHeader>
  ),
};

export const HeaderJustifyContent: Story = {
  args: { logoAltText: "Kartverket Logo" },
  render: (args) => (
    <Stack>
      <KvibHeader {...args} justifyContent="center">
        <Search bgColor="white" maxWidth={400} placeholder="Søk her..."></Search>
      </KvibHeader>
      <KvibHeader {...args} justifyContent="space-between">
        <Search bgColor="white" maxWidth={400} placeholder="Søk her..."></Search>
      </KvibHeader>
      <KvibHeader {...args} justifyContent="start">
        <Search bgColor="white" maxWidth={400} placeholder="Søk her..."></Search>
      </KvibHeader>
    </Stack>
  ),
};

export const HeaderDropdownChildren: Story = {
  args: {
    logoLink: "https://design.kartverket.no",
    logoAltText: "Kartverket Logo",
    dropdownMenuChildren: (
      <HStack wrap="wrap" align="center" justify="center" gap="10">
        <Search maxWidth={400} bgColor="white" placeholder="Søk her..."></Search>
        <Tabs colorScheme="blue" size="md">
          <TabList>
            <Tab>Første fane</Tab>
            <Tab>Andre fane</Tab>
          </TabList>
        </Tabs>
      </HStack>
    ),
    showMenuButton: true,
    onMenuButtonClick: undefined,
    showChildrenInMenu: false,
  },
  render: (args) => (
    <KvibHeader {...args}>
      <Heading size="md">Eiendom</Heading>
    </KvibHeader>
  ),
};

export const HeaderBreakpoint: Story = {
  args: { justifyContent: "center", logoAltText: "Kartverket Logo" },
  render: (args) => (
    <Stack>
      <KvibHeader {...args} collapseBreakpoint="sm">
        <Search bgColor="white" maxWidth={400} placeholder="Søk her..."></Search>
      </KvibHeader>
      <KvibHeader {...args} collapseBreakpoint="md">
        <Search bgColor="white" maxWidth={400} placeholder="Søk her..."></Search>
      </KvibHeader>
      <KvibHeader {...args} collapseBreakpoint="lg">
        <Search bgColor="white" maxWidth={400} placeholder="Søk her..."></Search>
      </KvibHeader>
    </Stack>
  ),
};

export const HeaderSearchAsync: Story = {
  args: { logoAltText: "Kartverket Logo" },
  render: (args) => (
    <KvibHeader {...args}>
      <Box width={300}>
        <SearchAsync
          placeholder={"Søk etter frukt"}
          loadOptions={mockLoadOptions}
          onChange={(selectedOption: any) => {
            console.log("Selected Option:", selectedOption);
          }}
          size="md"
          dropdownIndicator={<Icon icon="search" weight={500} color={colors.green[500]} />}
          aria-label="search async"
        />
      </Box>
    </KvibHeader>
  ),
};

export const HeaderLogoButton: Story = {
  args: {
    logoLink: "https://design.kartverket.no",
    logoAltText: "Kartverket Logo",
  },
  render: (args) => <KvibHeader {...args} />,
};

export const HeaderLogoVariant: Story = {
  args: {
    logoVariant: "vertical",
    logoAltText: "Kartverket Logo",
  },
  render: (args) => <KvibHeader {...args} />,
};

export const HeaderWithoutLink: Story = {
  args: { logoLinkDisabled: true },
  render: (args) => <KvibHeader {...args} />,
};
