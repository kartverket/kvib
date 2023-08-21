import { SearchAsync as KvibSearchAsync, Stack as KvibStack, Box, Icon } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSearchAsync> = {
  title: "Komponenter/Search/SearchAsync",
  component: KvibSearchAsync,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    loadOptions: {
      control: "text",
    },
    handleFromChange: {
      control: "text",
    },
    placeholder: {
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    autoFocus: {
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    debounceTime: {
      table: {
        type: { summary: "number" },
      },
      control: "number",
    },
    className: {
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    isClearable: {
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    dropdownIndicator: {
      table: {
        type: { summary: "Element" },
      },
      control: "text",
    },
    size: {
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    defaultOptions: {
      table: {
        type: { summary: "OptionsOrGroups<T, GroupBase<T>>" },
      },
      control: "array",
    },
    variant: {
      table: {
        type: { summary: "outline | filled | flushed | unstyled" },
        defaultValue: { summary: "outline" },
      },
      options: ["outline", "filled", "flushed", "unstyled"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibSearchAsync>;

export const SearchAsync: Story = {
  args: {},
  render: (args) => (
    <Box h={20}>
      <KvibSearchAsync {...args} />
    </Box>
  ),
};

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

export const SearchAsyncResults: Story = {
  args: {
    loadOptions: mockLoadOptions,
    handleFromChange: (selectedOption) => {
      console.log("Selected Option:", selectedOption);
    },
    placeholder: "Søk etter frukt...",
  },
  render: (args) => (
    <Box h={40}>
      <KvibSearchAsync {...args} />
    </Box>
  ),
};

export const SearchAsyncResultsDebounce: Story = {
  args: {
    loadOptions: mockLoadOptions,
    handleFromChange: (selectedOption) => {
      console.log("Selected Option:", selectedOption);
    },
    debounceTime: 3000,
    placeholder: "Søk etter frukt...",
  },
  render: (args) => (
    <Box h={40}>
      <KvibSearchAsync {...args} />
    </Box>
  ),
};

export const SearchAsyncDropdownIndicator: Story = {
  args: {
    loadOptions: mockLoadOptions,
    handleFromChange: (selectedOption) => {
      console.log("Selected Option:", selectedOption);
    },
    dropdownIndicator: <Icon icon="expand_more" weight={400} />,
    defaultOptions: fruits,
    placeholder: "Søk etter frukt...",
  },
  render: (args) => (
    <Box h={60}>
      <KvibSearchAsync {...args} />
    </Box>
  ),
};

export const SearchAsyncSizes: Story = {
  args: {
    loadOptions: mockLoadOptions,
    handleFromChange: (selectedOption) => {
      console.log("Selected Option:", selectedOption);
    },
    placeholder: "Søk etter frukt...",
  },
  render: (args) => (
    <KvibStack>
      <KvibSearchAsync {...args} size="sm" />
      <KvibSearchAsync {...args} size="md" />
      <KvibSearchAsync {...args} size="lg" />
    </KvibStack>
  ),
};

export const SearchAsyncVariants: Story = {
  args: {
    loadOptions: mockLoadOptions,
    handleFromChange: (selectedOption) => {
      console.log("Selected Option:", selectedOption);
    },
    placeholder: "Søk etter frukt...",
  },
  render: (args) => (
    <KvibStack h={60}>
      <KvibSearchAsync {...args} variant="outline" />
      <KvibSearchAsync {...args} variant="filled" />
      <KvibSearchAsync {...args} variant="flushed" />
      <KvibSearchAsync {...args} variant="unstyled" />
    </KvibStack>
  ),
};
