import { SearchAsync as KvibSearchAsync } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSearchAsync> = {
  title: "Komponenter/Search Async",
  component: KvibSearchAsync,
  parameters: {
    docs: {
      story: { inline: true },
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
    clearable: {
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
    defaultOptions: {
      table: {
        type: { summary: "T[] | boolean" },
      },
    },
    id: {
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    multi: {
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
    disabled: {
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
    menuPlacement: {
      table: {
        type: { summary: "bottom | top | auto" },
        defaultValue: { summary: "bottom" },
      },
      options: ["bottom", "top", "auto"],
      control: { type: "radio" },
    },
  },
};

export default meta;
type Fruit = { label: string; value: string };
type Story = StoryObj<typeof KvibSearchAsync<Fruit>>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
(KvibSearchAsync as any).displayName = "SearchAsync";

export const Preview: Story = {
  render: args => <KvibSearchAsync {...args} />,
};
