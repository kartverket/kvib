import {
  Stat as KvibStat,
  StatLabel as KvibStatLabel,
  StatValueText as KvibStatNumber,
  StatProps,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibStat> = {
  title: "Komponenter/Stat",
  component: KvibStat,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibStat>;

export const Preview: Story = {
  render: (args: StatProps) => (
    <KvibStat {...args}>
      <KvibStatLabel>Utgifter</KvibStatLabel>
      <KvibStatNumber>3200kr</KvibStatNumber>
    </KvibStat>
  ),
};
