import { Text as KvibText } from "@kvib/react/src/typography/Text";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibText> = {
  title: "Design/Typografi/Text",
  component: KvibText,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    variant: {
      description: "Textstyle variant",
      table: {
        type: { summary: "leadParagraph | body | bodySmall" },
        defaultValue: { summary: "body" },
      },
      control: { type: "radio" },
      options: ["leadParagraph", "body", "bodySmall"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibText>;

export const Text: Story = {
  args: { variant: "body" },
  render: (args) => (
    <KvibText {...args}>
      Lorem ipsum dolor sit amet, invenire indoctum eu vim, ad solum equidem est. Ea antiopam qualisque constituam sed,
      minim congue utroque vis eu. Dolorem incorrupte ad qui, labitur meliore ancillae no vel. Menandri constituto
      disputationi ex sit, nulla dolores deleniti nam eu. Pri putent vocibus ea.
    </KvibText>
  ),
};
