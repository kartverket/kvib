import { Checkbox as KvibCheckbox } from "@kvib/react/src";
import { HStack } from "@kvib/react/src/layout";
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
      description: "The color of the Checkbox.",
      table: {
        type: { summary: "green | blue" },
        defaultValue: { summary: "green" },
      },
      control: "string",
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
  args: {
    children: "Dette er en avmerkingsboks",
  },
  render: (args) => (
    <HStack>
      <KvibCheckbox {...args} colorScheme="blue">
        {args.children}
      </KvibCheckbox>
      ,
      <KvibCheckbox {...args} colorScheme="green">
        {args.children}
      </KvibCheckbox>
      ,
    </HStack>
  ),
};
