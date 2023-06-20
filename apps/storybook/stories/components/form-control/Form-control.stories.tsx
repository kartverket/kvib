import { FormControl as KvibFormControl } from "@kvib/react/src/form-control/Form-control";
import { FormLabel } from "@kvib/react/src/form-control/Form-label";
import { FormHelperText } from "@kvib/react/src/form-control/Form-helper-text";
import { FormErrorMessage } from "@kvib/react/src/form-control/Form-error-message";

import { Input } from "@kvib/react/src/input/Input";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibFormControl> = {
  title: "Komponenter/Form-control",
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
type FormControlStory = StoryObj<typeof KvibFormControl>;

export const FormControl: FormControlStory = {
  args: { isRequired: false, isInvalid: false, isReadOnly: false, isDisabled: false },
  render: (args) => (
    <KvibFormControl {...args}>
      <FormLabel label={"Label"} />
      <Input placeholder={"Skriv her..."} size={"md"} variant={"outline"} />
      <FormHelperText helperText={"Hjelpetekst..."} />
      <FormErrorMessage errorMessage={"Må fylles ut!"} />
    </KvibFormControl>
  ),
};
