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
      control: { type: "range", min: 100, max: 700, step: 100 },
      defaultValue: { summary: 600 },
    },
    grade: {
      control: "radio",
      options: [-25, 0, 200],
      defaultValue: { summary: 0 },
    },
    size: {
      control: "radio",
      options: [20, 24, 40, 48],
      defaultValue: { summary: 24 },
    },
    isFilled: {
      control: "boolean",
      defaultValue: { summary: false },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const defaultIcon: Story = {
  args: { icon: "favorite" },
  render: (args) => <Icon {...args} />,
};

export const exampleIcon: Story = {
  args: { color: colors.green[400] },
  render: (args) => (
    <HStack>
      <Icon {...args} icon="home" />,
      <Spacer />
      <Icon {...args} icon="home" isFilled={true} />,
      <Spacer />
      <Icon icon="warning" color="orange" isFilled={true} />,
      <Spacer />
      <Icon icon="error" color="red" isFilled={true} />,
      <Spacer />
      <Icon icon="info" color="blue" size={40} />
      <Spacer />
      <Icon icon="info" color="blue" size={48} isFilled={true} />
    </HStack>
  ),
};
