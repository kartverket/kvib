import { HStack, Icon } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Icon> = {
  title: "Komponenter/Icon",
  component: Icon,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    color: {
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
      table: { type: { summary: "20 | 24 | 40 | 48 | number" } },
      control: "radio",
      options: [20, 24, 40, 48],
      defaultValue: { summary: 24 },
    },
    filled: {
      table: { type: { summary: "boolean" } },
      control: "boolean",
      defaultValue: { summary: false },
    },
    ariaIsHidden: {
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

export const Preview: Story = {
  args: { icon: "favorite" },
  render: args => <Icon {...args} />,
};

export const ColorIcon: Story = {
  args: { size: 40 },
  render: args => {
    return (
      <HStack>
        <Icon {...args} icon="home" color="green.400" />
        // #1A833B er theme.colors.green[400]
        <Icon {...args} icon="home" color="green.400" filled={true} />
        <Icon {...args} icon="warning" color="orange" filled={true} />
      </HStack>
    );
  },
};

export const SizeIcon: Story = {
  args: { icon: "map" },
  render: args => {
    return (
      <HStack>
        <Icon {...args} size={20} />
        <Icon {...args} size={24} />
        <Icon {...args} size={40} />
        <Icon {...args} size={48} />
      </HStack>
    );
  },
};

export const WeightIcon: Story = {
  args: { icon: "database" },
  render: args => (
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

export const GradeIcon: Story = {
  args: { icon: "contactless" },
  render: args => (
    <HStack>
      <Icon {...args} grade={-25} />
      <Icon {...args} grade={0} />
      <Icon {...args} grade={200} />
    </HStack>
  ),
};
