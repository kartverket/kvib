import { Icon } from "@kvib/react/src/icon";
import { Meta, StoryObj } from "@storybook/react";
import { Colors } from "@kvib/react/src/theme/tokens";

const meta: Meta<typeof Icon> = {
  title: "Design Fundament/Ikoner**",
  component: Icon,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    color: {
      control: "color",
      defaultValue: { summary: "black" },
    },
    weight: {
      control: "number",
      defaultValue: { summary: 600 },
    },
    grade: {
      control: "number",
      defaultValue: { summary: 0 },
    },
    size: {
      control: "number",
      defaultValue: { summary: 24 },
    },
    fill: {
      control: "boolean",
      defaultValue: { summary: false },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const defaultIcon: Story = {
  args: { icon: "warning" },
  render: (args) => <Icon {...args} />,
};

export const exampleIcon: Story = {
  args: {},
  render: (args, colors) => <Icon icon="search" color={colors.green[400]} />,
};
