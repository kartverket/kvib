import { Button, Theme } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Theme> = {
  title: "Komponenter/Layout/Theme",
  component: Theme,
  argTypes: {
    appearance: {
      table: {
        type: {
          summary: "'dark' | 'light'",
        },
        defaultValue: { summary: "'light'" },
      },
      control: {
        type: "radio",
      },
      options: ["dark", "light"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof Theme>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
Button.displayName = "Button";
Theme.displayName = "Theme";

export const Preview: Story = {
  render: args => (
    <Theme p="1rem" {...args}>
      <Button variant="outline">Button</Button>
    </Theme>
  ),
  parameters: {
    docs: {
      source: {
        language: "tsx",
      },
    },
    layout: "centered",
  },
};
