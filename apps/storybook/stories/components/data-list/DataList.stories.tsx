import { DataList, DataListItem } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DataList> = {
  title: "Komponenter/Data List",
  component: DataList,
  parameters: {
    docs: {
      story: { inline: true },
    },
    layout: "centered",
  },
  argTypes: {
    colorPalette: {
      description: "The color palette of the component",
      table: {
        type: { summary: "gray | green | blue" },
        defaultValue: { summary: "gray" },
      },
      options: ["gray", "green", "blue"],
      control: { type: "radio" },
    },
    orientation: {
      description: "The orientation of the list",
      table: {
        type: { summary: "horizontal | vertical" },
        defaultValue: { summary: "vertical" },
      },
      options: ["horizontal", "vertical"],
      control: { type: "radio" },
    },
    size: {
      description: "The size of the list",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof DataList>;

const stats = [
  { label: "Number", value: 428 },
  { label: "Label", value: "value" },
];

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
DataList.displayName = "DataList";
DataListItem.displayName = "DataListItem";

export const Preview: Story = {
  render: args => (
    <DataList {...args}>
      {stats.map(item => (
        <DataListItem key={item.label} label={item.label} value={item.value} />
      ))}
    </DataList>
  ),
};
