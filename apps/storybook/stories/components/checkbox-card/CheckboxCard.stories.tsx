import { CheckboxCard } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof CheckboxCard> = {
  title: "Komponenter/Checkbox Card",
  component: CheckboxCard,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    colorPalette: {
      description: "The color of the component",
      table: {
        type: { summary: "green | blue" },
        defaultValue: { summary: "green" },
      },
      control: "radio",
      options: ["green", "blue"],
    },
    size: {
      description: "The size of the component",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    disabled: {
      description: "If true, the component will be disabled",
      table: {
        type: { summary: "true | false" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    invalid: {
      description: "If true, the checkbox will be invalid",
      table: {
        type: { summary: "true | false" },
      },
      defaultValue: { summary: false },
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof CheckboxCard>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */

export const Preview: Story = {
  render: args => <CheckboxCard defaultChecked label="Label" description="Checkbox Card description" {...args} />,
};
