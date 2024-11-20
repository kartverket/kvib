import {
  AbsoluteCenter as KvibAbsoluteCenter,
  Box as KvibBox,
  Center as KvibCenter,
  Separator as KvibSeparator,
  Stack as KvibStack,
  Text as KvibTekst,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSeparator> = {
  title: "Komponenter/Separator",
  component: KvibSeparator,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    variant: {
      description: "The variant of the Divider",
      table: {
        type: { summary: "solid | dashed" },
        defaultValue: { summary: "solid" },
      },
      options: ["solid", "dashed"],
      control: "radio",
    },
    orientation: {
      description: "The orientation of the Divider",
      table: {
        type: { summary: "horizontal | vertical" },
        defaultValue: { summary: "horizontal" },
      },
      options: ["horizontal", "vertical"],
      control: "radio",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibSeparator>;

export const Preview: Story = {
  render: args => <KvibSeparator {...args} />,
};

export const DividerVariants: Story = {
  args: { borderColor: "blue.600" },
  render: args => (
    <KvibStack gap="4">
      <KvibSeparator {...args} variant="solid" />
      <KvibSeparator {...args} variant="dashed" />
    </KvibStack>
  ),
};

export const DividerColorsWidths: Story = {
  render: args => (
    <KvibStack gap="4">
      <KvibSeparator {...args} borderWidth="1px" borderColor="blue.500" />
      <KvibSeparator {...args} borderWidth="2px" borderColor="green.500" />
    </KvibStack>
  ),
};

export const DividerVertical: Story = {
  args: { borderColor: "blue.600" },
  render: args => (
    <KvibCenter height="50px">
      <KvibSeparator {...args} orientation="vertical" />
    </KvibCenter>
  ),
};

export const DividerContent: Story = {
  args: { borderColor: "blue.600" },
  render: args => (
    <KvibBox position="relative" padding="10">
      <KvibSeparator {...args} />
      <KvibAbsoluteCenter bg="white" px="4">
        <KvibTekst>KVIB</KvibTekst>
      </KvibAbsoluteCenter>
    </KvibBox>
  ),
};
