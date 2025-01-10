import {
  createListCollection,
  Select as KvibSelect,
  SelectContent,
  SelectItem,
  SelectLabel,
  SelectProps,
  SelectTrigger,
  SelectValueText,
} from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSelect> = {
  title: "Komponenter/Select",
  component: KvibSelect,
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
type Story = StoryObj<typeof KvibSelect>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
(KvibSelect as any).displayName = "Select";
SelectLabel.displayName = "SelectLabel";
SelectTrigger.displayName = "SelectTrigger";
SelectValueText.displayName = "SelectValueText";
SelectContent.displayName = "SelectContent";
SelectItem.displayName = "SelectItem";

const alternativer = createListCollection({
  items: [
    { label: "Item 1", value: "one" },
    { label: "Item 2", value: "two" },
    { label: "Item 3", value: "three" },
  ],
});

export const Preview: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  args: {},
  render: (args: SelectProps) => (
    <KvibSelect w="12rem" {...args} collection={alternativer} aria-label="select">
      <SelectLabel>Select an item</SelectLabel>
      <SelectTrigger>
        <SelectValueText />
      </SelectTrigger>
      <SelectContent>
        {alternativer.items.map((alternativ: { label: string; value: string }) => (
          <SelectItem item={alternativ} key={alternativ.value}>
            {alternativ.label}
          </SelectItem>
        ))}
      </SelectContent>
    </KvibSelect>
  ),
};
