import { Input as KvibInput } from "@chakra-ui/react";
import { InputGroup as KvibInputGroup } from "@chakra-ui/react";
import { InputLeftAddon as KvibInputLeftAddon } from "@chakra-ui/react";
import { InputRightAddon as KvibInputRightAddon } from "@chakra-ui/react";
import { InputLeftElement as KvibInputLeftElement } from "@chakra-ui/react";
import { InputRightElement as KvibInputRightElement } from "@chakra-ui/react";
import { Icon as KvibIcon } from "@kvib/react/src/icon/Icon";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibInput> = {
  title: "Komponenter/Input",
  component: KvibInput,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
    a11y: {
      // This option disables all a11y checks on this story
      disable: true,
    },
  },
  argTypes: {
    placeholder: {
      description: "Placeholder for text",
      table: {
        defaultValue: { summary: "Skriv her..." },
      },
      control: "text",
    },
    size: {
      description: "Size of input",
      table: {
        type: { summary: "lg | md | sm | xs" },
        defaultValue: { summary: "md" },
      },
      options: ["lg", "md", "sm", "xs"],
      control: { type: "select" },
    },
    variant: {
      description: "Variant",
      table: {
        type: { summary: "outline | filled | flushed | unstyled" },
        defaultValue: { summary: "outline" },
      },
      options: ["outline", "filled", "flushed", "unstyled"],
      control: { type: "select" },
    },
    isRequired: {
      description: "Toggles if input should be required",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    isReadOnly: {
      description: "Toggles if input should be read-only",
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
  },
};

export default meta;
type InputStory = StoryObj<typeof KvibInput>;
type InputGroupStory = StoryObj<typeof KvibInputGroup>;
type InputLeftElementStory = StoryObj<typeof KvibInputLeftElement>;
type InputRightElementStory = StoryObj<typeof KvibInputRightElement>;

export const Input: InputStory = {
  args: {
    placeholder: "Skriv her...",
    size: "md",
    variant: "outline",
    isDisabled: false,
    isInvalid: false,
    isReadOnly: false,
    isRequired: false,
  },
  render: (args) => <KvibInput {...args} />,
};

export const InputGroup: InputGroupStory = {
  args: {},
  render: (args) => (
    <KvibInputGroup {...args}>
      <KvibInputLeftAddon children={"https://"} />
      <KvibInput placeholder={"minside"} />
      <KvibInputRightAddon children={".no"} />
    </KvibInputGroup>
  ),
};

export const InputLeftElement: InputLeftElementStory = {
  args: {},
  render: (args) => (
    <KvibInputGroup {...args}>
      <KvibInputLeftElement>
        <KvibIcon icon={"add"} />
      </KvibInputLeftElement>
      <KvibInput placeholder={"Skriv her..."} />
    </KvibInputGroup>
  ),
};

export const InputRightElement: InputRightElementStory = {
  args: {
    size: "md",
  },
  render: (args) => (
    <KvibInputGroup {...args}>
      <KvibInput placeholder={"Skriv her..."} />
      <KvibInputRightElement>
        <KvibIcon icon={"add"} />
      </KvibInputRightElement>
    </KvibInputGroup>
  ),
};
