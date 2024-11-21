import { Box, Button, Show as KvibShow, Text } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof KvibShow> = {
  title: "Komponenter/Show",
  component: KvibShow,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    fallback: {
      description: "The content to show when the condition is false",
      table: {
        type: { summary: "ReactNode" },
      },
      control: "text",
    },
    when: {
      table: {
        type: { summary: "T | null | undefined" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibShow>;

export const Preview: Story = {
  render: args => {
    const [count, setCount] = useState(0);
    return (
      <>
        <Button onClick={() => setCount(count + 1)}>Øk telleren</Button>
        <Text>Teller: {count}</Text>
        <KvibShow {...args} when={count > 5}>
          <Box p={4} bg="yellow.50">
            Denne teksten vises kun når telleren er større enn 5
          </Box>
        </KvibShow>
      </>
    );
  },
};
