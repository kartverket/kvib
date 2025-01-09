import { Button, Group } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Group> = {
  title: "Komponenter/Layout/Group",
  component: Group,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    attached: {
      description: "Attach children to each other",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
    grow: {
      description: "Grow children to fill the container",
      table: {
        type: {
          summary: "boolean",
        },
        defaultValue: { summary: "false" },
      },
      control: {
        type: "boolean",
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Group>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
Button.displayName = "Button";
Group.displayName = "Group";

export const Preview: Story = {
  render: args => (
    <Group {...args}>
      <Button variant="outline">First</Button>
      <Button variant="outline">Second</Button>
    </Group>
  ),
};
