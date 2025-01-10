import { Textarea as KvibTextarea } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibTextarea> = {
  title: "Komponenter/Text Area",
  component: KvibTextarea,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    disabled: {
      description:
        "If true, the form control will be disabled. This has 2 side effects: - The FormLabel will have `data-disabled` attribute - The form element (e.g, Input) will be disabled",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    readOnly: {
      description: "If true, the form control will be readonly",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    required: {
      description:
        "If true, the form control will be required. This has 2 side effects: - The FormLabel will show a required indicator - The form element (e.g, Input) will have `aria-required` set to true",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    size: {
      description: "The size of the Textarea",
      table: {
        type: { summary: "'xs' | 'sm' | 'md' | 'lg'" },
        defaultValue: { summary: "md" },
      },
      options: ["xs", "sm", "md", "lg"],
      control: "radio",
    },
    variant: {
      description: "The variant of the Textarea",
      table: {
        type: { summary: "'outline' | 'flushed' | 'filled' | 'unstyled'" },
        defaultValue: { summary: "outline" },
      },
      options: ["outline", "flushed", "filled", "unstyled"],
      control: "radio",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibTextarea>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibTextarea.displayName = "Textarea";

export const Preview: Story = {
  render: args => <KvibTextarea {...args} />,
};
