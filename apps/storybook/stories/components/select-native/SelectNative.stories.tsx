import { createListCollection, NativeSelect, NativeSelectField, NativeSelectRoot } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof NativeSelectRoot> = {
  title: "Komponenter/Select Native",
  component: NativeSelectRoot,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    disabled: {
      description: "",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    invalid: {
      description:
        "If true, the form control will be invalid. This has 2 side effects: - The FormLabel and FormErrorIcon will have `data-invalid` set to true - The form element (e.g, Input) will have `aria-invalid` set to true",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    size: {
      description: "The size of the Select",
      table: {
        type: { summary: '"lg" | "md" | "sm" | "xs"' },
        defaultValue: { summary: "md" },
      },
      options: ["lg", "md", "sm", "xs"],
      control: "radio",
    },
    variant: {
      description: "The variant of the Select",
      table: {
        type: { summary: '"outline" | "filled" | "flushed" | "unstyled"' },
        defaultValue: { summary: "outline" },
      },
      options: ["outline", "filled", "flushed", "unstyled"],
      control: "radio",
    },
  },
};

export default meta;
type Story = StoryObj<typeof NativeSelectRoot>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
NativeSelect.displayName = "NativeSelect";
NativeSelectField.displayName = "NativeSelectField";

const alternativer = createListCollection({
  items: [
    { label: "Item 1", value: "one" },
    { label: "Item 2", value: "two" },
    { label: "Item 3", value: "three" },
  ],
});

export const Preview: Story = {
  render: args => (
    <NativeSelect size="sm" width="240px" {...args}>
      <NativeSelectField placeholder="Select an item" items={alternativer.items} />
    </NativeSelect>
  ),
};
