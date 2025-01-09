import { Fieldset, FieldsetContent, FieldsetLegend } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Fieldset> = {
  title: "Komponenter/Fieldset",
  component: Fieldset,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    invalid: {
      description: "Indicates whether the fieldset is invalid.",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
  },
};

export default meta;
type Story = StoryObj<typeof Fieldset>;

export const Preview: Story = {
  render: args => (
    <Fieldset {...args}>
      <FieldsetLegend>Fieldset title</FieldsetLegend>
      <FieldsetContent>Fieldset content</FieldsetContent>
    </Fieldset>
  ),
};
