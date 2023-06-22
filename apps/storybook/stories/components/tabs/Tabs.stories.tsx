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

export const GreenTabs: Story = {
  args: { colorScheme: "green" },
  render: (args) => (
    <KvibTabs {...args}>
      <TabList>
        <Tab>Første fane</Tab>
        <Tab>Andre fane</Tab>
      </TabList>
    </KvibTabs>
  ),
};

export const BlueTabs: Story = {
  args: { colorScheme: "blue", size: "md" },
  render: (args) => (
    <KvibTabs {...args}>
      <TabList>
        <Tab>Første fane</Tab>
        <Tab>Andre fane</Tab>
      </TabList>
    </KvibTabs>
  ),
};

export const TwoTabs: Story = {
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

export const EightTabs: Story = {
  args: { colorScheme: "green", size: "md" },
  render: (args) => (
    <KvibTabs {...args}>
      <TabList>
        <Tab>Første fane</Tab>
        <Tab>Andre fane</Tab>
        <Tab>Tredje fane</Tab>
        <Tab>Fjerde fane</Tab>
        <Tab>Femte fane</Tab>
        <Tab>Sjette fane</Tab>
        <Tab>Syvende fane</Tab>
        <Tab>Åttende fane</Tab>
      </TabList>
    </KvibTabs>
  ),
};

export const SmallTabs: Story = {
  args: { colorScheme: "green", size: "sm" },
  render: (args) => (
    <KvibTabs {...args}>
      <TabList>
        <Tab>Første fane</Tab>
        <Tab>Andre fane</Tab>
      </TabList>
    </KvibTabs>
  ),
};

export const MediumTabs: Story = {
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

export const LargeTabs: Story = {
  args: { colorScheme: "green", size: "lg" },
  render: (args) => (
    <KvibTabs {...args}>
      <TabList>
        <Tab>Første fane</Tab>
        <Tab>Andre fane</Tab>
      </TabList>
    </KvibTabs>
  ),
};

export const StatesTabs: Story = {
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
