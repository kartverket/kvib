import { Radio as KvibRadio } from "@kvib/react/src/forms/Radio";
import { RadioGroup as KvibRadioGroup } from "@kvib/react/src/forms/RadioGroup";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibRadio> = {
  title: "Komponenter/Skjema/Radio",
  component: KvibRadio,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    children: {
      description: "Text in radio button",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    colorScheme: {
      description: "Color of radio button",
      table: {
        type: { summary: "green | blue" },
      },
      options: ["green", "blue"],
      control: { type: "radio" },
    },
    isDisabled: {
      description: "Toggles if radio button should be disabled",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibRadio>;

export const Radio: Story = {
  args: { children: "Klikk her", colorScheme: "green" },
  render: (args) => <KvibRadio {...args} />,
};

export const RadioGroup: Story = {
  args: { ...Radio.args },
  render: (args) => (
    <KvibRadioGroup>
      <KvibRadio value="1" {...args} />
      <KvibRadio value="2" {...args} />
      <KvibRadio value="3" {...args} />
    </KvibRadioGroup>
  ),
};
