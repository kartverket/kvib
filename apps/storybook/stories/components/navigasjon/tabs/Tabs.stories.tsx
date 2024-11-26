import { TabsList as KvibTabList, Tabs as KvibTabs, TabsContent, TabsProps, TabsTrigger } from "@kvib/react/src/tabs";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibTabs> = {
  title: "Komponenter/Tabs",
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
    colorPalette: {
      description: "The visual color appearance of the tabs",
      table: {
        type: { summary: "green | blue" },
        defaultValue: { summary: "green" },
      },
      options: ["green", "blue"],
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
        type: { summary: "Boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
    id: {
      description: "The id of the tab",
      table: {
        type: { summary: "String" },
      },
      control: "text",
    },
    index: {
      description: "The index of the selected tab (in controlled mode)",
      table: {
        type: { summary: "Number" },
      },
      control: "number",
    },
    isDisabled: {
      description: "If true, tabs will no longer be able to toggle.",
      table: {
        type: { summary: "Boolean" },
        defaultValue: { summary: "false" },
      },
      control: { type: "boolean" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibTabs>;

const TabsExample = ({ ...args }: TabsProps) => (
  <KvibTabs defaultValue="fane1" {...args}>
    <KvibTabList>
      <TabsTrigger value="fane1">Første fane</TabsTrigger>
      <TabsTrigger value="fane2">Andre fane</TabsTrigger>
    </KvibTabList>
    <TabsContent value="fane1">Innhold for første fane</TabsContent>
    <TabsContent value="fane2">Innhold for andre fane</TabsContent>
  </KvibTabs>
);

export const Preview: Story = {
  render: args => <TabsExample {...args} />,
};
