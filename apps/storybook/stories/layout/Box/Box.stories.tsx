import { Box as KvibBox } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibBox> = {
  title: "Komponenter/Layout/Box",
  component: KvibBox,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibBox>;

const boxString = `
<Box>
  ...
</Box>
`;

export const Preview: Story = {
  args: { backgroundColor: "green.50" },
  render: args => <KvibBox {...args}>Box content</KvibBox>,
  parameters: {
    docs: {
      source: {
        code: boxString,
      },
    },
  },
};
