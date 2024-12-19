import { List as KvibList, ListItem as KvibListItem } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibList> = {
  title: "Komponenter/List",
  component: KvibList,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    gap: {
      description: "The space between each list item",
      table: {
        type: { summary: "String" },
      },
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibList>;

export const Preview: Story = {
  render: args => (
    <KvibList {...args}>
      <KvibListItem>Kartgrunnlag for Fastlands-Noreg</KvibListItem>
      <KvibListItem>Eigedomsdata</KvibListItem>
      <KvibListItem>Tidevatn og vasstand</KvibListItem>
      <KvibListItem>Høgdedata og djupnedata</KvibListItem>
    </KvibList>
  ),
};
