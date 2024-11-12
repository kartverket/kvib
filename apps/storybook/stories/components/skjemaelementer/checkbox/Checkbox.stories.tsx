import { Checkbox as KvibCheckbox, Group as KvibCheckboxGroup, Stack, Text } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";
import { IndeterminateExample } from "./IndeterminateExample";

const meta: Meta<typeof KvibCheckbox> = {
  title: "Komponenter/Checkbox",
  component: KvibCheckbox,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    colorScheme: {
      description: "The color of the Checkbox",
      table: {
        type: { summary: "green | blue" },
        defaultValue: { summary: "green" },
      },
      control: "radio",
      options: ["green", "blue"],
    },
    size: {
      description: "The size of the checkbox",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      control: "radio",
      options: ["sm", "md", "lg"],
    },
    isDisabled: {
      description: "If true, the checkbox will be disabled",
      table: {
        type: { summary: "true | false" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    isInvalid: {
      description: "If true, the checkbox will be invalid",
      table: {
        type: { summary: "true | false" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    iconColor: {
      description: "The color of the checkmark",
      table: {
        type: { summary: "css | color variable" },
        defaultValue: { summary: "white" },
      },
      control: "color",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibCheckbox>;

export const Preview: Story = {
  args: {
    children: "Dette er en avmerkingsboks",
  },
  render: args => (
    <KvibCheckbox {...args} defaultChecked>
      {args.children}
    </KvibCheckbox>
  ),
};

export const CheckboxColors: Story = {
  args: {},
  render: args => (
    <Stack>
      <KvibCheckbox {...args} colorScheme="blue">
        Blå
      </KvibCheckbox>
      <KvibCheckbox {...args} colorScheme="green">
        Grønn
      </KvibCheckbox>
    </Stack>
  ),
};

export const CheckboxSizes: Story = {
  args: {
    children: "Huk av",
  },
  render: args => (
    <Stack>
      <KvibCheckbox {...args} size="sm">
        {args.children}
      </KvibCheckbox>
      <KvibCheckbox {...args} size="md">
        {args.children}
      </KvibCheckbox>
      <KvibCheckbox {...args} size="lg">
        {args.children}
      </KvibCheckbox>
    </Stack>
  ),
};

export const CheckboxStates: Story = {
  args: {},
  render: args => (
    <Stack direction={"row"} gap={4}>
      <KvibCheckbox {...args}>Normal</KvibCheckbox>
      <KvibCheckbox isDisabled>Disabled</KvibCheckbox>
      <KvibCheckbox isInvalid>Invalid</KvibCheckbox>
    </Stack>
  ),
};

export const CheckboxGroup: Story = {
  args: {},
  render: args => (
    <Stack>
      <Text as={"b"}>Grønn</Text>
      <KvibCheckboxGroup colorScheme="green">
        <KvibCheckbox {...args}>Valg 1</KvibCheckbox>
        <KvibCheckbox {...args}>Valg 2</KvibCheckbox>
      </KvibCheckboxGroup>
      <Text as={"b"}>Blå</Text>
      <KvibCheckboxGroup colorScheme="blue">
        <KvibCheckbox {...args}>Valg 1</KvibCheckbox>
        <KvibCheckbox {...args}>Valg 2</KvibCheckbox>
      </KvibCheckboxGroup>
    </Stack>
  ),
};

export const CheckboxIndeterminate: Story = {
  args: {},
  render: args => <IndeterminateExample {...args} />,
};
