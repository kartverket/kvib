import { Search as KvibSearch } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSearch> = {
  title: "Komponenter/Search",
  component: KvibSearch,
  parameters: {
    docs: {
      story: { inline: true },
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
    searchButton: {
      description: "Add search button to input",
      table: {
        defaultValue: { summary: "none" },
      },
      options: ["none", "left", "right"],
      control: { type: "radio" },
    },
    colorPalette: {
      description: "The color palette of the component",
      table: {
        defaultValue: { summary: "green" },
      },
      options: ["green", "blue", "gray", "red"],
      control: { type: "radio" },
    },
    disabled: {
      description: "Toggles if input should be disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
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
};

export default meta;
type SearchStory = StoryObj<typeof KvibSearch>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibSearch.displayName = "Search";

export const Preview: SearchStory = {
  args: {
    placeholder: "Search",
    variant: "outline",
  },
  render: args => <KvibSearch {...args} />,
};
