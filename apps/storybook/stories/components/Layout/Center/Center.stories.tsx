import { Center as KvibCenter, Circle as KvibCircle, Square as KvibSquare, Text } from "@kvib/react/src";
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
type SquareStory = StoryObj<typeof KvibSquare>;
type CircleStory = StoryObj<typeof KvibCircle>;

export const Preview: CenterStory = {
  args: { backgroundColor: "green.50", padding: "6" },
  render: args => <KvibCenter {...args}>En boks med sentrert innhold</KvibCenter>,
};

export const Square: SquareStory = {
  args: { size: "40px", backgroundColor: "green.400", color: "white" },
  render: args => (
    <KvibSquare {...args}>
      <Text>S</Text>
    </KvibSquare>
  ),
};

export const Circle: CircleStory = {
  args: { size: "40px", backgroundColor: "red.400", color: "white" },
  render: args => (
    <KvibCircle {...args}>
      <Text>C</Text>
    </KvibCircle>
  ),
};
