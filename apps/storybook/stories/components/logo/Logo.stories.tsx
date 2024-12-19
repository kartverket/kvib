import { Logo as KvibLogo, Stack as KvibStack } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibLogo> = {
  title: "Komponenter/Logo",
  component: KvibLogo,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    label: {
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    variant: {
      table: {
        type: { summary: "vertical | horizontal" },
        defaultValue: { summary: "vertical" },
      },
      options: ["vertical", "horizontal"],
      control: { type: "radio" },
    },
    size: {
      table: {
        type: { summary: "number" },
      },
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibLogo>;

export const Preview: Story = {
  args: { label: "Logo" },
  render: args => <KvibLogo {...args} />,
};

export const LogoHorizontal: Story = {
  args: { label: "Logo", variant: "horizontal" },
  render: args => <KvibLogo {...args} />,
};

export const LogoSizes: Story = {
  args: { label: "Logo", variant: "horizontal" },
  render: args => (
    <KvibStack>
      <KvibLogo {...args} size={100} />
      <KvibLogo {...args} size={200} />
      <KvibLogo {...args} size={300} />
    </KvibStack>
  ),
};
