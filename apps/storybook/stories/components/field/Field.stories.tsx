import { FieldProps, Field as KvibFormControl, Input as KvibInput } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibFormControl> = {
  title: "Komponenter/Field",
  component: KvibFormControl,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    required: {
      description: "Toggles if input should be required",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    invalid: {
      description: "Toggles if input should be invalid",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    disabled: {
      description: "Toggles if input should be disabled",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    readOnly: {
      description: "Toggles if input should be disabled",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibFormControl>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibFormControl.displayName = "Field";
(KvibInput as any).displayName = "Input";

export const Preview: Story = {
  args: {
    label: "Label",
    helperText: "Helper text",
  },
  render: (args: FieldProps) => (
    <KvibFormControl {...args}>
      <KvibInput />
    </KvibFormControl>
  ),
};
