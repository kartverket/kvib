import { Button, Toaster, toaster } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<Props> = {
  title: "Komponenter/Toast",
  component: Toaster,
  parameters: {
    docs: {
      story: { inline: true },
    },
    a11y: {
      disable: true,
    },
  },
  argTypes: {
    type: {
      description: "The status (color) of the toast",
      table: {
        type: { summary: "info | warning | success | error | loading" },
      },
      defaultValue: { summary: "info" },
      control: "radio",
      options: ["info", "warning", "success", "error"],
    },
    title: {
      description: "The title of the toast",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    description: {
      description: "The description of the toast",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    duration: {
      description: "The duration of the toast in milliseconds",
      table: {
        type: { summary: "number" },
      },
      control: "number",
    },
  },
  args: {
    type: "info",
    title: "Title",
    description: "Description",
    duration: 3000,
  },
};

export default meta;

interface Props {
  type: "info" | "warning" | "success" | "error";
  title: string;
  description: string;
  duration: number;
  colorPalette: "green" | "blue"; // Kun for framvisning i komponentoversikt
}

type Story = StoryObj<Props>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
(Toaster as any).displayName = "Toaster";
Button.displayName = "Button";

export const Preview: Story = {
  render: args => (
    <>
      <Toaster />
      <Button
        colorPalette={args.colorPalette}
        w={"fit-content"}
        onClick={() =>
          toaster.create({
            title: args.title,
            description: args.description,
            type: args.type,
            duration: args.duration,
          })
        }
      >
        Show Toast
      </Button>
    </>
  ),
  parameters: {
    docs: {
      source: {
        code: `
<Button
  onClick={() =>
    toaster.create({
      title: args.title,
      description: args.description,
      type: args.type,
      duration: args.duration,
    })
  }
>
  Show Toast
</Button>
        `,
      },
    },
  },
};
