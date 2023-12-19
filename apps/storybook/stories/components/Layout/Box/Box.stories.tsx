import { Box as KvibBox } from "@kvib/react/src/layout";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibBox> = {
  title: "Layout/Box",
  component: KvibBox,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibBox>;

export const SimpleBox: Story = {
  args: { backgroundColor: "green.50" },
  render: (args) => <KvibBox {...args}>En veldig enkel boks</KvibBox>,
};

export const BoxExample: Story = {
  args: { bg: "blue.50", borderRadius: "md", p: "20px", color: "green.900" },
  render: (args) => <KvibBox {...args}>En box med bruk av diverse props</KvibBox>,
};

export const BoxAsLink: Story = {
  args: {
    _hover: {
      backgroundColor: "yellow.200",
    },
    as: "a",
    backgroundColor: "yellow.50",
    border: "1px solid",
    borderColor: "gray.200",
    display: "block",
    href: "https://www.youtube.com/watch?v=Zvz6kFVJpwo&list=PLcU9Unqugm6YuG5NM_av57pJajVhgaV7w",
    padding: "2",
    width: "fit-content",
  },
  render: (args) => <KvibBox {...args}>En lenke til en video</KvibBox>,
};
