import { Box, Header as KvibHeader } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibHeader> = {
  title: "Komponenter/Header",
  component: KvibHeader,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibHeader>;

const fruits = [
  { label: "Eple", value: "eple" },
  { label: "Banan", value: "banan" },
  { label: "Kirsebær", value: "kirsebær" },
  { label: "Pære", value: "pære" },
  { label: "Svarthyll", value: "svarthyll" },
];

const mockLoadOptions = (inputValue: string, callback: (options: typeof fruits) => void) => {
  setTimeout(() => {
    const filteredFruits = fruits.filter((fruit) => fruit.label.toLowerCase().includes(inputValue.toLowerCase()));
    callback(filteredFruits);
  }, 500);
};

export const Header: Story = {
  args: {},
  render: (args) => <KvibHeader {...args} />,
};

export const HeaderSearch: Story = {
  args: {},
  render: (args) => <KvibHeader searchFieldType="regular" isSearch placeholder="SØK HER" />,
};

export const HeaderSearchAsync: Story = {
  args: {},
  render: (args) => (
    <KvibHeader
      searchFieldType="async"
      isSearch
      placeholder="SØK HER"
      loadOptions={mockLoadOptions}
      onChange={(selectedOption: any) => {
        console.log("Selected Option:", selectedOption);
      }}
    />
  ),
};

export const HeaderSearchCentered: Story = {
  args: {},
  render: (args) => <KvibHeader searchFieldType="regular" isSearch placeholder="SØK HER" isCentered />,
};
