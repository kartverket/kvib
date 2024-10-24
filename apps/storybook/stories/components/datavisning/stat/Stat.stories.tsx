import {
  Box,
  Stat as KvibStat,
  StatArrow as KvibStatArrow,
  StatGroup as KvibStatGroup,
  StatHelpText as KvibStatHelpText,
  StatLabel as KvibStatLabel,
  StatNumber as KvibStatNumber,
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
  render: args => (
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
  render: args => (
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
