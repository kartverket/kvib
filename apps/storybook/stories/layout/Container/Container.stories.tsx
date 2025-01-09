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
    maxWidth: {
      description: "Max width of container",
      table: {
        type: {
          summary: "string",
        },
      },
      control: {
        type: "text",
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

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibContainer.displayName = "Container";

export const Preview: Story = {
  args: { bg: "green.50", p: "2" },
  render: args => (
    <KvibContainer {...args}>
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam consectetur, tortor in lacinia eleifend, dui nisl
      tristique nunc.
    </KvibContainer>
  ),
};
