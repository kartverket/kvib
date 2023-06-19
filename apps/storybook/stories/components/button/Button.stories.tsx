import { Button as KvibButton } from "@kvib/react/src/button";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibButton> = {
  title: "Komponenter/Button<3",
  component: KvibButton,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    isDisabled: {
      description: "If true, the button will be disabled.",
      table: {
        type: { summary: Boolean },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibButton>;

export const Button: Story = {
  args: { children: "Klikk her", colorScheme: "green", size: "md", variant: "solid", isDisabled: false },
  render: (args) => <KvibButton {...args}>{args.children}</KvibButton>,
};
