import { Center as KvibCenter } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibCenter> = {
  title: "Komponenter/Center",
  component: KvibCenter,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
};

export default meta;
type CenterStory = StoryObj<typeof KvibCenter>;

export const Preview: CenterStory = {
  args: { backgroundColor: "green.50", padding: "6" },
  render: args => <KvibCenter {...args}>En boks med sentrert innhold</KvibCenter>,
};
