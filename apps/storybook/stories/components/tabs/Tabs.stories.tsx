import { Tab, TabList, Tabs } from "@chakra-ui/tabs";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Tabs> = {
  title: "Komponenter/Tabs",
  component: Tabs,
};

export default meta;
type Story = StoryObj<typeof Tabs>;

export const BlueTabs: Story = {
  args: { colorScheme: "blue" },
  render: (args) => (
    <Tabs {...args}>
      <TabList>
        <Tab>Første fane</Tab>
        <Tab>Andre fane</Tab>
      </TabList>
    </Tabs>
  ),
};

export const GreenTabs: Story = {
  args: { colorScheme: "green", align: "center" },
  render: (args) => (
    <Tabs {...args}>
      <TabList>
        <Tab>Første fane</Tab>
        <Tab>Andre fane</Tab>
      </TabList>
    </Tabs>
  ),
};

export const TwoTabs: Story = {
  args: { colorScheme: "green" },
  render: (args) => (
    <Tabs {...args}>
      <TabList>
        <Tab>Første fane</Tab>
        <Tab>Andre fane</Tab>
      </TabList>
    </Tabs>
  ),
};

export const EightTabs: Story = {
  args: { colorScheme: "green" },
  render: (args) => (
    <Tabs {...args}>
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
    </Tabs>
  ),
};

export const SmallTabs: Story = {
  args: { colorScheme: "green", size: "sm" },
  render: (args) => (
    <Tabs {...args}>
      <TabList>
        <Tab>Første fane</Tab>
        <Tab>Andre fane</Tab>
      </TabList>
    </Tabs>
  ),
};

export const MediumTabs: Story = {
  args: { colorScheme: "green", size: "md" },
  render: (args) => (
    <Tabs {...args}>
      <TabList>
        <Tab>Første fane</Tab>
        <Tab>Andre fane</Tab>
      </TabList>
    </Tabs>
  ),
};

export const LargeTabs: Story = {
  args: { colorScheme: "green", size: "lg" },
  render: (args) => (
    <Tabs {...args}>
      <TabList>
        <Tab>Første fane</Tab>
        <Tab>Andre fane</Tab>
      </TabList>
    </Tabs>
  ),
};
