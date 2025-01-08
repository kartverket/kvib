import { Button, Theme } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Theme> = {
  title: "Komponenter/Layout/Theme",
  component: Theme,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
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

const themeString = `

`;

export const Preview: Story = {
  render: args => (
    <Theme p="1rem" {...args}>
      <Button variant="outline">Button</Button>
    </Theme>
  ),
  parameters: {
    docs: {
      source: { code: themeString },
    },
  },
};
