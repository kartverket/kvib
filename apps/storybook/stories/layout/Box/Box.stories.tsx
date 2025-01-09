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

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibBox.displayName = "Box";

export const Preview: Story = {
  args: {},
  render: args => (
    <KvibBox bg="green.100" p="1rem" {...args}>
      Box content
    </KvibBox>
  ),
};
