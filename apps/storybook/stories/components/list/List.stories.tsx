import { List, ListItem, ListProps } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof List> = {
  title: "Komponenter/List",
  component: List,
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
        type: { summary: "string" },
      },
      control: "text",
    },
    listStyleType: {
      description: "The style of the list item marker",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "circle" },
      },
      control: "text",
    },
    listStylePosition: {
      description: "The position of the list item marker",
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "outside" },
      },
      control: "text",
    },
    listStyleImage: {
      description: "The image of the list item marker",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    _marker: {
      description: "The marker of the list item.",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
  },
};

export default meta;
type Story = StoryObj<typeof List>;

const ListExample = (args: ListProps) => (
  <List {...args}>
    <ListItem>Listeelement 1</ListItem>
    <ListItem>Listeelement 2</ListItem>
    <ListItem>Listeelement 3</ListItem>
  </List>
);

export const Preview: Story = {
  render: args => <ListExample {...args} />,
};
