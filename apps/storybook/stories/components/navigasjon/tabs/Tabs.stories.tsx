import { HStack, VStack } from "@chakra-ui/layout";
import {
  Tabs as KvibTabs,
  Tab as KvibTab,
  TabList as KvibTabList,
  TabPanels as KvibTabPanels,
  TabPanel as KvibTabPanel,
} from "@kvib/react/src/tabs";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibTabs> = {
  title: "Navigasjon/Tabs",
  component: KvibTabs,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
    a11y: {
      config: {
        rules: [
          {
            // Turned off aria value violation due to false error.
            id: "aria-valid-attr-value",
            reviewOnFail: true,
          },
        ],
      },
    },
  },

  argTypes: {
    size: {
      description: "The size of the tabs",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    colorScheme: {
      description: "The visual color appearance of the tabs",
      table: {
        type: { summary: "green | blue | undefined" },
        defaultValue: { summary: "green" },
      },
      options: ["green", "blue", "undefined"],
      control: { type: "radio" },
    },
    orientation: {
      description: "The orientation of the tab.",
      table: {
        type: { summary: "vertical | horizontal" },
        defaultValue: { summary: "horizontal" },
      },
      options: ["vertical", "horizontal"],
      control: { type: "radio" },
    },
    variant: {
      description: "The variant of the tab.",
      table: {
        type: { summary: "line | enclosed | enclosed-colored | soft-rounded | solid-rounded | unstyled" },
        defaultValue: { summary: "line" },
      },
      options: ["line", "enclosed", "enclosed-colored", "soft-rounded", "solid-rounded", "unstyled"],
      control: { type: "radio" },
    },
    isFitted: {
      description: "If true, tabs will stretch to width of the tablist.",
      table: {
        type: { summary: Boolean },
        defaultValue: { summary: false },
      },
      control: { type: "boolean" },
    },
    id: {
      description: "The id of the tab",
      table: {
        type: { summary: String },
      },
      control: "text",
    },
    index: {
      description: "The index of the selected tab (in controlled mode)",
      table: {
        type: { summary: Number },
      },
      control: "number",
    },
    isDisabled: {
      description: "If true, tabs will no longer be able to toggle.",
      table: {
        type: { summary: Boolean },
        defaultValue: { summary: false },
      },
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibTabs>;

export const Tabs: Story = {
  args: { size: "md" },
  render: (args) => (
    <KvibTabs {...args}>
      <KvibTabList>
        <KvibTab>Første fane</KvibTab>
        <KvibTab>Andre fane</KvibTab>
      </KvibTabList>
    </KvibTabs>
  ),
};

export const TabsColors: Story = {
  args: { size: "md" },
  render: (args) => (
    <HStack spacing="2rem">
      <KvibTabs {...args} colorScheme="blue">
        <KvibTabList>
          <KvibTab>Første fane</KvibTab>
          <KvibTab>Andre fane</KvibTab>
        </KvibTabList>
      </KvibTabs>
      <KvibTabs {...args} colorScheme="green">
        <KvibTabList>
          <KvibTab>Første fane</KvibTab>
          <KvibTab>Andre fane</KvibTab>
        </KvibTabList>
      </KvibTabs>
    </HStack>
  ),
};

export const TabsNumber: Story = {
  args: { size: "md" },
  render: (args) => (
    <KvibTabs {...args}>
      <KvibTabList>
        <KvibTab>Første fane</KvibTab>
        <KvibTab>Andre fane</KvibTab>
        <KvibTab>Tredje fane</KvibTab>
        <KvibTab>Fjerde fane</KvibTab>
        <KvibTab>Femte fane</KvibTab>
        <KvibTab>Sjette fane</KvibTab>
      </KvibTabList>
    </KvibTabs>
  ),
};

export const TabsSizes: Story = {
  render: (args) => (
    <VStack alignItems="start">
      <KvibTabs {...args} aria-label="Tabs small" size="sm">
        <KvibTabList>
          <KvibTab>Første fane</KvibTab>
          <KvibTab>Andre fane</KvibTab>
        </KvibTabList>
      </KvibTabs>
      <KvibTabs {...args} size="md">
        <KvibTabList>
          <KvibTab>Første fane</KvibTab>
          <KvibTab>Andre fane</KvibTab>
        </KvibTabList>
      </KvibTabs>
      <KvibTabs {...args} size="lg">
        <KvibTabList>
          <KvibTab>Første fane</KvibTab>
          <KvibTab>Andre fane</KvibTab>
        </KvibTabList>
      </KvibTabs>
    </VStack>
  ),
};

export const TabsPanels: Story = {
  args: { size: "md" },
  render: (args) => (
    <KvibTabs {...args}>
      <KvibTabList>
        <KvibTab>Første fane</KvibTab>
        <KvibTab>Andre fane</KvibTab>
      </KvibTabList>
      <KvibTabPanels>
        <KvibTabPanel>Fane 1</KvibTabPanel>
        <KvibTabPanel>Fane 2</KvibTabPanel>
      </KvibTabPanels>
    </KvibTabs>
  ),
};

export const TabsStates: Story = {
  args: { size: "md" },
  render: (args) => (
    <KvibTabs {...args}>
      <KvibTabList>
        <KvibTab>Enabled</KvibTab>
        <KvibTab isDisabled>Disabled</KvibTab>
      </KvibTabList>
    </KvibTabs>
  ),
};
