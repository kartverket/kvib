import { Radio as KvibRadio } from "@Kvib/react/src/radio/Radio";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibRadio> = {
  title: "Komponenter/Knapper og lenker/Radio",
  component: KvibRadio,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    children: {
      description: "Text in button",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    colorScheme: {
      description: "Color of button",
      table: {
        type: { summary: "green | blue" },
      },
      options: ["green", "blue"],
      control: { type: "radio" },
    },
    size: {
      description: "Size of button",
      table: {
        type: { summary: "sm | md | lg" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    isDisabled: {
      description: "Toggles if button should be disabled",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibRadio>;

export const Radio: Story = {
  args: { colorScheme: "green", size: "md" },
  render: (args) => <KvibRadio {...args}>Klikk her</KvibRadio>,
};
