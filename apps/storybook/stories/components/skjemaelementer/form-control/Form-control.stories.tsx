import {
  FormControl as KvibFormControl,
  FormErrorMessage as KvibFormErrorMessage,
  FormHelperText as KvibFormHelperText,
  FormLabel as KvibFormLabel,
  Input as KvibInput,
  Stack,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibFormControl> = {
  title: "Komponenter/Form Control",
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
  render: args => (
    <KvibFormControl {...args}>
      <KvibFormLabel>Label (valgfri)</KvibFormLabel>
      <KvibFormHelperText>Hjelpetekst</KvibFormHelperText>
      <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />
      <KvibFormErrorMessage>Her er feilmelding</KvibFormErrorMessage>
    </KvibFormControl>
  ),
};

export const State: Story = {
  render: args => (
    <Stack gap={4}>
      <KvibFormControl {...args}>
        <KvibFormLabel label={"Label (valgfri)"} />
        <KvibFormHelperText helperText={"Hjelpetekst"} />
        <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />
        <KvibFormErrorMessage errorMessage={"Feilmelding"} />
      </KvibFormControl>
      <hr />
      <KvibFormControl {...args} isRequired>
        <KvibFormLabel label={"Label (valgfri)"} />
        <KvibFormHelperText helperText={"Hjelpetekst"} />
        <KvibInput size={"md"} variant={"outline"} />
        <KvibFormErrorMessage errorMessage={"Feilmelding"} />
      </KvibFormControl>
      <hr />
      <KvibFormControl {...args} isDisabled>
        <KvibFormLabel label={"Label (valgfri)"} />
        <KvibFormHelperText helperText={"Hjelpetekst"} />
        <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />
        <KvibFormErrorMessage errorMessage={"Feilmelding"} />
      </KvibFormControl>
      <hr />
      <KvibFormControl {...args} isInvalid>
        <KvibFormLabel label={"Label (valgfri)"} />
        <KvibFormHelperText helperText={"Hjelpetekst"} />
        <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />
        <KvibFormErrorMessage errorMessage={"Feilmelding"} />
      </KvibFormControl>
      <hr />
      <KvibFormControl {...args} isReadOnly>
        <KvibFormLabel label={"Label (valgfri)"} />
        <KvibFormHelperText helperText={"Hjelpetekst"} />
        <KvibInput defaultValue={"Jeg er readOnly!"} size={"md"} variant={"outline"} />
        <KvibFormErrorMessage errorMessage={"Feilmelding"} />
      </KvibFormControl>
    </Stack>
  ),
};

export const Error: Story = {
  args: { isInvalid: true },
  render: args => (
    <Stack gap={4} direction={"row"}>
      <KvibFormControl {...args}>
        <KvibFormLabel>Label (valgfri)</KvibFormLabel>
        <KvibFormHelperText>Hjelpetekst</KvibFormHelperText>
        <KvibInput placeholder={"Eksempel"} size={"md"} variant={"outline"} />
        <KvibFormErrorMessage>Her er feilmelding</KvibFormErrorMessage>
      </KvibFormControl>
    </Stack>
  ),
};
