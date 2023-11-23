import { Stack as KvibStack, Box, HStack, VStack, StackDivider } from "@kvib/react/src/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibStack> = {
  title: "Komponenter/Layout/Stack",
  component: KvibStack,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    align: {
      description: "Short for alingItems",
      table: {
        type: {
          summary:
            "normal | stretch | center | start | end | flex-start | flex-end | self-start | self-end | baseline | first baseline | last baseline | safe center | unsafe center | inherit | initial | revert | revert-layer | unset",
        },
      },
      defaultValue: { summary: "" },
      control: { type: "select" },
      options: [
        "normal",
        "stretch",
        "center",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "self-start",
        "self-end",
        "baseline",
        "first baseline",
        "last baseline",
        "safe center",
        "unsafe center",
        "inherit",
        "initial",
        "revert",
        "revert-layer",
        "unset",
      ],
    },
    direction: {
      description: "Direction to stack items",
      table: { type: { summary: "column | row" } },
      defaultValue: { summary: "column" },
      control: { type: "radio" },
      options: ["column", "row"],
    },
    divider: {
      description: "If true, each stack item will be followed by a divider",
      table: { type: { summary: "StackDivider" } },
      defaultValue: { summary: "" },
      // control: { type: "text" },
    },
    isInline: {
      description: "If true, the items will be stacked horizontally",
      table: { type: { summary: "boolean" } },
      defaultValue: { summary: "false" },
      control: { type: "boolean" },
    },
    justify: {
      description: "Short for justifyContent",
      table: {
        type: {
          summary:
            "center | start | end | flex-start | flex-end | left | right | normal | space-between | space-around | space-evenly | stretch | safe center | unsafe center | inherit | initial | revert | revert-layer | unset",
        },
      },
      defaultValue: { summary: "" },
      control: { type: "select" },
      options: [
        "center",
        "start",
        "end",
        "flex-start",
        "flex-end",
        "left",
        "right",
        "normal",
        "space-between",
        "space-around",
        "space-evenly",
        "stretch",
        "safe center",
        "unsafe center",
        "inherit",
        "initial",
        "revert",
        "revert-layer",
        "unset",
      ],
    },
    shouldWrapChildren: {
      description: "If true, the children will be wrapped in a Box",
      table: { type: { summary: "boolean" } },
      defaultValue: { summary: "false" },
      control: { type: "boolean" },
    },
    spacing: {
      description: "The space between each child",
      table: { type: { summary: "px | rem" } },
      defaultValue: { summary: "" },
      control: { type: "string" },
    },
    wrap: {
      description: "short for flexWrap",
      table: { type: { summary: "nowrap | wrap | wrap-reverse | inherit | initial | revert | revert-layer | unset" } },
      defaultValue: { summary: "" },
      control: { type: "select" },
      options: ["nowrap", "wrap", "wrap-reverse", "inherit", "initial", "revert", "revert-layer", "unset"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibStack>;

export const Stack: Story = {
  args: { direction: "row" },
  render: (args) => (
    <KvibStack {...args} spacing="24px">
      <Box width="40px" height="40px" backgroundColor="green.200">
        1
      </Box>
      <Box width="40px" height="40px" backgroundColor="blue.200">
        2
      </Box>
      <Box width="40px" height="40px" backgroundColor="red.200">
        3
      </Box>
    </KvibStack>
  ),
};

export const ResponsiveStack: Story = {
  render: (args) => (
    <KvibStack {...args} direction={["column", "row"]} spacing="24px">
      <Box width="40px" height="40px" backgroundColor="green.200">
        1
      </Box>
      <Box width="40px" height="40px" backgroundColor="blue.200">
        2
      </Box>
      <Box width="40px" height="40px" backgroundColor="red.200">
        3
      </Box>
    </KvibStack>
  ),
};

export const StackStyled: Story = {
  render: (args) => (
    <KvibStack divider={<StackDivider borderColor="gray.200" />} spacing={12}>
      <Box width="40px" height="40px" backgroundColor="green.200">
        1
      </Box>
      <Box width="40px" height="40px" backgroundColor="blue.200">
        2
      </Box>
      <Box width="40px" height="40px" backgroundColor="red.200">
        3
      </Box>
    </KvibStack>
  ),
};

export const HStackDemo: Story = {
  render: (args) => (
    <HStack>
      <Box width="40px" height="40px" backgroundColor="green.200">
        1
      </Box>
      <Box width="40px" height="40px" backgroundColor="blue.200">
        2
      </Box>
      <Box width="40px" height="40px" backgroundColor="red.200">
        3
      </Box>
    </HStack>
  ),
};

export const VStackDemo: Story = {
  render: (args) => (
    <VStack>
      <Box width="40px" height="40px" backgroundColor="green.200">
        1
      </Box>
      <Box width="40px" height="40px" backgroundColor="blue.200">
        2
      </Box>
      <Box width="40px" height="40px" backgroundColor="red.200">
        3
      </Box>
    </VStack>
  ),
};
