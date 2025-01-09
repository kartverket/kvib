import { Button as KvibButton } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibButton> = {
  title: "Komponenter/Button",
  component: KvibButton,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  args: {
    colorPalette: "green",
    variant: "solid",
    size: "md",
    disabled: false,
    loading: false,
    iconFill: false,
    iconAriaIsHidden: false,
  },
  argTypes: {
    size: {
      description: "Size of the Button",
      table: {
        type: { summary: "xs | sm | md | lg | xl | 2xl" },
        defaultValue: { summary: "md" },
      },
      options: ["xs", "sm", "md", "lg", "xl", "2xl"],
      control: { type: "radio" },
    },
    variant: {
      description: "The variant of the Button.",
      table: {
        type: { summary: "solid | outline | ghost | plain" },
      },
      defaultValue: { summary: "solid" },
      options: ["solid", "outline", "ghost", "plain"],
      control: { type: "radio" },
    },
    colorPalette: {
      description: "The visual color appearance of the component.",
      table: {
        type: { summary: "green | blue | gray | red" },
        defaultValue: { summary: "green" },
      },
      options: ["green", "blue", "gray", "red"],
      control: { type: "radio" },
    },
    disabled: {
      description: "If true, the button will be disabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    loading: {
      description: "If true, the button will show a spinner.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    iconFill: {
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    iconAriaIsHidden: {
      table: { type: { summary: "boolean" } },
      control: "boolean",
      defaultValue: { summary: false },
    },
    leftIcon: {
      table: { type: { summary: "string" } },
      control: "text",
      defaultValue: { summary: "" },
    },
    rightIcon: {
      table: { type: { summary: "string" } },
      control: "text",
      defaultValue: { summary: "" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibButton>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibButton.displayName = "Button";

export const Preview: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  render: args => <KvibButton {...args}>Button</KvibButton>,
};
