import { Box, Button, Show as KvibShow, VStack } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";
import { useState } from "react";

const meta: Meta<typeof KvibShow> = {
  title: "Komponenter/Show",
  component: KvibShow,
  parameters: {
    docs: {
      story: { inline: true },
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
      <VStack>
        <Button onClick={() => setCount(count + 1)} w="fit-content">
          Øk telleren: {count}
        </Button>
        <KvibShow {...args} when={count <= 5}>
          <Box p={4} bg="green.100" w="fit-content">
            Denne boksen vises kun når telleren er mindre enn 5
          </Box>
        </KvibShow>
        <KvibShow {...args} when={count > 5}>
          <Box p={4} bg="red.100" w="fit-content">
            Denne boksen vises kun når telleren er større enn 5
          </Box>
        </KvibShow>
      </VStack>
    );
  },
};
