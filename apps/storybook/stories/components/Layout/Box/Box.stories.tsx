import { Box as KvibBox } from "@kvib/react/src/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibBox> = {
  title: "Komponenter/Layout/Box",
  component: KvibBox,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibBox>;

export const SimpleBox: Story = {
  args: { backgroundColor: "green.50" },
  render: (args) => <KvibBox {...args}>En veldig enkel boks</KvibBox>,
};

export const BoxWithPadding: Story = {
  args: { backgroundColor: "blue.50", borderRadius: "md", padding: "30px" },
  render: (args) => <KvibBox {...args}>En litt mer kreativ boks</KvibBox>,
};

export const AdvancedBox: Story = {
  render: (args) => (
    <KvibBox
      {...args}
      _hover={{
        backgroundColor: "yellow.200",
      }}
      as="a"
      backgroundColor="yellow.50"
      border="1px solid"
      borderColor="gray.200"
      display="block"
      href="https://www.youtube.com/watch?v: Zvz6kFVJpwo&list: PLcU9Unqugm6YuG5NM_av57pJajVhgaV7w"
      padding="2"
      width="fit-content"
    >
      En lenke til en video
    </KvibBox>
  ),
};
