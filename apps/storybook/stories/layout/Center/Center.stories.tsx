import { Box, Center as KvibCenter } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibCenter> = {
  title: "Komponenter/Layout/Center",
  component: KvibCenter,
  parameters: {
    docs: {
      story: { inline: true },
    },
    layout: "padded",
  },
};

export default meta;
type CenterStory = StoryObj<typeof KvibCenter>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibCenter.displayName = "Center";

export const Preview: CenterStory = {
  render: args => (
    <KvibCenter bg="green.100" p="1rem" {...args}>
      <Box bg="white" p="1rem">
        Content
      </Box>
      <Box bg="blue.200" p="1rem">
        Content
      </Box>
    </KvibCenter>
  ),
};
