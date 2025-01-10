import { Switch as KvibSwitch, SwitchProps } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSwitch> = {
  title: "Komponenter/Switch",
  component: KvibSwitch,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    colorPalette: {
      description: "Color palette of the component",
      table: {
        type: { summary: "green | blue | red | gray" },
        defaultValue: { summary: "green" },
      },
      options: ["green", "blue", "red", "gray"],
      control: "radio",
    },
    size: {
      description: "The size of the Switch",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: "radio",
    },
    variant: {
      description: "The variant of the Switch",
      table: {
        type: { summary: "solid | raised" },
        defaultValue: { summary: "solid" },
      },
      options: ["solid", "raised"],
      control: "radio",
    },
    checked: {
      description:
        "If true, the checkbox will be checked. You'll need to pass onChange to update its value (since it is now controlled)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    disabled: {
      description: "If true, the checkbox will be disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    invalid: {
      description: "If true, the checkbox is marked as invalid. Changes style of unchecked state.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    required: {
      description: "If true, the checkbox input is marked as required, and required attribute will be added",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    value: {
      description:
        "The value to be used in the checkbox input. This is the value that will be returned on form submission.",
      table: {
        type: { summary: "string | number" },
      },
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibSwitch>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibSwitch.displayName = "Switch";

export const Preview: Story = {
  render: (args: SwitchProps) => <KvibSwitch {...args} />,
};
