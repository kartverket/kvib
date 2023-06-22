import { Icon } from "@kvib/react/src/icon";
import { HStack, Spacer } from "@kvib/react/src/layout";
import { Meta, StoryObj } from "@storybook/react";
import { colors } from "@kvib/react/src/theme/tokens";

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
  args: { icon: "search" },
  render: (args) => <Icon {...args} />,
};

export const exampleIcon: Story = {
  args: { color: colors.green[400] },
  render: (args) => (
    <HStack>
      <Icon {...args} icon="home" />,
      <Spacer />
      <Icon {...args} icon="home" fill={true} />,
      <Spacer />
      <Icon icon="warning" color="orange" fill={true} />,
      <Spacer />
      <Icon icon="error" color="red" fill={true} />,
      <Spacer />
      <Icon icon="info" color="blue" size={40} />
      <Spacer />
      <Icon icon="info" color="blue" size={32} fill={true} />
    </HStack>
  ),
};
