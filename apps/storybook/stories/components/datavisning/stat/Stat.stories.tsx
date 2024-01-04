import {
  Stat as KvibStat,
  StatLabel as KvibStatLabel,
  StatNumber as KvibStatNumber,
  StatHelpText as KvibStatHelpText,
  StatArrow as KvibStatArrow,
  StatGroup as KvibStatGroup,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibStat> = {
  title: "Datavisning/Stat",
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

export const Stat: Story = {
  args: {},
  render: (args) => (
    <KvibStat {...args}>
      <KvibStatLabel>Utgifter</KvibStatLabel>
      <KvibStatNumber>3200kr</KvibStatNumber>
      <KvibStatHelpText>Feb 12 - Feb 28</KvibStatHelpText>
    </KvibStat>
  ),
};

export const StatIndicator: Story = {
  args: {},
  render: (args) => (
    <KvibStatGroup>
      <KvibStat {...args}>
        <KvibStatLabel>Sendt</KvibStatLabel>
        <KvibStatNumber>345,670</KvibStatNumber>
        <KvibStatHelpText>
          <KvibStatArrow type="increase" />
          23.36%
        </KvibStatHelpText>
      </KvibStat>

      <KvibStat {...args}>
        <KvibStatLabel>Klikk</KvibStatLabel>
        <KvibStatNumber>45</KvibStatNumber>
        <KvibStatHelpText>
          <KvibStatArrow type="decrease" />
          9.05%
        </KvibStatHelpText>
      </KvibStat>
    </KvibStatGroup>
  ),
};
