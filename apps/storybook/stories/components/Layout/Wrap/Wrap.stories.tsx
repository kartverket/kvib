import { Wrap as KvibWrap, WrapItem as KvibWrapItem, Center } from "@kvib/react/src/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibWrap> = {
  title: "Layout/Wrap",
  component: KvibWrap,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibWrap>;

export const Wrap: Story = {
  render: (args) => (
    <KvibWrap {...args}>
      <KvibWrapItem>
        <Center width="180px" height="80px" bg="red.100">
          Box 1
        </Center>
      </KvibWrapItem>
      <KvibWrapItem>
        <Center width="180px" height="80px" bg="green.100">
          Box 2
        </Center>
      </KvibWrapItem>
      <KvibWrapItem>
        <Center width="180px" height="80px" bg="yellow.100">
          Box 3
        </Center>
      </KvibWrapItem>
      <KvibWrapItem>
        <Center width="180px" height="80px" bg="blue.100">
          Box 4
        </Center>
      </KvibWrapItem>
      <KvibWrapItem>
        <Center width="180px" height="80px" bg="purple.100">
          Box 5
        </Center>
      </KvibWrapItem>
    </KvibWrap>
  ),
};

export const WrapSpacing: Story = {
  args: { spacing: "30px" },
  render: (args) => (
    <KvibWrap {...args}>
      <KvibWrapItem>
        <Center width="180px" height="80px" bg="red.100">
          Box 1
        </Center>
      </KvibWrapItem>
      <KvibWrapItem>
        <Center width="180px" height="40px" bg="green.100">
          Box 2
        </Center>
      </KvibWrapItem>
      <KvibWrapItem>
        <Center width="120px" height="80px" bg="yellow.100">
          Box 3
        </Center>
      </KvibWrapItem>
      <KvibWrapItem>
        <Center width="180px" height="40px" bg="blue.100">
          Box 4
        </Center>
      </KvibWrapItem>
      <KvibWrapItem>
        <Center width="180px" height="40px" bg="purple.100">
          Box 5
        </Center>
      </KvibWrapItem>
    </KvibWrap>
  ),
};

export const WrapAlignment: Story = {
  args: { spacing: "30px", align: "center" },
  render: (args) => (
    <KvibWrap {...args}>
      <KvibWrapItem>
        <Center width="180px" height="80px" bg="red.100">
          Box 1
        </Center>
      </KvibWrapItem>
      <KvibWrapItem>
        <Center width="180px" height="20px" bg="green.100">
          Box 2
        </Center>
      </KvibWrapItem>
      <KvibWrapItem>
        <Center width="180px" height="80px" bg="yellow.100">
          Box 3
        </Center>
      </KvibWrapItem>
      <KvibWrapItem>
        <Center width="180px" height="20px" bg="blue.100">
          Box 4
        </Center>
      </KvibWrapItem>
      <KvibWrapItem>
        <Center width="180px" height="80px" bg="purple.200">
          Box 5
        </Center>
      </KvibWrapItem>
      <KvibWrapItem>
        <Center width="180px" height="40px" bg="orange.300">
          Box 6
        </Center>
      </KvibWrapItem>
    </KvibWrap>
  ),
};

export const WrapAlignmentJustify: Story = {
  args: { spacing: "30px", justify: "center" },
  render: (args) => (
    <KvibWrap {...args}>
      <KvibWrapItem>
        <Center width="180px" height="80px" bg="red.100">
          Box 1
        </Center>
      </KvibWrapItem>
      <KvibWrapItem>
        <Center width="180px" height="20px" bg="green.100">
          Box 2
        </Center>
      </KvibWrapItem>
      <KvibWrapItem>
        <Center width="180px" height="80px" bg="yellow.100">
          Box 3
        </Center>
      </KvibWrapItem>
      <KvibWrapItem>
        <Center width="180px" height="20px" bg="blue.100">
          Box 4
        </Center>
      </KvibWrapItem>
      <KvibWrapItem>
        <Center width="180px" height="80px" bg="purple.200">
          Box 5
        </Center>
      </KvibWrapItem>
      <KvibWrapItem>
        <Center width="180px" height="40px" bg="orange.300">
          Box 6
        </Center>
      </KvibWrapItem>
    </KvibWrap>
  ),
};
