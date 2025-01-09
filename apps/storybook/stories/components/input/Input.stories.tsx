import { Input as KvibInput } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibInput> = {
  title: "Komponenter/Input",
  component: KvibInput,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    size: {
      description: "Size of input",
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
        type: { summary: "outline | subtle | flushed" },
        defaultValue: { summary: "outline" },
      },
      options: ["outline", "subtle", "flushed"],
      control: { type: "radio" },
    },
    required: {
      description: "Toggles if input should be required",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    readOnly: {
      description: "Toggles if input should be read-only",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    disabled: {
      description: "Toggles if input should be disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    unstyled: {
      description: "Toggles if input should be unstyled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
  },
};

export default meta;
type InputStory = StoryObj<typeof KvibInput>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
(KvibInput as any).displayName = "Input";

export const Preview: InputStory = {
  render: args => <KvibInput placeholder="Write something..." {...args} />,
};
