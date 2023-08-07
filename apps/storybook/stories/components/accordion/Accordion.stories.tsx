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
        type: { summary: Boolean },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibAccordion>;

export const Accordion: Story = {
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
