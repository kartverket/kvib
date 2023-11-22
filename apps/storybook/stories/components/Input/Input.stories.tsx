import {
  Input as KvibInput,
  InputGroup as KvibInputGroup,
  InputLeftAddon as KvibInputLeftAddon,
  InputRightAddon as KvibInputRightAddon,
  InputRightElement as KvibInputRightElement,
  Icon as KvibIcon,
  Stack,
  FormControl,
  FormLabel,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibInput> = {
  title: "Komponenter/Input/Input",
  component: KvibInput,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    size: {
      description: "Size of input",
      table: {
        type: { summary: "lg | md | sm | xs" },
        defaultValue: { summary: "md" },
      },
      options: ["lg", "md", "sm", "xs"],
      control: { type: "radio" },
    },
    variant: {
      description: "Variant",
      table: {
        type: { summary: "outline | filled | flushed | unstyled" },
        defaultValue: { summary: "outline" },
      },
      options: ["outline", "filled", "flushed", "unstyled"],
      control: { type: "radio" },
    },
    isRequired: {
      description: "Toggles if input should be required",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    isReadOnly: {
      description: "Toggles if input should be read-only",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    isInvalid: {
      description: "Toggles if input should be invalid",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    isDisabled: {
      description: "Toggles if input should be disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
  },
};

export default meta;
type InputStory = StoryObj<typeof KvibInput>;
type InputGroupStory = StoryObj<typeof KvibInputGroup>;

export const Input: InputStory = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  args: {},
  render: (args) => <KvibInput placeholder="Skriv her..." {...args} />,
};

export const InputVariants: InputStory = {
  args: {
    placeholder: "Skriv her...",
    colorScheme: "green",
  },
  render: (args) => (
    <Stack h="12rem">
      <KvibInput {...args} variant="outline" />
      <KvibInput {...args} variant="filled" />
      <KvibInput {...args} variant="flushed" />
      <KvibInput {...args} variant="unstyled" />
    </Stack>
  ),
};

export const InputForm: InputStory = {
  args: {},
  render: (args) => (
    <FormControl isRequired>
      <FormLabel>Fornavn</FormLabel>
      <KvibInput autoComplete="given-name" {...args} />
    </FormControl>
  ),
};

export const InputGroup: InputGroupStory = {
  args: {},
  render: (args) => (
    <Stack gap="1rem">
      <KvibInputGroup {...args}>
        <KvibInput placeholder={"Skriv her..."} />
        <KvibInputRightElement>
          <KvibIcon icon={"add"} />
        </KvibInputRightElement>
      </KvibInputGroup>
      <KvibInputGroup {...args}>
        <KvibInputLeftAddon children={"https://"} />
        <KvibInput placeholder={"minside"} />
        <KvibInputRightAddon children={".no"} />
      </KvibInputGroup>
    </Stack>
  ),
};
