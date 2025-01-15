import { HStack, Button as KvibButton } from "@kvib/react";
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
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
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
        type: { summary: "'green' | 'blue' | 'gray' | 'red'" },
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
  render: args => <KvibButton {...args}>Button</KvibButton>,
};

export const SolidButton: Story = {
  name: "Solid",
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
  render: _ => (
    <KvibButton variant="solid" leftIcon="save">
      Lagre
    </KvibButton>
  ),
};

export const OutlineButton: Story = {
  name: "Outline",
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
  render: _ => <KvibButton variant="outline">Avbryt</KvibButton>,
};

export const GhostButton: Story = {
  name: "Ghost",
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
  render: _ => (
    <KvibButton variant="ghost" leftIcon="edit">
      Rediger
    </KvibButton>
  ),
};

export const PlainButton: Story = {
  name: "Plain",
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
  render: _ => (
    <KvibButton variant="plain" leftIcon="send">
      Videresend
    </KvibButton>
  ),
};

HStack.displayName = "HStack";

export const NeutralButton: Story = {
  name: "Neutral",
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
  render: _ => (
    <HStack gap="1rem">
      <KvibButton variant="solid" colorPalette="gray" leftIcon="print">
        Skriv ut
      </KvibButton>
      <KvibButton variant="outline" colorPalette="gray" leftIcon="edit">
        Rediger
      </KvibButton>
      <KvibButton variant="ghost" colorPalette="gray" leftIcon="send">
        Videresend
      </KvibButton>
    </HStack>
  ),
};

export const ErrorDangerButton: Story = {
  name: "Error/Danger",
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
  render: _ => (
    <HStack gap="1rem">
      <KvibButton variant="solid" colorPalette="red" leftIcon="delete">
        Slett
      </KvibButton>
      <KvibButton variant="outline" colorPalette="red" leftIcon="delete">
        Slett
      </KvibButton>
      <KvibButton variant="ghost" colorPalette="red" leftIcon="delete">
        Slett
      </KvibButton>
    </HStack>
  ),
};

export const LoadingButton: Story = {
  name: "Loading",
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
  render: _ => (
    <HStack gap="1rem">
      <KvibButton variant="solid" loading>
        Laster
      </KvibButton>
      <KvibButton variant="outline" loading>
        Laster
      </KvibButton>
      <KvibButton variant="ghost" loading>
        Laster
      </KvibButton>
    </HStack>
  ),
};

export const DisabledButton: Story = {
  name: "Disabled",
  parameters: {
    controls: {
      exclude: /.*/g,
    },
  },
  render: _ => (
    <HStack gap="1rem">
      <KvibButton variant="solid" disabled>
        Lagre
      </KvibButton>
      <KvibButton variant="outline" disabled>
        Avbryt
      </KvibButton>
      <KvibButton variant="ghost" disabled>
        Rediger
      </KvibButton>
    </HStack>
  ),
};
