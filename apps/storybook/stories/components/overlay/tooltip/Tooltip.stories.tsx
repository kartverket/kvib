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
    arrowPadding: {
      description: "The padding required to prevent the arrow from reaching the very edge of the popper.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "8" },
      },
      control: "number",
    },
    arrowShadowColor: {
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    arrowSize: {
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "10" },
      },
      control: "number",
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
    closeOnEsc: {
      description: "If true, the tooltip will hide on pressing Esc key",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    closeOnMouseDown: {
      description: "If true, the tooltip will hide while the mouse is down",
      table: {
        type: { summary: "boolean" },
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
    defaultIsOpen: {
      description: "If true, the tooltip will be initially shown",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    direction: {
      description: "Theme direction ltr or rtl. Popper's placement will be set accordingly",
      table: {
        type: { summary: "'ltr' | 'rtl'" },
        defaultValue: { summary: "ltr" },
      },
      options: ["ltr", "rtl"],
      control: "radio",
    },
    gutter: {
      description:
        "The distance or margin between the reference and popper. It is used internally to create an offset modifier. NB: If you define offset prop, it'll override the gutter.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "8" },
      },
      control: "number",
    },
    hasArrow: {
      description: "If true, the tooltip will show an arrow tip",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    isDisabled: {
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    isOpen: {
      description: "If true, the tooltip will be shown (in controlled mode)",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    label: {
      description: "The label of the tooltip",
      table: {
        type: {
          summary:
            "type ONLY_FOR_FORMAT = | string | number | boolean | ReactElement<any, string | JSXElementConstructor<any>> | ReactFragment | ReactPortal",
        },
      },
      control: "text",
    },
    modifiers: {
      description: "Array of popper.js modifiers. Check the docs to see the list of possible modifiers you can pass.",
      table: {
        type: { summary: "Partial<Modifier<string, any>>[]" },
      },
      control: "text",
    },
    motionProps: {
      table: {
        type: { summary: "HTMLMotionProps<'div'>" },
      },
      control: "text",
    },
    offset: {
      description: "The main and cross-axis offset to displace popper element from its reference element.",
      table: {
        type: { summary: "[number, number]" },
      },
    },
    onClose: {
      description: "Callback to run when the tooltip hides",
      table: {
        type: { summary: "() => void" },
      },
      control: "text",
    },
    onOpen: {
      description: "Callback to run when the tooltip shows",
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
    placement: {
      description: "The placement of the popper relative to its reference.",
      table: {
        type: { summary: "PlacementWithLogical" },
        defaultValue: { summary: "bottom" },
      },
      control: "text",
    },
    portalProps: {
      description: "Props to be forwarded to the portal component",
      table: {
        type: { summary: "Pick< PortalProps, 'appendToParentPortal' | 'containerRef' >" },
      },
      control: "text",
    },
    shouldWrapChildren: {
      description: "If true, the tooltip will wrap its children in a `<span/>` with `tabIndex=0`",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
  },
  args: { onClose: undefined, onOpen: undefined },
};

export default meta;
type Story = StoryObj<typeof KvibTooltip>;

export const Preview: Story = {
  render: (args: TooltipProps) => (
    <KvibTooltip {...args} content="Et tooltip!" aria-label="Et tooltip">
      <Button variant="outline" size="sm" colorPalette={args.colorPalette}>
        Hover me
      </Button>
    </KvibTooltip>
  ),
};
