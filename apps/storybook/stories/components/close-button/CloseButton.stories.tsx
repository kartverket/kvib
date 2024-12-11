import { CloseButton as KvibCloseButton } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibCloseButton> = {
  title: "Komponenter/Close Button",
  component: KvibCloseButton,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    colorPalette: {
      description: "The visual color appearance of the button",
      table: {
        type: { summary: "green | blue | red | gray" },
      },
      defaultValue: { summary: "gray" },
      options: ["green", "blue", "red", "gray"],
      control: "radio",
    },
    size: {
      description: "Size of the Button",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    disabled: {
      description: "If true, the button will be disabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibCloseButton>;

export const Preview: Story = {
  render: args => <KvibCloseButton {...args} />,
};
