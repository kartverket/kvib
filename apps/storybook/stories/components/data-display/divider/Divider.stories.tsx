import {
  AbsoluteCenter as KvibAbsoluteCenter,
  Box as KvibBox,
  Center as KvibCenter,
  Divider as KvibDivider,
  Stack as KvibStack,
  Text as KvibTekst,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibDivider> = {
  title: "Komponenter/Data Display/Divider",
  component: KvibDivider,
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
type Story = StoryObj<typeof KvibDivider>;

export const Divider: Story = {
  args: {},
  render: (args) => <KvibDivider {...args} />,
};

export const DividerVariants: Story = {
  args: { borderColor: "blue.600" },
  render: (args) => (
    <KvibStack spacing="4">
      <KvibDivider {...args} variant="solid" />
      <KvibDivider {...args} variant="dashed" />
    </KvibStack>
  ),
};

export const DividerColorsWidths: Story = {
  args: {},
  render: (args) => (
    <KvibStack spacing="4">
      <KvibDivider {...args} borderWidth="1px" borderColor="blue.500" />
      <KvibDivider {...args} borderWidth="2px" borderColor="green.500" />
    </KvibStack>
  ),
};

export const DividerVertical: Story = {
  args: { borderColor: "blue.600" },
  render: (args) => (
    <KvibCenter height="50px">
      <KvibDivider {...args} orientation="vertical" />
    </KvibCenter>
  ),
};

export const DividerContent: Story = {
  args: { borderColor: "blue.600" },
  render: (args) => (
    <KvibBox position="relative" padding="10">
      <KvibDivider {...args} />
      <KvibAbsoluteCenter bg="white" px="4">
        <KvibTekst>KVIB</KvibTekst>
      </KvibAbsoluteCenter>
    </KvibBox>
  ),
};
