import { Stat as KvibStat, StatLabel as KvibStatLabel, StatValueText as KvibStatNumber, StatProps } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibStat> = {
  title: "Komponenter/Stat",
  component: KvibStat,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    size: {
      description: "The size of the component",
      table: {
        type: { summary: " sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibStat>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibStat.displayName = "Stat";
KvibStatLabel.displayName = "StatLabel";
KvibStatNumber.displayName = "StatNumber";

export const Preview: Story = {
  render: (args: StatProps) => (
    <KvibStat {...args}>
      <KvibStatLabel>Label</KvibStatLabel>
      <KvibStatNumber>3200</KvibStatNumber>
    </KvibStat>
  ),
};
