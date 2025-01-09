import { Checkbox as KvibCheckbox } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibCheckbox> = {
  title: "Komponenter/Checkbox",
  component: KvibCheckbox,
  parameters: {
    docs: {
      story: { inline: true },
    },
    layout: "centered",
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
type Story = StoryObj<typeof KvibCheckbox>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibCheckbox.displayName = "Checkbox";

export const Preview: Story = {
  render: args => (
    <KvibCheckbox defaultChecked {...args}>
      Checkbox label
    </KvibCheckbox>
  ),
};
