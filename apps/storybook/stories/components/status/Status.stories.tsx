import { Status } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Status> = {
  title: "Komponenter/Status",
  component: Status,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    value: {
      description: "The value of the component",
      table: {
        type: { summary: "info | success | warning | error" },
        defaultValue: { summary: "info" },
      },
      options: ["info", "success", "warning", "error"],
      control: { type: "radio" },
    },
    size: {
      description: "The size of the component",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
  args: {
    value: "info",
  },
};

export default meta;
type Story = StoryObj<typeof Status>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
Status.displayName = "Status";

export const Preview: Story = {
  render: args => <Status {...args}>Status</Status>,
};
