import { Icon, KvibTimeline } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<KvibTimeline.RootProps> = {
  title: "Komponenter/Timeline",
  component: KvibTimeline.Root,
  parameters: {
    docs: {
      story: { inline: true },
    },
    a11y: {
      config: {
        rules: [
          {
            // Turned off aria value violation due to false error.
            id: "aria-valid-attr-value",
            reviewOnFail: true,
          },
        ],
      },
    },
  },

  argTypes: {},
};

export default meta;
type Story = StoryObj<KvibTimeline.RootProps>;

const TimelineExample = (args: KvibTimeline.RootProps) => (
  <KvibTimeline.Root {...args} w="fit-content">
    <KvibTimeline.Item h="3rem">
      <KvibTimeline.Connector>
        <Icon icon="rocket" />
      </KvibTimeline.Connector>
      <KvibTimeline.Content>
        <KvibTimeline.Title>Title</KvibTimeline.Title>
        <KvibTimeline.Description>Description</KvibTimeline.Description>
      </KvibTimeline.Content>
    </KvibTimeline.Item>
  </KvibTimeline.Root>
);

export const Preview: Story = {
  render: args => <TimelineExample {...args} />,
};
