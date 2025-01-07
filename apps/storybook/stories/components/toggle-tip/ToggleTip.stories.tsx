import { Button, ToggleTip, ToggleTipProps } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<ToggleTipProps> = {
  title: "Komponenter/Toggle Tip",
  component: ToggleTip,
  parameters: {
    docs: {
      story: { inline: true },
    },
    a11y: {
      disable: true,
    },
  },
  argTypes: {
    immediate: {
      description: "Whether the content should be shown immediately",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
  },
  args: {
    size: "md",
  },
};

export default meta;

/** Trenger eget interface for å arve fargepaletten til knappen i eksempelet */
interface Props extends ToggleTipProps {
  colorPalette: "green" | "blue";
}

const ToggleTipExample = (args: Props) => (
  <ToggleTip content="Toggle Tip content" {...args}>
    <Button colorPalette={args.colorPalette}>Show Toggle Tip</Button>
  </ToggleTip>
);

type Story = StoryObj<Props>;

export const Preview: Story = {
  render: args => <ToggleTipExample {...args} />,
};
