import { Icon } from "@kvib/react/src/icon";
import { HStack } from "@kvib/react/src/layout";
import { Meta, StoryObj } from "@storybook/react";
import { colors } from "@kvib/react/src/theme/tokens";

const meta: Meta<typeof Icon> = {
  title: "Design Fundament/Ikoner",
  component: Icon,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    color: {
      table: { type: "string", defaultValue: { summary: "black" } },
      control: "text",
    },
    weight: {
      table: { type: { summary: "100 | 200 | 300 | 400 | 500 | 600 | 700" } },
      control: { type: "range", min: 100, max: 700, step: 100 },
      defaultValue: { summary: 600 },
    },
    grade: {
      table: { type: { summary: "-25 | 0 | 200" } },
      control: "radio",
      options: [-25, 0, 200],
      defaultValue: { summary: 0 },
    },
    size: {
      table: { type: { summary: "20 | 24 | 40 | 48" } },
      control: "radio",
      options: [20, 24, 40, 48],
      defaultValue: { summary: 24 },
    },
    isFilled: {
      table: { type: { summary: "boolean" } },
      control: "boolean",
      defaultValue: { summary: false },
    },
    className: {
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Icon>;

export const defaultIcon: Story = {
  args: { icon: "favorite" },
  render: (args) => <Icon {...args} />,
};

export const colorIcon: Story = {
  args: { size: 40 },
  render: (args) => (
    <HStack>
      <Icon {...args} icon="home" color={colors.green[400]} />
      // #1A833B er colors.green[400]
      <Icon {...args} icon="home" color={colors.green[400]} isFilled={true} />
      <Icon {...args} icon="warning" color="orange" isFilled={true} />
    </HStack>
  ),
};

export const sizeIcon: Story = {
  args: { color: colors.green[400], icon: "map" },
  render: (args) => (
    <HStack>
      <Icon {...args} size={20} />
      <Icon {...args} size={24} />
      <Icon {...args} size={40} />
      <Icon {...args} size={48} />
    </HStack>
  ),
};

export const weightIcon: Story = {
  args: { color: colors.green[400], icon: "database" },
  render: (args) => (
    <HStack>
      <Icon {...args} weight={100} />
      <Icon {...args} weight={200} />
      <Icon {...args} weight={300} />
      <Icon {...args} weight={400} />
      <Icon {...args} weight={500} />
      <Icon {...args} weight={600} />
      <Icon {...args} weight={700} />
    </HStack>
  ),
};

export const gradeIcon: Story = {
  args: { color: colors.green[400], icon: "contactless" },
  render: (args) => (
    <HStack>
      <Icon {...args} grade={-25} />
      <Icon {...args} grade={0} />
      <Icon {...args} grade={200} />
    </HStack>
  ),
};
