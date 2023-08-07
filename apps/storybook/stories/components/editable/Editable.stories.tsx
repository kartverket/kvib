import {
  Editable as KvibEditable,
  EditableInput as KvibEditableInput,
  EditablePreview as KvibEditablePreview,
  EditableTextarea as KvibEditableTextarea,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibEditable> = {
  title: "Komponenter/Editable",
  component: KvibEditable,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    defaultValue: {
      description: "The initial value of the Editable in both edit & preview mode",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    isDisabled: {
      description: "If true, the Editable will be disabled.",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    isPreviewFocusable: {
      description:
        "If true, the read only view, has a tabIndex set to 0 so it can receive focus via the keyboard or click.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
      control: "boolean",
    },
    onCancel: {
      description:
        "Callback invoked when user cancels input with the Esc key. It provides the last confirmed value as argument.",
      table: {
        type: { summary: "(previousValue: string) => void" },
      },
      control: "text",
    },
    onChange: {
      description: "Callback invoked when user changes input.",
      table: {
        type: { summary: "(nextValue: string) => void" },
      },
      control: "text",
    },
    onEdit: {
      description: "Callback invoked once the user enters edit mode.",
      table: {
        type: { summary: "() => void" },
      },
      control: "text",
    },
    onSubmit: {
      description: "Callback invoked when user confirms value with enter key or by blurring input.",
      table: {
        type: { summary: "(nextValue: string) => void" },
      },
      control: "text",
    },
    placeholder: {
      description: "The placeholder text when the value is empty.",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    selectAllOnFocus: {
      description: "If true, the input's text will be highlighted on focus.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
      control: "boolean",
    },
    startWithEditView: {
      description: "If true, the Editable will start with edit mode by default.",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    submitOnBlur: {
      description: "If true, it'll update the value onBlur and turn off the edit mode.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
      control: "boolean",
    },
    value: {
      description: "The value of the Editable in both edit & preview mode",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
  },
  args: {
    onCancel: undefined,
    onChange: undefined,
    onEdit: undefined,
    onSubmit: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof KvibEditable>;

export const Editable: Story = {
  args: { defaultValue: "Redigerbar tekst" },
  render: (args) => (
    <KvibEditable {...args}>
      <KvibEditablePreview />
      <KvibEditableInput />
    </KvibEditable>
  ),
};

export const EditableTextarea: Story = {
  args: { defaultValue: "Redigerbar tekst" },
  render: (args) => (
    <KvibEditable {...args}>
      <KvibEditablePreview />
      <KvibEditableTextarea />
    </KvibEditable>
  ),
};
