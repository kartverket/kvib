import { FieldProps } from "@kvib/react";
import { Field as KvibFormControl, Input as KvibInput } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibFormControl> = {
  title: "Komponenter/Field",
  component: KvibFormControl,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    isRequired: {
      description: "Toggles if input should be required",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    isInvalid: {
      description: "Toggles if input should be invalid",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    isDisabled: {
      description: "Toggles if input should be disabled",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    isReadOnly: {
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
