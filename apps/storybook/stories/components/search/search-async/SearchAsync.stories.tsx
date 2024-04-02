import {
  SearchAsync as KvibSearchAsync,
  Stack as KvibStack,
  Box,
  Icon,
  Text,
  SearchAsyncProps,
  Badge,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";
import { FormatOptionLabelMeta } from "chakra-react-select";

const meta: Meta<typeof KvibSearchAsync> = {
  title: "Søk/SearchAsync",
  component: KvibSearchAsync,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
    a11y: {
      // Label warnings + contrast ratio because of chakra wrapper.
      disable: true,
    },
  },
  argTypes: {
    loadOptions: {
      control: "text",
    },
    onChange: {
      table: {
        type: { summary: "(newValue: T | null) => void" },
      },
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
        type: { summary: "T[] | boolean" },
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
    id: {
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    isMulti: {
      table: {
        type: { summary: "boolean" },
        defualtValue: { summary: "false" },
      },
      control: "boolean",
    },
    noOptionsMessage: {
      table: {
        type: { summary: "(obj: { inputValue: string; }) => ReactNode" },
      },
      control: "text",
    },
    optionLabelFormatter: {
      table: {
        type: { summary: "(data: T, formatOptionLabelMeta: FormatOptionLabelMeta<T>) => ReactNode" },
      },
      control: "text",
    },
    isDisabled: {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    focusBorderColor: {
      table: {
        type: { summary: "string" },
        defaultValue: { summary: "blue.500" },
      },
      control: "text",
    },
  },
  args: { onChange: undefined, loadOptions: undefined },
};

export default meta;
type Fruit = { label: string; value: string };
type Story = StoryObj<typeof KvibSearchAsync<Fruit>>;

export const SearchAsync: Story = {
  args: {},
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: (args) => (
    <Box h={20}>
      <KvibSearchAsync {...args} />
    </Box>
  ),
};

const fruits: Fruit[] = [
  { label: "Eple", value: "eple" },
  { label: "Banan", value: "banan" },
  { label: "Kirsebær", value: "kirsebær" },
  { label: "Pære", value: "pære" },
  { label: "Svarthyll", value: "svarthyll" },
  { label: "Mango", value: "mango" },
  { label: "Ananas", value: "ananas" },
  { label: "Kiwi", value: "kiwi" },
  { label: "Papaya", value: "papaya" },
  { label: "Blåbær", value: "blåbær" },
  { label: "Jordbær", value: "jordbær" },
  { label: "Appelsin", value: "appelsin" },
  { label: "Druer", value: "druer" },
  { label: "Sitron", value: "sitron" },
  { label: "Melon", value: "melon" },
];

const mockLoadOptions = (inputValue: string, callback: (options: typeof fruits) => void) => {
  setTimeout(() => {
    const filteredFruits = fruits.filter((fruit) => fruit.label.toLowerCase().includes(inputValue.toLowerCase()));
    callback(filteredFruits);
  }, 500);
};

const handleChange = (selectedOption: any) => {
  console.log("Selected Option:", selectedOption);
};

export const SearchAsyncResults: Story = {
  args: {
    loadOptions: mockLoadOptions,
    onChange: handleChange,
    placeholder: "Søk etter frukt...",
    isMulti: false,
  },
  render: (args: SearchAsyncProps<Fruit>) => (
    <Box h="20rem">
      <KvibSearchAsync {...args} />
    </Box>
  ),
};

const boldAndBadgeLabelFormatter = (data: Fruit, formatOptionLabelMeta: FormatOptionLabelMeta<Fruit>) => {
  console.log(data, formatOptionLabelMeta);
  return (
    <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", width: "100%" }}>
      <b>{data.label}</b>
      {data.label === "Kiwi" ? <Badge>Frukt (ekkel)</Badge> : <Badge>Frukt</Badge>}
    </div>
  );
};

export const SearchAsyncResultsFormatted: Story = {
  args: {
    loadOptions: mockLoadOptions,
    onChange: handleChange,
    optionLabelFormatter: boldAndBadgeLabelFormatter,
    placeholder: "Søk etter frukt...",
    isMulti: false,
  },
  render: (args: SearchAsyncProps<Fruit>) => (
    <Box h="20rem">
      <KvibSearchAsync {...args} />
    </Box>
  ),
};

const mockLoadOptionsWithRule = (inputValue: string, callback: (options: typeof fruits) => void) => {
  if (inputValue.length <= 2) {
    callback([]);
    return;
  }
  setTimeout(() => {
    const filteredFruits = fruits.filter((fruit) => fruit.label.toLowerCase().includes(inputValue.toLowerCase()));
    callback(filteredFruits);
  }, 500);
};

const noOptionsMessage = ({ inputValue }: { inputValue: string }) => {
  if (inputValue.length > 0) {
    if (inputValue.length <= 2) {
      return <Text>Søket må inneholde minst 3 tegn</Text>;
    } else {
      return <Text>Fant ingen resultater</Text>;
    }
  }
  return null;
};

export const SearchAsyncNoOptions: Story = {
  args: {
    loadOptions: mockLoadOptionsWithRule,
    onChange: handleChange,
    noOptionsMessage: noOptionsMessage,
    placeholder: "Søk etter frukt...",
    isMulti: false,
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
    onChange: handleChange,
    debounceTime: 3000,
    placeholder: "Søk etter frukt...",
  },
  render: (args) => (
    <Box h={40}>
      <KvibSearchAsync {...args} />
    </Box>
  ),
};

export const SearchAsyncDropdown: Story = {
  args: {
    loadOptions: mockLoadOptions,
    onChange: handleChange,
    dropdownIndicator: <Icon icon="expand_more" weight={400} />,
    defaultOptions: true,
    placeholder: "Søk eller velg frukt...",
  },
  render: (args) => (
    <Box h="20rem">
      <KvibSearchAsync {...args} />
    </Box>
  ),
};

const handleChangeMulti = (newValue: any, actionMeta: any) => {
  console.log("Changed value:", newValue);
  console.log("Action:", actionMeta);
};

export const SearchAsyncMulti: Story = {
  args: { loadOptions: mockLoadOptions, onChange: handleChangeMulti, isMulti: true, placeholder: "Søk etter frukt..." },
  render: (args) => (
    <Box h={40}>
      <KvibSearchAsync {...args} />
    </Box>
  ),
};

export const SearchAsyncMultiDropdown: Story = {
  args: {
    loadOptions: mockLoadOptions,
    onChange: handleChangeMulti,
    isMulti: true,
    dropdownIndicator: <Icon icon="expand_more" weight={400} />,
    defaultOptions: true,
    placeholder: "Søk eller velg frukt...",
  },
  render: (args) => (
    <Box h="20rem">
      <KvibSearchAsync {...args} />
    </Box>
  ),
};

export const SearchAsyncSizes: Story = {
  args: {
    loadOptions: mockLoadOptions,
    onChange: handleChange,
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
    onChange: handleChange,
    placeholder: "Søk etter frukt...",
    focusBorderColor: "green.500",
  },
  render: (args) => (
    <KvibStack h={"12rem"}>
      <KvibSearchAsync {...args} variant="outline" />
      <KvibSearchAsync {...args} variant="filled" />
      <KvibSearchAsync {...args} variant="flushed" />
      <KvibSearchAsync {...args} variant="unstyled" />
    </KvibStack>
  ),
};
