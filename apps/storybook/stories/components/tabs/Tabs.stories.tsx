import { HStack, VStack } from "@chakra-ui/layout";
import { Tabs as KvibTabs, Tab as KvibTab, TabList as KvibTabList } from "@kvib/react/src/tabs";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibTabs> = {
  title: "Komponenter/Tabs**",
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
  args: { colorScheme: "green", size: "md" },
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
  args: { colorScheme: "green" },
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

export const TabsDisabled: Story = {
  args: { colorScheme: "green", size: "md" },
  render: (args) => (
    <KvibTabs {...args}>
      <KvibTabList>
        <KvibTab>Enabled</KvibTab>
        <KvibTab isDisabled>Disabled</KvibTab>
      </KvibTabList>
    </KvibTabs>
  ),
};
