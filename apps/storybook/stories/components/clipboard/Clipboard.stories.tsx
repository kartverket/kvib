import { Clipboard, ClipboardIconButton } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Clipboard> = {
  title: "Komponenter/Clipboard",
  component: Clipboard,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    timeout: {
      description: "The timeout for the copy operation",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "3000" },
      },
      control: "number",
    },
    onStatusChange: {
      description: "The function to be called when the value is copied to the clipboard",
      table: {
        type: { summary: "(details: CopyStatusDetails) => void" },
      },
    },
    value: {
      description: "The value to be copied to the clipboard",
      table: {
        type: { summary: "string" },
      },
    },
  },
};

export default meta;
type Story = StoryObj<typeof Clipboard>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
Clipboard.displayName = "Clipboard";
ClipboardIconButton.displayName = "ClipboardIconButton";

export const Preview: Story = {
  render: args => (
    <Clipboard value="Text copied to the clipboard" {...args}>
      <ClipboardIconButton colorPalette={args.colorPalette} />
    </Clipboard>
  ),
};
