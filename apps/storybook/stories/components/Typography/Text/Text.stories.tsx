import { Text as KvibText } from "@kvib/react/src/typography";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibText> = {
  title: "Komponenter/Typografi/Text",
  component: KvibText,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    textStyle: {
      description: "Textstyle",
      table: {
        type: { summary: "leadParagraph | body | bodySmall" },
      },
      control: { type: "radio" },
      options: ["leadParagraph", "body", "bodySmall"],
    },
    fontSize: {
      description: "Fontsize",
      table: {
        type: { summary: "6xl | 5xl | 4xl | 3xl | 2xl | xl | lg | md | sm | xs" },
      },
      control: { type: "radio" },
      options: ["6xl", "5xl", "4xl", "3xl", "2xl", "xl", "lg", "md", "sm", "xs"],
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibText>;

export const Text: Story = {
  args: { textStyle: "body" },

  render: (args) => (
    <KvibText {...args}>
      Lorem ipsum dolor sit amet, invenire indoctum eu vim, ad solum equidem est. Ea antiopam qualisque constituam sed,
      minim congue utroque vis eu. Dolorem incorrupte ad qui, labitur meliore ancillae no vel. Menandri constituto
      disputationi ex sit, nulla dolores deleniti nam eu. Pri putent vocibus ea.
    </KvibText>
  ),
};
