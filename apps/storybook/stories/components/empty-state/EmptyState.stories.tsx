import { EmptyState } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof EmptyState> = {
  title: "Komponenter/Empty State",
  component: EmptyState,
  parameters: {
    docs: {
      story: { inline: true },
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
    title: "Empty State title",
    description: "Description",
  },
};

export default meta;
type Story = StoryObj<typeof EmptyState>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
EmptyState.displayName = "EmptyState";

export const Preview: Story = {
  render: args => <EmptyState {...args} />,
};
