import { Select as KvibSelect } from "@kvib/react/src";
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

    isDisabled: {
      description: "",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },

    isInvalid: {
      description:
        "If true, the form control will be invalid. This has 2 side effects: - The FormLabel and FormErrorIcon will have `data-invalid` set to true - The form element (e.g, Input) will have `aria-invalid` set to true",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },

    isRequired: {
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

export const Preview: Story = {
  parameters: {
    docs: {
      canvas: {
        sourceState: "shown",
      },
    },
  },
  args: {},
  render: args => (
    <KvibSelect {...args} placeholder="Velg alternativ" aria-label="select">
      <option value="option1">Alternativ 1</option>
      <option value="option2">Alternativ 2</option>
      <option value="option3">Alternativ 3</option>
    </KvibSelect>
  ),
};
