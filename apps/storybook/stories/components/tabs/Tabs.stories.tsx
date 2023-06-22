import { HStack, VStack } from "@chakra-ui/layout";
import { Tab, TabList } from "@chakra-ui/tabs";
import { Tabs as KvibTabs } from "@kvib/react/src/tabs";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibTabs> = {
  title: "Komponenter/Tabs",
  component: KvibTabs,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibTabs>;

export const Tabs: Story = {
  args: { colorScheme: "green", size: "md" },
  render: (args) => (
    <KvibTabs {...args}>
      <TabList>
        <Tab>Første fane</Tab>
        <Tab>Andre fane</Tab>
      </TabList>
    </KvibTabs>
  ),
};

export const TabsColors: Story = {
  args: { size: "md" },
  render: (args) => (
    <HStack spacing="2rem">
      <KvibTabs {...args} colorScheme="blue">
        <TabList>
          <Tab>Første fane</Tab>
          <Tab>Andre fane</Tab>
        </TabList>
      </KvibTabs>
      <KvibTabs {...args} colorScheme="green">
        <TabList>
          <Tab>Første fane</Tab>
          <Tab>Andre fane</Tab>
        </TabList>
      </KvibTabs>
    </HStack>
  ),
};

export const TabsNumber: Story = {
  args: { colorScheme: "green", size: "md" },
  render: (args) => (
    <VStack alignItems="start">
      <KvibTabs {...args}>
        <TabList>
          <Tab>Første fane</Tab>
          <Tab>Andre fane</Tab>
        </TabList>
      </KvibTabs>
      <KvibTabs {...args}>
        <TabList>
          <Tab>Første fane</Tab>
          <Tab>Andre fane</Tab>
          <Tab>Tredje fane</Tab>
          <Tab>Fjerde fane</Tab>
          <Tab>Femte fane</Tab>
          <Tab>Sjette fane</Tab>
        </TabList>
      </KvibTabs>
    </VStack>
  ),
};

export const TabsSizes: Story = {
  args: { colorScheme: "green" },
  render: (args) => (
    <VStack alignItems="start">
      <KvibTabs {...args} aria-label="Tabs small" size="sm">
        <TabList>
          <Tab>Første fane</Tab>
          <Tab>Andre fane</Tab>
        </TabList>
      </KvibTabs>
      <KvibTabs {...args} size="md">
        <TabList>
          <Tab>Første fane</Tab>
          <Tab>Andre fane</Tab>
        </TabList>
      </KvibTabs>
      <KvibTabs {...args} size="lg">
        <TabList>
          <Tab>Første fane</Tab>
          <Tab>Andre fane</Tab>
        </TabList>
      </KvibTabs>
    </VStack>
  ),
};

export const TabsStates: Story = {
  args: { colorScheme: "green", size: "md" },
  render: (args) => (
    <KvibTabs {...args}>
      <TabList>
        <Tab>Active</Tab>
        <Tab>Default</Tab>
        <Tab isDisabled={true}>Disabled</Tab>
      </TabList>
    </KvibTabs>
  ),
};
