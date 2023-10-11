import { Search as KvibSearch } from "@kvib/react/src/search";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSearch> = {
  title: "Komponenter/Search/Search",
  component: KvibSearch,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
    a11y: {
      // This option disables all a11y checks on this story
      disable: true,
    },
  },
  argTypes: {
    placeholder: {
      description: "Placeholder for text",
      table: {
        defaultValue: { summary: "Søk her..." },
      },
      control: "text",
    },
    size: {
      description: "Input size",
      table: {
        type: { summary: "lg | md | sm | xs" },
        defaultValue: { summary: "md" },
      },
      options: ["lg", "md", "sm", "xs"],
      control: { type: "radio" },
    },
    variant: {
      description: "Variant",
      table: {
        type: { summary: "outline | filled | flushed | unstyled" },
        defaultValue: { summary: "outline" },
      },
      options: ["outline", "filled", "flushed", "unstyled"],
      control: { type: "radio" },
    },
    leftSearchIcon: {
      description: "Enables Search IconButton",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    rightSearchIcon: {
      description: "Enables Search IconButton",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    colorScheme: {
      description: "Change Icon color",
      table: {
        defaultValue: { summary: "green" },
      },
      options: ["gray", "red", "green", "blue"],
      control: { type: "radio" },
    },
    isInvalid: {
      description: "Toggles if input should be invalid",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    isDisabled: {
      description: "Toggles if input should be disabled",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
  },
};

export default meta;
type SearchStory = StoryObj<typeof KvibSearch>;

export const Search: SearchStory = {
  args: {
    placeholder: "Søk her...",
    variant: "outline",
    isDisabled: false,
  },
  render: (args) => <KvibSearch {...args} />,
};

export const SearchIconLeft: SearchStory = {
  args: {
    leftSearchIcon: true,
    placeholder: "Søk her...",
    variant: "outline",
    isDisabled: false,
    colorScheme: "blue",
  },
  render: (args) => <KvibSearch {...args} />,
};

export const SearchIconRight: SearchStory = {
  args: {
    rightSearchIcon: true,
    placeholder: "Søk her...",
    variant: "outline",
    isDisabled: false,
    colorScheme: "blue",
  },
  render: (args) => <KvibSearch {...args} />,
};
