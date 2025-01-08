import { Center as KvibCenter } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibCenter> = {
  title: "Komponenter/Layout/Center",
  component: KvibCenter,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
};

export default meta;
type CenterStory = StoryObj<typeof KvibCenter>;

const centerString = `
<Center>
  ...
</Center>
`;

export const Preview: CenterStory = {
  args: { backgroundColor: "green.50", padding: "6" },
  render: args => <KvibCenter {...args}>En boks med sentrert innhold</KvibCenter>,
  parameters: {
    docs: {
      source: {
        code: centerString,
      },
    },
  },
};
