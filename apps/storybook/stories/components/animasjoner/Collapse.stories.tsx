import { Meta, StoryObj } from "@storybook/react";
import { Collapse as KvibCollapse, CollapseProps, Box } from "@kvib/react/src";
import { colors } from "@kvib/react/src/theme/tokens";

const meta: Meta<typeof KvibCollapse> = {
  title: "Animasjoner/Collapse",
  component: KvibCollapse,
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
    animateOpacity: {
      description: "If true, will animate the opacity of the element",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    startingHeight: {
      description: "The height of the element in its collapsed state",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0" },
      },
      control: "number",
    },
    endingHeight: {
      description: "The height of the element in its expanded state",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "auto" },
      },
      control: "number",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibCollapse>;

const CollapseEx = ({ ...args }: CollapseProps) => {
  return (
    <Box w={300} h={300}>
      <KvibCollapse {...args}>
        <Box p="40px" color="white" mt="4" bg={colors.green["400"]} rounded="md" shadow="md">
          Skjera?
        </Box>
      </KvibCollapse>
    </Box>
  );
};
export const Collapse: Story = {
  args: { in: false },
  render: (args) => <CollapseEx {...args} />,
};
