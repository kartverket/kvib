import { Icon, Select as KvibSelect, Stack as KvibStack } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibSelect> = {
  title: "Komponenter/Select",
  component: KvibSelect,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    colorScheme: {
      description: "The visual color appearance of the component",
      table: {
        type: {
          summary: '"green" | "blue" | "red" | "gray"',
        },
      },
      options: ["green", "blue", "red", "gray"],
      control: "select",
    },

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
        defaultValue: { summary: false },
      },
      control: "boolean",
    },

    isInvalid: {
      description:
        "If true, the form control will be invalid. This has 2 side effects: - The FormLabel and FormErrorIcon will have `data-invalid` set to true - The form element (e.g, Input) will have `aria-invalid` set to true",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },

    isReadOnly: {
      description: "If true, the form control will be readonly",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },

    isRequired: {
      description:
        "If true, the form control will be required. This has 2 side effects: - The FormLabel will show a required indicator - The form element (e.g, Input) will have `aria-required` set to true",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
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

export const Select: Story = {
  args: {},
  render: (args) => (
    <KvibSelect {...args} placeholder="Velg alternativ" aria-label="select">
      <option value="option1">Alternativ 1</option>
      <option value="option2">Alternativ 2</option>
      <option value="option3">Alternativ 3</option>
    </KvibSelect>
  ),
};

export const SelectSizes: Story = {
  args: {},
  render: (args) => (
    <KvibStack spacing={3}>
      <KvibSelect {...args} placeholder="extra small" size="xs" aria-label="select extra small" />
      <KvibSelect {...args} placeholder="small" size="sm" aria-label="select small" />
      <KvibSelect {...args} placeholder="medium" size="md" aria-label="select medium" />
      <KvibSelect {...args} placeholder="large" size="lg" aria-label="select large" />
    </KvibStack>
  ),
};

export const SelectVariants: Story = {
  args: {},
  render: (args) => (
    <KvibStack spacing={3}>
      <KvibSelect {...args} variant="outline" placeholder="Outline" aria-label="select outline" />
      <KvibSelect {...args} variant="filled" placeholder="Filled" aria-label="select filled" />
      <KvibSelect {...args} variant="flushed" placeholder="Flushed" aria-label="select flushed" />
      <KvibSelect {...args} variant="unstyled" placeholder="Unstyled" aria-label="select unstyled" />
    </KvibStack>
  ),
};

export const SelectIcon: Story = {
  args: {},
  render: (args) => (
    <KvibSelect
      {...args}
      icon={<Icon icon="expand_circle_down" weight={300} />}
      placeholder="Woohoo! Nytt ikon"
      aria-label="select change Icon"
    />
  ),
};

export const SelectStyles: Story = {
  args: {},
  render: (args) => (
    <KvibSelect
      {...args}
      bg="red.500"
      borderColor="red.500"
      color="white"
      placeholder="Ny bakgrunnsfarge!"
      aria-label="select override style"
    />
  ),
};
