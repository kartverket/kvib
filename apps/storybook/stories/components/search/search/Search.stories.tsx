import { Search as KvibSearch, Stack } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSearch> = {
  title: "Komponenter/Search/Search",
  component: KvibSearch,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
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
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    rightSearchIcon: {
      description: "Enables Search IconButton",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
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
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    isDisabled: {
      description: "Toggles if input should be disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    buttonVariant: {
      description: "Button variant if an icon is enabled",
      table: {
        type: { summary: "primary | secondary | tertiary | ghost" },
        defaultValue: { summary: "tertiary" },
      },
      options: ["primary", "secondary", "tertiary", "ghost"],
      control: { type: "radio" },
    },
    buttonWidth: {
      description:
        "Button width if an icon is enabled. Cannot be smaller than default, e.g. needs to be more than 2.5rem with size md",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    buttonText: {
      description: "Button text if an icon is enabled",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
  },
  args: {},
};

export default meta;
type SearchStory = StoryObj<typeof KvibSearch>;

export const Search: SearchStory = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  args: {
    placeholder: "Søk her...",
    variant: "outline",
    isDisabled: false,
  },
  render: (args) => <KvibSearch {...args} />,
};

export const SearchVariants: SearchStory = {
  args: {
    placeholder: "Søk her...",

    colorScheme: "green",
  },
  render: (args) => (
    <Stack h={"12rem"}>
      <KvibSearch {...args} variant="outline" />
      <KvibSearch {...args} variant="filled" />
      <KvibSearch {...args} variant="flushed" />
      <KvibSearch {...args} variant="unstyled" />
    </Stack>
  ),
};

export const SearchIconLeft: SearchStory = {
  args: {
    leftSearchIcon: true,
    placeholder: "Søk her...",
    variant: "outline",
    isDisabled: false,
    colorScheme: "blue",
    buttonVariant: "secondary",
  },
  render: (args) => <KvibSearch {...args} />,
};

export const SearchIconRight: SearchStory = {
  args: {
    rightSearchIcon: true,
    placeholder: "Søk her...",
    variant: "outline",
    isDisabled: false,
    colorScheme: "green",
  },
  render: (args) => <KvibSearch {...args} />,
};

export const SearchButtonVariant: SearchStory = {
  args: {
    rightSearchIcon: true,
    placeholder: "Søk her...",
    variant: "outline",
    isDisabled: false,
    colorScheme: "green",
    buttonVariant: "primary",
    buttonWidth: "4rem",
  },
  render: (args) => <KvibSearch {...args} />,
};

export const SearchButtonText: SearchStory = {
  args: {
    leftSearchIcon: true,
    placeholder: "Søk her...",
    variant: "outline",
    isDisabled: false,
    colorScheme: "blue",
    buttonVariant: "primary",
    buttonText: "Søk",
  },
  render: (args) => <KvibSearch {...args} />,
};

export const SearchButtonAppearance: SearchStory = {
  args: {
    placeholder: "Søk her...",
    variant: "outline",
  },
  render: (args) => (
    <Stack>
      <KvibSearch {...args} rightSearchIcon={true} colorScheme="green" />
      <KvibSearch {...args} leftSearchIcon={true} colorScheme="blue" buttonVariant="secondary" buttonText="Search" />
      <KvibSearch {...args} rightSearchIcon={true} colorScheme="green" buttonWidth="4rem" buttonVariant="primary" />
      <KvibSearch {...args} rightSearchIcon={true} colorScheme="blue" buttonVariant="primary" buttonText="Søk" />
    </Stack>
  ),
};
