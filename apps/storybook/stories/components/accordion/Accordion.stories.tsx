import { Meta, StoryObj } from "@storybook/react";
import { Accordion as KvibAccordion, AccordionItem, AccordionButton, AccordionPanel } from "@kvib/react/src";

const meta: Meta<typeof KvibAccordion> = {
  title: "Komponenter/Accordion ",
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

export const Accordion: Story = {
  argTypes: {
    allowMultiple: {
      description: "If true, multiple items can be expanded at once.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    allowToggle: {
      description: "If true, expanded items may be collapsed again.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
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
        type: { summary: Boolean },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
  },
  args: { allowMultiple: false, allowToggle: false },
  render: (args) => (
    <KvibAccordion {...args}>
      <AccordionItem>
        <AccordionButton>Trykk her</AccordionButton>
        <AccordionPanel>Tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst</AccordionPanel>
      </AccordionItem>
      <AccordionItem>
        <AccordionButton>Trykk her</AccordionButton>
        <AccordionPanel>Tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst tekst</AccordionPanel>
      </AccordionItem>
    </KvibAccordion>
  ),
};

export const Accordionitem: Story = {
  argTypes: {
    id: {
      description: "Unique id for the AccordionItem.",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: false },
      },
      control: "text",
    },
    isDisabled: {
      description: "If true, the AccordionItem will be disabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    isFocusable: {
      description: "If true, the AccordionItem will be focusable.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
  },
  args: { isDisabled: false, isFocusable: false },
  render: (args) => (
    <KvibAccordion>
      <AccordionItem {...args}>
        <AccordionButton>Klikk meg</AccordionButton>
        <AccordionPanel>Tekst skrift tekst</AccordionPanel>
      </AccordionItem>
    </KvibAccordion>
  ),
};
