import {
  AccordionItem as AccItem,
  Accordion,
  AccordionItemContent,
  AccordionItemIndicator,
  AccordionItemTrigger,
  KvibAccordion,
} from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Accordion> = {
  title: "Komponenter/Accordion",
  component: Accordion,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Accordion>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
Accordion.displayName = "Accordion";
AccItem.displayName = "AccordionItem";
AccordionItemContent.displayName = "AccordionItemContent";
AccordionItemIndicator.displayName = "AccordionItemIndicator";
AccordionItemTrigger.displayName = "AccordionItemTrigger";

export const Preview: Story = {
  argTypes: {
    multiple: {
      description: "If true, multiple items can be expanded at once.",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: { summary: "false" },
      control: "boolean",
    },
    collapsible: {
      description: "If true, all items can be collapsed.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    variant: {
      description: "Sets the variant of the component.",
      table: {
        type: { summary: "outline | subtle | enclosed | plain" },
        defaultValue: { summary: "outline" },
      },
      control: {
        type: "radio",
      },
      options: ["outline", "subtle", "enclosed", "plain"],
    },
    size: {
      description: "Sets the size of the component.",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      control: {
        type: "radio",
      },
      options: ["sm", "md", "lg"],
    },
    disabled: {
      description: "If true, the Accordion will be disabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    onFocusChange: {
      description: "The callback fired when the focused accordion item changes.",
      table: {
        type: { summary: "(details: FocusChangeDetails) => void" },
      },
    },
    onValueChange: {
      description: "The callback fired when the state of expanded/collapsed accordion items changes.",
      table: {
        type: { summary: "(details: ValueChangeDetails) => void" },
      },
    },
    defaultValue: {
      description:
        "The initial value of the accordion when it is first rendered. Use when you do not need to control the state of the accordion.",
      table: {
        type: { summary: "string[]" },
      },
    },
    value: {
      description: "The value of the accordion items that are currently being expanded.",
      table: {
        type: { summary: "string[]" },
      },
    },
  },
  render: args => (
    <Accordion collapsible {...args}>
      <AccItem key="1" value="item1">
        <AccordionItemTrigger>
          Title 1
          <AccordionItemIndicator />
        </AccordionItemTrigger>
        <AccordionItemContent>Content 1</AccordionItemContent>
      </AccItem>
      <AccItem key="2" value="item2">
        <AccordionItemTrigger>
          Title 2
          <AccordionItemIndicator />
        </AccordionItemTrigger>
        <AccordionItemContent>Content 2</AccordionItemContent>
      </AccItem>
    </Accordion>
  ),
};

type AccordionItemStory = StoryObj<KvibAccordion.ItemProps>;

export const AccordionItem: AccordionItemStory = {
  argTypes: {
    value: {
      description: "The value of the accordion item.",
      table: {
        type: { summary: "string" },
      },
    },
    disabled: {
      description: "Whether the accordion item is disabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
  },
  render: args => (
    <KvibAccordion.Root collapsible>
      <KvibAccordion.Item {...args}>
        <KvibAccordion.ItemTrigger>Accordion item 1</KvibAccordion.ItemTrigger>
        <KvibAccordion.ItemContent>Content 1</KvibAccordion.ItemContent>
      </KvibAccordion.Item>
    </KvibAccordion.Root>
  ),
};
