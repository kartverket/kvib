import { Box, VisuallyHidden as KvibVisuallyHidden, Text } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibVisuallyHidden> = {
  title: "Komponenter/Visually Hidden",
  component: KvibVisuallyHidden,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
};

export default meta;

type Story = StoryObj<typeof KvibVisuallyHidden>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibVisuallyHidden.displayName = "VisuallyHidden";
Text.displayName = "Text";
Box.displayName = "Box";

export const Preview: Story = {
  render: args => (
    <Box>
      <KvibVisuallyHidden {...args}>This text is visually hidden</KvibVisuallyHidden>
      <Text>Check the DOM to see hidden element</Text>
    </Box>
  ),
};
