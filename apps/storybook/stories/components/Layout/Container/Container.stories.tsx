import { Container as KvibContainer } from "@kvib/react/src/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibContainer> = {
  title: "Komponenter/Layout/Container",
  component: KvibContainer,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    centerContent: {
      description: "If `true`, container will center its children regardless of their width.",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibContainer>;

export const Container: Story = {
  render: (args) => (
    <KvibContainer {...args} backgroundColor="green.50" padding="6">
      There are many benefits to a joint design and development system. Not only does it bring benefits to the design
      team, but it also brings benefits to engineering teams. It makes sure that our experiences have a consistent look
      and feel, not just in our design specs, but in production
    </KvibContainer>
  ),
};
