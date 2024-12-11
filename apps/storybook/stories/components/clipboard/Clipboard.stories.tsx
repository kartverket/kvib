import { ClipboardIconButton, ClipboardRoot, ClipboardRootProps } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof ClipboardRoot> = {
  title: "Komponenter/Clipboard",
  component: ClipboardRoot,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
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
type Story = StoryObj<typeof ClipboardRoot>;

const ClipboardExample = (props: ClipboardRootProps) => (
  <ClipboardRoot value="Denne teksten havner i utklippstavla" {...props}>
    <ClipboardIconButton />
  </ClipboardRoot>
);

export const Preview: Story = {
  render: args => <ClipboardExample {...args} />,
};
