import {
  Input as KvibInput,
  FormControl as KvibFormControl,
  FormLabel as KvibFormLabel,
  FormHelperText as KvibFormHelperText,
  FormErrorMessage as KvibFormErrorMessage,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibFormControl> = {
  title: "Komponenter/Form Control**",
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
type InvalidFormControlStory = StoryObj<typeof KvibFormControl>;
type RequiredFormControlStory = StoryObj<typeof KvibFormControl>;
type ReadOnlyFormControlStory = StoryObj<typeof KvibFormControl>;
type DisabledFormControlStory = StoryObj<typeof KvibFormControl>;

export const FormControl: FormControlStory = {
  args: { isRequired: false, isInvalid: false, isReadOnly: false, isDisabled: false },
  render: (args) => (
    <KvibFormControl {...args}>
      <KvibFormLabel label={"Label (valgfri)"} />
      <KvibFormHelperText helperText={"Hjelpetekst"} />
      <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />
      <KvibFormErrorMessage errorMessage={"Her er feilmelding"} />
    </KvibFormControl>
  ),
};
export const InvalidFormControl: InvalidFormControlStory = {
  args: { isInvalid: true },
  render: (args) => (
    <KvibFormControl {...args}>
      <KvibFormLabel label={"Label (valgfri)"} />
      <KvibFormHelperText helperText={"Hjelpetekst"} />
      <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />
      <KvibFormErrorMessage errorMessage={"Feilmelding"} />
    </KvibFormControl>
  ),
};
export const RequiredInvalidFormControl: RequiredFormControlStory = {
  args: { isRequired: true },
  render: (args) => (
    <KvibFormControl {...args}>
      <KvibFormLabel label={"Label (valgfri)"} />
      <KvibFormHelperText helperText={"Hjelpetekst"} />
      <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />
      <KvibFormErrorMessage errorMessage={"Feilmelding"} />
    </KvibFormControl>
  ),
};
export const ReadOnlyFormControl: ReadOnlyFormControlStory = {
  args: { isReadOnly: true },
  render: (args) => (
    <KvibFormControl {...args}>
      <KvibFormLabel label={"Label (valgfri)"} />
      <KvibFormHelperText helperText={"Hjelpetekst"} />
      <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />
      <KvibFormErrorMessage errorMessage={"Feilmelding"} />
    </KvibFormControl>
  ),
};
export const DisabledFormControl: DisabledFormControlStory = {
  args: { isDisabled: true },
  render: (args) => (
    <KvibFormControl {...args}>
      <KvibFormLabel label={"Label (valgfri)"} />
      <KvibFormHelperText helperText={"Hjelpetekst"} />
      <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />
      <KvibFormErrorMessage errorMessage={"Feilmelding"} />
    </KvibFormControl>
  ),
};
