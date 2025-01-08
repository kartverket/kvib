import { Container as KvibContainer } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibContainer> = {
  title: "Komponenter/Layout/Container",
  component: KvibContainer,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    centerContent: {
      description: "Center content inside container",
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
    fluid: {
      description: "Use full width container",
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
    p: {
      table: {
        disable: true,
      },
    },
    bg: {
      table: {
        disable: true,
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibContainer>;

const containerString = `
<Container>
  ...
</Container>
`;

export const Preview: Story = {
  args: { bg: "green.50", p: "2" },
  render: args => <KvibContainer {...args}>Container content</KvibContainer>,
  parameters: {
    docs: {
      source: {
        code: containerString,
      },
    },
  },
};
