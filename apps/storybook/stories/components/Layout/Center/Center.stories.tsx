import { Center as KvibCenter, Square as KvibSquare, Circle as KvibCircle } from "@kvib/react/src/layout";
import { Text } from "@kvib/react/src/typography";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibCenter> = {
  title: "Layout/Center",
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

export const Center: CenterStory = {
  args: { backgroundColor: "green.50", padding: "6" },
  render: (args) => <KvibCenter {...args}>En boks med sentrert innhold</KvibCenter>,
};

export const Square: SquareStory = {
  args: { size: "40px", backgroundColor: "green.400", color: "white" },
  render: (args) => (
    <KvibSquare {...args}>
      <Text>S</Text>
    </KvibSquare>
  ),
};

export const Circle: CircleStory = {
  args: { size: "40px", backgroundColor: "red.400", color: "white" },
  render: (args) => (
    <KvibCircle {...args}>
      <Text>C</Text>
    </KvibCircle>
  ),
};
