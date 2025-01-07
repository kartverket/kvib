import { Button, Tooltip as KvibTooltip, TooltipProps } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibTooltip> = {
  title: "Komponenter/Tooltip",
  component: KvibTooltip,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    "aria-label": {
      description:
        "The accessible, human friendly label to use for screen readers. If passed, tooltip will show the content label but expose only `aria-label` to assistive technologies",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    closeDelay: {
      description: "Delay (in ms) before hiding the tooltip",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0ms" },
      },
      control: "number",
    },
    closeOnClick: {
      description: "If true, the tooltip will hide on click",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    closeOnPointerDown: {
      description: "If true, the tooltip will hide while the pointer is down",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    closeOnScroll: {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    defaultOpen: {
      description: "If true, the tooltip will be initially shown",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    disabled: {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    open: {
      description: "If true, the tooltip will be shown (in controlled mode)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    onExitComplete: {
      description: "Callback to run when the tooltip hides",
      table: {
        type: { summary: "() => void" },
      },
      control: "text",
    },
    onOpenChange: {
      description: "Callback to run when the tooltip shows or hides",
      table: {
        type: { summary: "() => void" },
      },
      control: "text",
    },
    openDelay: {
      description: "Delay (in ms) before showing the tooltip",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "0ms" },
      },
      control: "number",
    },
  },
};

export default meta;
/** Trenger eget interface for å arve fargepaletten til knappen i eksempelet */
interface Props extends TooltipProps {
  colorPalette: "gray" | "blue" | "green" | "red";
}
type Story = StoryObj<Props>;

export const Preview: Story = {
  render: (args: Props) => (
    <KvibTooltip {...args} content="Et tooltip!" aria-label="Et tooltip">
      <Button variant="outline" size="sm" colorPalette={args.colorPalette}>
        Hover me
      </Button>
    </KvibTooltip>
  ),
};
