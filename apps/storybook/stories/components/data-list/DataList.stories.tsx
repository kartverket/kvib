import { DataList, DataListItem, DataListProps, DataListRoot } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof DataList> = {
  title: "Komponenter/Data List",
  component: DataList,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
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

const kommunerStats = [
  { label: "Tallverdi", value: 428 },
  { label: "Strengverdi", value: "Verdi" },
];

const DataListExample = (props: DataListProps) => {
  return (
    <DataListRoot {...props}>
      {kommunerStats.map(item => (
        <DataListItem key={item.label} label={item.label} value={item.value} />
      ))}
    </DataListRoot>
  );
};

export const Preview: Story = {
  render: args => <DataListExample {...args} />,
};
