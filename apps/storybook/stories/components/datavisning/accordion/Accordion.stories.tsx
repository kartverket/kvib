import { Box, KvibAccordion } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibAccordion.Root> = {
  title: "Komponenter/Accordion",
  component: KvibAccordion.Root,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibAccordion.Root>;

export const Preview: Story = {
  argTypes: {
    multiple: {
      description: "If true, multiple items can be expanded at once.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    collapsible: {
      description: "If true, expanded items may be collapsed again.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    defaultIndex: {
      description: "Sets the initial index for the expanded accordion item.",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    index: {
      description: "Sets the index for the expanded accordion item.",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    onChange: {
      description: "Callback for when the accordion expands/collapses.",
      table: {
        type: { summary: "function" },
      },
      control: "boolean",
    },
    reduceMotion: {
      description: "If true, disables height animation and transition.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
  },
  args: { multiple: true, collapsible: false, onChange: undefined },
  render: args => (
    <Box w="100%">
      <KvibAccordion.Root {...args}>
        <KvibAccordion.Item>
          <KvibAccordion.ItemTrigger>
            <Box as="span" flex="1" textAlign="left">
              Tittel 1
            </Box>
          </KvibAccordion.ItemTrigger>
          <KvibAccordion.ItemContent>Innhold 1</KvibAccordion.ItemContent>
        </KvibAccordion.Item>
        <KvibAccordion.Item>
          <KvibAccordion.ItemTrigger>
            <Box as="span" flex="1" textAlign="left">
              Tittel 2
            </Box>
          </KvibAccordion.ItemTrigger>
          <KvibAccordion.ItemContent>Innhold 2</KvibAccordion.ItemContent>
        </KvibAccordion.Item>
      </KvibAccordion.Root>
    </Box>
  ),
};
