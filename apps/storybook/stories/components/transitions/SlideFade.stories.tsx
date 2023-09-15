import { Meta, StoryObj } from "@storybook/react";
import { SlideFade as KvibSlideFade, SlideFadeProps, Box } from "@kvib/react/src";
import { colors } from "@kvib/react/src/theme/tokens";

const meta: Meta<typeof KvibSlideFade> = {
  title: "Komponenter/Transitions/SlideFade",
  component: KvibSlideFade,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    in: {
      description: "If true, Shows children. Triggers on enter and exit states",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    unmountOnExit: {
      description: "If true, unmounts after 'in' is set to 'false' and animation is done",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    reverse: {
      description: "If true, plays the animation in reverse on exit",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true " },
      },
      control: "boolean",
    },
    offsetX: {
      description: "If true, plays the animation in reverse on exit",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
      control: "number",
    },
    offsetY: {
      description: "If true, plays the animation in reverse on exit",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "8" },
      },
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibSlideFade>;

const SlideFadeEx = ({ ...args }: SlideFadeProps) => {
  return (
    <Box w={300} h={300}>
      <KvibSlideFade {...args}>
        <Box p="40px" color="white" mt="4" bg={colors.green["400"]} rounded="md" shadow="md">
          Hei
        </Box>
      </KvibSlideFade>
    </Box>
  );
};

export const SlideFade: Story = {
  args: { in: false },
  render: (args) => <SlideFadeEx {...args} />,
};
