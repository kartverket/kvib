import {
  AccordionItem as AccItem,
  AccordionItemContent,
  AccordionItemTrigger,
  Box,
  Accordion as KvibAccordion,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibAccordion> = {
  title: "Komponenter/Accordion",
  component: KvibAccordion,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibAccordion>;

export const Preview: Story = {
  argTypes: {
    allowMultiple: {
      description: "If true, multiple items can be expanded at once.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    allowToggle: {
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
  args: { allowMultiple: true, allowToggle: false, onChange: undefined },
  render: args => (
    <Box w="100%">
      <KvibAccordion {...args}>
        <AccItem>
          <h2>
            <AccordionItemTrigger>
              <Box as="span" flex="1" textAlign="left">
                Tittel 1
              </Box>
            </AccordionItemTrigger>
          </h2>
          <AccordionItemContent pb={4}>Innhold 1</AccordionItemContent>
        </AccItem>
        <AccItem>
          <h2>
            <AccordionItemTrigger>
              <Box as="span" flex="1" textAlign="left">
                Tittel 2
              </Box>
            </AccordionItemTrigger>
          </h2>
          <AccordionItemContent pb={4}>Innhold 2</AccordionItemContent>
        </AccItem>
      </KvibAccordion>
    </Box>
  ),
};

export const AccordionItem: Story = {
  argTypes: {
    id: {
      description: "Unique id for the AccordionItem.",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    isDisabled: {
      description: "If true, the AccordionItem will be disabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    isFocusable: {
      description: "If true, the AccordionItem will be focusable.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
  },
  args: { isDisabled: false, isFocusable: false },
  render: args => (
    <KvibAccordion>
      <AccItem {...args}>
        <AccordionItemTrigger>Klikk meg</AccordionItemTrigger>
        <AccordionItemContent>Tekst skrift tekst</AccordionItemContent>
      </AccItem>
    </KvibAccordion>
  ),
};
