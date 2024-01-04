import { Meta, StoryObj } from "@storybook/react";
import { ScaleFade as KvibScaleFade, ScaleFadeProps, Box } from "@kvib/react/src";
import { colors } from "@kvib/react/src/theme/tokens";

const meta: Meta<typeof KvibScaleFade> = {
  title: "Animasjoner/ScaleFade",
  component: KvibScaleFade,
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
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    initialScale: {
      description: "The size of the children at the start of the animation",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0.95" },
      },
      control: { type: "number" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibScaleFade>;

const ScaleFadeEx = ({ ...args }: ScaleFadeProps) => {
  return (
    <Box w={300} h={300}>
      <KvibScaleFade {...args}>
        <Box p="40px" color="white" mt="4" bg={colors.green["400"]} rounded="md" shadow="md">
          Fade
        </Box>
      </KvibScaleFade>
    </Box>
  );
};

export const ScaleFade: Story = {
  args: { in: false, unmountOnExit: false, reverse: true },
  render: (args) => <ScaleFadeEx {...args} />,
};
