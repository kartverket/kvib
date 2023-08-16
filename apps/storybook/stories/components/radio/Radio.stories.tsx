import { Radio as KvibRadio, RadioGroup as KvibRadioGroup } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibRadio> = {
  title: "Komponenter/Radio",
  component: KvibRadio,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    size: {
      description: "Size of the Radio",
      table: {
        type: { summary: " sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    colorScheme: {
      description: "Color of the radio",
      table: {
        type: {
          summary:
            "whiteAlpha | blackAlpha | gray | red | orange | yellow | green | teal | blue | cyan | purple | pink | linkedin | facebook | messenger | whatsapp | twitter | telegram",
        },
        defaultValue: { summary: "green" },
      },
      options: [
        "whiteAlpha",
        "blackAlpha",
        "gray",
        "red",
        "orange",
        "yellow",
        "green",
        "teal",
        "blue",
        "cyan",
        "purple",
        "pink",
        "linkedin",
        "facebook",
        "messenger",
        "whatsapp",
        "twitter",
        "telegram",
      ],
      control: { type: "select" },
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibRadio>;

export const Radio: Story = {
  args: { colorScheme: "green", size: "md", isDisabled: false, isInvalid: false },
  render: (args) => (
    <KvibRadioGroup>
      <KvibRadio {...args} />
    </KvibRadioGroup>
  ),
};

export const Color: Story = {
  args: { size: "md" },
  render: (args) => (
    <KvibRadioGroup>
      <KvibRadio {...args} colorScheme={"green"} />
      <KvibRadio {...args} colorScheme={"blue"} />
      <KvibRadio {...args} colorScheme={"red"} />
    </KvibRadioGroup>
  ),
};

export const Size: Story = {
  args: { colorScheme: "green" },
  render: (args) => (
    <KvibRadioGroup>
      <KvibRadio {...args} size={"sm"} />
      <KvibRadio {...args} size={"md"} />
      <KvibRadio {...args} size={"lg"} />
    </KvibRadioGroup>
  ),
};
