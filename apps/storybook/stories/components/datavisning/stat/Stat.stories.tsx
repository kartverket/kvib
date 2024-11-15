import {
  Box,
  Stat as KvibStat,
  Group as KvibStatGroup,
  StatHelpText as KvibStatHelpText,
  StatLabel as KvibStatLabel,
  StatValueText as KvibStatNumber,
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
        <KvibStatHelpText>23.36%</KvibStatHelpText>
      </KvibStat>

      <KvibStat {...args}>
        <KvibStatLabel>Klikk</KvibStatLabel>
        <KvibStatNumber>45</KvibStatNumber>
        <KvibStatHelpText>9.05%</KvibStatHelpText>
      </KvibStat>
    </KvibStatGroup>
  ),
};
