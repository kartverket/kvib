import { Box, Stack } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Stack> = {
  title: "Komponenter/Layout/Stack",
  component: Stack,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    direction: {
      description: "Direction to stack items",
      table: { type: { summary: "column | row" } },
      defaultValue: { summary: "column" },
      control: { type: "radio" },
      options: ["column", "row"],
    },
    separator: {
      description: "React-element to be placed between each item",
      table: { type: { summary: "StackSeparator" } },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Stack>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
Box.displayName = "Box";
Stack.displayName = "Stack";

export const Preview: Story = {
  render: args => (
    <Stack {...args}>
      <Box h="40px" bg="green.200">
        1
      </Box>
      <Box h="40px" bg="blue.200">
        2
      </Box>
      <Box h="40px" bg="red.200">
        3
      </Box>
    </Stack>
  ),
};
