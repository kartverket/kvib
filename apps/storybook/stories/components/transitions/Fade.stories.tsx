import { Meta, StoryObj } from "@storybook/react";
import { Fade as KvibFade, FadeProps, Box } from "@kvib/react/src";
import { colors } from "@kvib/react/src/theme/tokens";

const meta: Meta<typeof KvibFade> = {
  title: "Komponenter/Transitions/Fade",
  component: KvibFade,
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
  },
};

export default meta;
type Story = StoryObj<typeof KvibFade>;

const FadeEx = ({ ...args }: FadeProps) => {
  return (
    <Box w={300} h={300}>
      <KvibFade {...args}>
        <Box p="40px" color="white" mt="4" bg={colors.green["400"]} rounded="md" shadow="md">
          Tittei
        </Box>
      </KvibFade>
    </Box>
  );
};

export const Fade: Story = {
  args: { in: false, unmountOnExit: false },
  render: (args) => <FadeEx {...args} />,
};
