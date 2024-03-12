import { Textarea as KvibTextarea, Stack as KvibStack, Text, Stack, RadioGroup, Radio } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";
import { ChangeEvent, useState } from "react";

const meta: Meta<typeof KvibTextarea> = {
  title: "Skjemaelementer/Textarea",
  component: KvibTextarea,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    errorBorderColor: {
      description: "The border color when the textarea is invalid. Use color keys in `theme.colors`",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    focusBorderColor: {
      description: "The border color when the textarea is focused. Use color keys in `theme.colors`",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    isDisabled: {
      description:
        "If true, the form control will be disabled. This has 2 side effects: - The FormLabel will have `data-disabled` attribute - The form element (e.g, Input) will be disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    isInvalid: {
      description:
        "If true, the form control will be invalid. This has 2 side effects: - The FormLabel and FormErrorIcon will have `data-invalid` set to true - The form element (e.g, Input) will have `aria-invalid` set to true",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    isReadOnly: {
      description: "If true, the form control will be readonly",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    isRequired: {
      description:
        "If true, the form control will be required. This has 2 side effects: - The FormLabel will show a required indicator - The form element (e.g, Input) will have `aria-required` set to true",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    size: {
      description: "The size of the Textarea",
      table: {
        type: { summary: "'xs' | 'sm' | 'md' | 'lg'" },
        defaultValue: { summary: "md" },
      },
      options: ["xs", "sm", "md", "lg"],
      control: "radio",
    },
    variant: {
      description: "The variant of the Textarea",
      table: {
        type: { summary: "'outline' | 'flushed' | 'filled' | 'unstyled'" },
        defaultValue: { summary: "outline" },
      },
      options: ["outline", "flushed", "filled", "unstyled"],
      control: "radio",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibTextarea>;

export const Textarea: Story = {
  args: { placeholder: "Dette er et eksempel på placeholder" },
  render: (args) => <KvibTextarea {...args} />,
};

const TextAreaControlledExample = ({ ...args }) => {
  let [value, setValue] = useState<string>("");

  let handleInputChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
    let inputValue = e.target.value;
    setValue(inputValue);
  };
  return (
    <>
      <Text mb="8px">Value: {value}</Text>
      <KvibTextarea {...args} value={value} onChange={handleInputChange} />
    </>
  );
};

export const TextareaControlled: Story = {
  args: { placeholder: "Placeholder", size: "sm" },
  render: (args) => <TextAreaControlledExample {...args} />,
};

const TextareaResizeExample = () => {
  const [resize, setResize] = useState("horizontal");

  return (
    <>
      <RadioGroup defaultValue={resize} onChange={setResize} mb={6}>
        <Stack direction="row" spacing={5}>
          <Radio value="horizontal">Horizontal</Radio>
          <Radio value="vertical">Vertical</Radio>
          <Radio value="none">None</Radio>
        </Stack>
      </RadioGroup>

      <KvibTextarea placeholder="Here is a sample placeholder" size="sm" resize={resize} />
    </>
  );
};

export const TextareaResize: Story = {
  render: () => <TextareaResizeExample />,
};

export const TextareaSizes: Story = {
  args: {},
  render: (args) => (
    <KvibStack>
      <KvibTextarea {...args} size="xs" placeholder="xs" />
      <KvibTextarea {...args} size="sm" placeholder="sm" />
      <KvibTextarea {...args} size="md" placeholder="md" />
      <KvibTextarea {...args} size="lg" placeholder="lg" />
    </KvibStack>
  ),
};

export const TextareaVariants: Story = {
  args: {},
  render: (args) => (
    <KvibStack>
      <KvibTextarea {...args} variant="outline" placeholder="outline" />
      <KvibTextarea {...args} variant="filled" placeholder="filled" />
      <KvibTextarea {...args} variant="flushed" placeholder="flushed" />
      <KvibTextarea {...args} variant="unstyled" placeholder="unstyled" />
    </KvibStack>
  ),
};

export const TextareaStates: Story = {
  render: () => (
    <Stack>
      <KvibTextarea placeholder="isInvalid" isInvalid />
      <KvibTextarea placeholder="isReadOnly" isReadOnly />
      <KvibTextarea placeholder="isDisabled" isDisabled />
    </Stack>
  ),
};
