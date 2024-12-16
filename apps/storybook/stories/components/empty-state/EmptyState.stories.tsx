import { EmptyState } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof EmptyState> = {
  title: "Komponenter/Empty State",
  component: EmptyState,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    title: {
      description: "The title of the Empty State",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    description: {
      description: "The description of the Empty State",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    icon: {
      description: "The icon to display",
      table: {
        type: { summary: "ReactNode" },
      },
    },
  },
  args: {
    title: "Her var det tomt",
    description: "Empty State vises når det ikke er noe å vise",
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

export const Preview: Story = {
  render: args => <EmptyState {...args}></EmptyState>,
};
