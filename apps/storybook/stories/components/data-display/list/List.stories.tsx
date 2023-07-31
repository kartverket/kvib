import {
  List as KvibList,
  ListItem as KvibListItem,
  OrderedList as KvibOrderedList,
  UnorderedList as KvibUnorderedList,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibList> = {
  title: "Komponenter/Data Display/List",
  component: KvibList,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    spacing: {
      description: "The space between each list item",
      table: {
        type: { summary: String },
      },
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibList>;

export const List: Story = {
  args: {},
  render: (args) => (
    <KvibUnorderedList {...args}>
      <KvibListItem>Kartgrunnlag for Fastlands-Noreg</KvibListItem>
      <KvibListItem>Eigedomsdata</KvibListItem>
      <KvibListItem>Tidevatn og vasstand</KvibListItem>
      <KvibListItem>Høgdedata og djupnedata</KvibListItem>
    </KvibUnorderedList>
  ),
};

export const ListOrdered: Story = {
  args: {},
  render: (args) => (
    <KvibOrderedList {...args}>
      <KvibListItem>Kartgrunnlag for Fastlands-Noreg</KvibListItem>
      <KvibListItem>Eigedomsdata</KvibListItem>
      <KvibListItem>Tidevatn og vasstand</KvibListItem>
      <KvibListItem>Høgdedata og djupnedata</KvibListItem>
    </KvibOrderedList>
  ),
};
