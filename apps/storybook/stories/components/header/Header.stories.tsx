import { Header as KvibHeader, Stack } from "@kvib/react/src";
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
  argTypes: {
    searchFieldVariant: {
      table: {
        type: { summary: "regular | async" },
        defaultValue: { summary: "regular" },
      },
      options: ["regular", "async"],
      control: { type: "radio" },
    },
    isSearch: {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    justifyContent: {
      table: {
        type: { summary: "start | center | space-between" },
        defaultValue: { summary: "space-between" },
      },
      options: ["start", "center", "space-between"],
      control: { type: "radio" },
    },
    placeholder: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "Søk her..." },
      },
      control: "text",
    },
    onChange: {
      control: "function",
    },
    onLogoClick: {
      control: "function",
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
  args: { searchFieldVariant: "regular", isSearch: true, placeholder: "Søk her..." },
  render: (args) => <KvibHeader {...args} />,
};

export const HeaderSearchAsync: Story = {
  args: {},
  render: (args) => (
    <KvibHeader
      searchFieldVariant="async"
      isSearch
      placeholder="Hva leter du etter?"
      loadOptions={mockLoadOptions}
      onChange={(selectedOption: any) => {
        console.log("Selected Option:", selectedOption);
      }}
    />
  ),
};

export const HeaderJustifyContent: Story = {
  args: {},
  render: (args) => (
    <Stack>
      <KvibHeader searchFieldVariant="regular" isSearch justifyContent="center" />
      <KvibHeader searchFieldVariant="regular" isSearch justifyContent="space-between" />
      <KvibHeader searchFieldVariant="regular" isSearch justifyContent="start" />
    </Stack>
  ),
};

export const HeaderLogoButton: Story = {
  args: {},
  render: (args) => (
    <KvibHeader
      onLogoClick={() => {
        console.log("Logo clicked");
      }}
    />
  ),
};
