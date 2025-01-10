import { HStack, RadioCard, RadioCardItem } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof RadioCard> = {
  title: "Komponenter/Radio Card",
  component: RadioCard,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    size: {
      description: "Size of the component",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    defaultChecked: {
      description: "If true, the radio wil be initially checked",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: { summary: "false" },
      control: { type: "boolean" },
    },
    disabled: {
      description: "If true, the radio will be disabled",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: { summary: "false" },
      control: { type: "boolean" },
    },
    variant: {
      description: "The variant of the radio",
      table: {
        type: { summary: "string" },
      },
      control: { type: "text" },
    },
    readOnly: {
      description: "If true, the radio will be read-only",
      table: {
        type: { summary: "boolean" },
      },
      defaultValue: { summary: "false" },
      control: { type: "boolean" },
    },
    onChange: {
      description: "The function that is ran when the state of the radio changes",
      table: {
        type: { summary: "callback()" },
      },
      defaultValue: { summary: "none" },
    },
    colorPalette: {
      description: "Color of the radio",
      table: {
        type: {
          summary: "green | blue | gray | red",
        },
        defaultValue: { summary: "green" },
      },
      options: ["green", "blue", "gray", "red"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof RadioCard>;

const items = [
  { value: "option1", title: "Option 1" },
  { value: "option2", title: "Option 2" },
];

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
RadioCard.displayName = "RadioCard";
RadioCardItem.displayName = "RadioCardItem";
HStack.displayName = "HStack";

export const Preview: Story = {
  render: args => (
    <RadioCard defaultValue="next" {...args}>
      <HStack align="stretch">
        {items.map(item => (
          <RadioCardItem label={item.title} key={item.value} value={item.value} />
        ))}
      </HStack>
    </RadioCard>
  ),
};
