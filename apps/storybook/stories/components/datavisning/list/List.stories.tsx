import {
  List as KvibList,
  ListItem as KvibListItem,
  ListIcon as KvibListIcon,
  OrderedList as KvibOrderedList,
  UnorderedList as KvibUnorderedList,
  Stack,
  Icon,
} from "@kvib/react/src";
import { colors } from "@kvib/react/src/theme/tokens";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibList> = {
  title: "Datavisning/List",
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

export const Ordered: Story = {
  args: {},
  render: (args) => (
    <Stack gap={4}>
      <KvibOrderedList {...args}>
        <KvibListItem>Kartgrunnlag for Fastlands-Noreg</KvibListItem>
        <KvibListItem>Eigedomsdata</KvibListItem>
        <KvibListItem>Tidevatn og vasstand</KvibListItem>
        <KvibListItem>Høgdedata og djupnedata</KvibListItem>
      </KvibOrderedList>
    </Stack>
  ),
};
