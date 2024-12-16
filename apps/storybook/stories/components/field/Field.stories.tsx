import { FieldProps, Field as KvibFormControl, Input as KvibInput } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibFormControl> = {
  title: "Komponenter/Field",
  component: KvibFormControl,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
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

export const Preview: Story = {
  render: (args: FieldProps) => (
    <KvibFormControl label={"Label (valgfri)"} helperText={"Hjelpetekst"} errorMessage={"Feilmelding"} {...args}>
      <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />
    </KvibFormControl>
  ),
};
