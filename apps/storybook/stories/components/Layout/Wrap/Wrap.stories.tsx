import { Wrap as KvibWrap, WrapItem as KvibWrapItem, Center } from "@kvib/react/src/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibWrap> = {
  title: "Komponenter/Layout/Wrap",
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
        <Center width="180px" height="80px" backgroundColor="red.100">
          Box 1
        </Center>
      </KvibWrapItem>
      <KvibWrapItem>
        <Center width="180px" height="80px" backgroundColor="green.100">
          Box 2
        </Center>
      </KvibWrapItem>
      <KvibWrapItem>
        <Center width="180px" height="80px" backgroundColor="yellow.100">
          Box 3
        </Center>
      </KvibWrapItem>
      <KvibWrapItem>
        <Center width="180px" height="80px" backgroundColor="blue.100">
          Box 4
        </Center>
      </KvibWrapItem>
    </KvibWrap>
  ),
};
