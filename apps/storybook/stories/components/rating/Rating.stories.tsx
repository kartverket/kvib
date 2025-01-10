import { Rating } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Rating> = {
  title: "Komponenter/Rating",
  component: Rating,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    size: {
      description: "Size of the component",
      table: {
        type: { summary: "sm | md | lg" },
        defaultValue: { summary: "md" },
      },
      options: ["sm", "md", "lg"],
      control: { type: "radio" },
    },
    count: {
      description: "The total number of ratings.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "5" },
      },
      control: "number",
    },
    defaultValue: {
      description: "The default value of the rating",
      table: {
        type: { summary: "number" },
      },
      control: "number",
    },
    colorPalette: {
      description: "Color palette of the component",
      table: {
        type: {
          summary: "green | blue | gray | red",
        },
        defaultValue: { summary: "green" },
      },
      options: ["green", "blue", "gray", "red"],
      control: { type: "radio" },
    },
    allowHalf: {
      description: "Whether to allow half stars.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
  },
  args: {
    count: 5,
    defaultValue: 4,
  },
};

export default meta;
type Story = StoryObj<typeof Rating>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
Rating.displayName = "Rating";

export const Preview: Story = {
  render: args => <Rating {...args} />,
};
