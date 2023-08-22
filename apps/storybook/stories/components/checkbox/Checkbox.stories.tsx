import { Checkbox as KvibCheckbox, CheckboxGroup as KvibCheckboxGroup, Text } from "@kvib/react/src";
import { Stack } from "@kvib/react/src/layout";
import { Meta, StoryObj } from "@storybook/react";

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

export const Checkbox: Story = {
  args: {
    children: "Dette er en avmerkingsboks",
  },
  render: (args) => <KvibCheckbox {...args}>{args.children}</KvibCheckbox>,
};

export const CheckboxColors: Story = {
  args: {},
  render: (args) => (
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
  render: (args) => (
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
  render: (args) => (
    <Stack>
      <KvibCheckbox {...args}>Normal</KvibCheckbox>
      <KvibCheckbox isDisabled>Disabled</KvibCheckbox>
      <KvibCheckbox isInvalid>Invalid</KvibCheckbox>
    </Stack>
  ),
};

export const CheckboxGroup: Story = {
  args: { size: "sm" },
  render: (args) => (
    <Stack>
      <Text>Grønn</Text>
      <KvibCheckboxGroup colorScheme="green" {...args}>
        <KvibCheckbox>Valg 1</KvibCheckbox>
        <KvibCheckbox>Valg 2</KvibCheckbox>
      </KvibCheckboxGroup>
      <Text>Blå</Text>
      <KvibCheckboxGroup colorScheme="blue" {...args}>
        <KvibCheckbox>Valg 1</KvibCheckbox>
        <KvibCheckbox>Valg 2</KvibCheckbox>
      </KvibCheckboxGroup>
    </Stack>
  ),
};
