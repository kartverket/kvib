import { TabsList as KvibTabList, Tabs as KvibTabs, TabsContent, TabsTrigger } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibTabs> = {
  title: "Komponenter/Tabs",
  component: KvibTabs,
  parameters: {
    docs: {
      story: { inline: true },
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
    fitted: {
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
  },
};

export default meta;
type Story = StoryObj<typeof KvibTabs>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibTabs.displayName = "Tabs";
KvibTabList.displayName = "TabsList";
TabsTrigger.displayName = "TabsTrigger";
TabsContent.displayName = "TabsContent";

export const Preview: Story = {
  render: args => (
    <KvibTabs defaultValue="tab1" {...args}>
      <KvibTabList>
        <TabsTrigger value="tab1">Tab 1</TabsTrigger>
        <TabsTrigger value="tab2">Tab 2</TabsTrigger>
      </KvibTabList>
      <TabsContent value="tab1">Tab 1 content</TabsContent>
      <TabsContent value="tab2">Tab 2 content</TabsContent>
    </KvibTabs>
  ),
};
