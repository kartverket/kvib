import {
  Box,
  Stat as KvibStat,
  Group as KvibStatGroup,
  StatHelpText as KvibStatHelpText,
  StatLabel as KvibStatLabel,
  StatValueText as KvibStatNumber,
  StatDownTrend,
  StatProps,
  StatUpTrend,
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
    <Box>
      <KvibStat {...args}>
        <KvibStatLabel>Utgifter</KvibStatLabel>
        <KvibStatNumber>3200kr</KvibStatNumber>
        <KvibStatHelpText>Feb 12 - Feb 28</KvibStatHelpText>
      </KvibStat>
    </Box>
  ),
};

export const StatIndicator: Story = {
  render: (args: StatProps) => (
    <KvibStatGroup>
      <KvibStat {...args}>
        <KvibStatLabel>Sendt</KvibStatLabel>
        <KvibStatNumber>345,670</KvibStatNumber>
        <StatUpTrend variant="plain" px="0">
          23.36%
        </StatUpTrend>
      </KvibStat>

      <KvibStat {...args}>
        <KvibStatLabel>Klikk</KvibStatLabel>
        <KvibStatNumber>45</KvibStatNumber>
        <StatDownTrend variant="plain" px="0">
          9.05%
        </StatDownTrend>
      </KvibStat>
    </KvibStatGroup>
  ),
};
