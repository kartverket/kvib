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
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    errorBorderColor: {
      description: "The border color when the select is invalid. Use color keys in `theme.colors`",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },

    focusBorderColor: {
      description: "The border color when the select is focused. Use color keys in `theme.colors`",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },

    icon: {
      description: "The icon element to use in the select",
      table: {
        type: { summary: "ReactElement<any, string | JSXElementConstructor<any>>" },
      },
      control: "text",
    },

    iconColor: {
      description: "The color of the icon",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },

    iconSize: {
      description: "The size (width and height) of the icon",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },

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

    rootProps: {
      description: "Props to forward to the root div element",
      table: {
        type: { summary: "RootProps" },
      },
      control: "text",
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

const alternativer = createListCollection({
  items: [
    { label: "React.js", value: "react" },
    { label: "Vue.js", value: "vue" },
    { label: "Angular", value: "angular" },
    { label: "Svelte", value: "svelte" },
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
      <SelectLabel>Velg et rammeverk</SelectLabel>
      <SelectTrigger>
        <SelectValueText placeholder="Velg..." />
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
