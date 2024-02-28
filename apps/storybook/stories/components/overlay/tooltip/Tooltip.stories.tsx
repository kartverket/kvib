import { Tooltip as KvibTooltip, Button, VStack, HStack, Wrap, WrapItem, Box, forwardRef, Tag } from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibTooltip> = {
  title: "Overlay/Tooltip",
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
      control: "array",
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

export const Tooltip: Story = {
  args: {},
  render: (args) => (
    <KvibTooltip {...args} label="Et tooltip!" aria-label="Et tooltip">
      Hover meg
    </KvibTooltip>
  ),
};

export const TooltipArrow: Story = {
  args: { label: "Søk", hasArrow: true },
  render: (args) => (
    <KvibTooltip {...args} bg="gray.600">
      Hover meg
    </KvibTooltip>
  ),
};

export const TooltipFocusable: Story = {
  args: { label: "Søk", hasArrow: true },
  render: (args) => (
    <KvibTooltip {...args} bg="red.600">
      <Button>Button</Button>
    </KvibTooltip>
  ),
};

export const TooltipDisabled: Story = {
  args: { isDisabled: true },
  render: (args) => <KvibTooltip {...args}>Dette er et disabled tooltip</KvibTooltip>,
};

export const TooltipPlacement: Story = {
  args: {},
  render: (args) => (
    <VStack spacing={6}>
      <HStack spacing={6}>
        <KvibTooltip {...args} label="Auto start" placement="auto-start">
          <Button>Auto-Start</Button>
        </KvibTooltip>

        <KvibTooltip {...args} label="Auto" placement="auto">
          <Button>Auto</Button>
        </KvibTooltip>

        <KvibTooltip {...args} label="Auto end" placement="auto-end">
          <Button>Auto-End</Button>
        </KvibTooltip>
      </HStack>

      <HStack spacing={6}>
        <KvibTooltip {...args} label="Top start" placement="top-start">
          <Button>Top-Start</Button>
        </KvibTooltip>

        <KvibTooltip {...args} label="Top" placement="top">
          <Button>Top</Button>
        </KvibTooltip>

        <KvibTooltip {...args} label="Top end" placement="top-end">
          <Button>Top-End</Button>
        </KvibTooltip>
      </HStack>

      <HStack spacing={6}>
        <KvibTooltip {...args} label="Right start" placement="right-start">
          <Button>Right-Start</Button>
        </KvibTooltip>

        <KvibTooltip {...args} label="Right" placement="right">
          <Button>Right</Button>
        </KvibTooltip>

        <KvibTooltip {...args} label="Right end" placement="right-end">
          <Button>Right-End</Button>
        </KvibTooltip>
      </HStack>

      <HStack spacing={6}>
        <KvibTooltip {...args} label="Bottom start" placement="bottom-start">
          <Button>Bottom Start</Button>
        </KvibTooltip>

        <KvibTooltip {...args} label="Bottom" placement="bottom">
          <Button>Bottom</Button>
        </KvibTooltip>

        <KvibTooltip {...args} label="Bottom end" placement="bottom-end">
          <Button>Bottom End</Button>
        </KvibTooltip>
      </HStack>

      <HStack spacing={6}>
        <KvibTooltip {...args} label="Left start" placement="left-start">
          <Button>Left-Start</Button>
        </KvibTooltip>

        <KvibTooltip {...args} label="Left" placement="left">
          <Button>Left</Button>
        </KvibTooltip>

        <KvibTooltip {...args} label="Left end" placement="left-end">
          <Button>Left-End</Button>
        </KvibTooltip>
      </HStack>
    </VStack>
  ),
};

export const TooltipExamples: Story = {
  args: {},
  render: (args) => (
    <Wrap spacing={6}>
      <WrapItem>
        <KvibTooltip {...args} label="I close on click">
          <Button>Close on Click - true(default)</Button>
        </KvibTooltip>
      </WrapItem>

      <WrapItem>
        <KvibTooltip {...args} label="I don't close on click" closeOnClick={false}>
          <Button>Close on Click - false</Button>
        </KvibTooltip>
      </WrapItem>

      <WrapItem>
        <KvibTooltip {...args} label="I am always open" placement="top" isOpen>
          <Button>Always Open</Button>
        </KvibTooltip>
      </WrapItem>

      <WrapItem>
        <KvibTooltip {...args} label="I am open by default" placement="left" defaultIsOpen>
          <Button>Open on startup</Button>
        </KvibTooltip>
      </WrapItem>

      <WrapItem>
        <KvibTooltip {...args} label="Opened after 500ms" openDelay={500}>
          <Button>Delay Open - 500ms</Button>
        </KvibTooltip>
      </WrapItem>

      <WrapItem>
        <KvibTooltip {...args} label="Closed after 500ms" closeDelay={500}>
          <Button>Delay Close - 500ms</Button>
        </KvibTooltip>
      </WrapItem>

      <WrapItem>
        <KvibTooltip {...args} label="I have 15px arrow" hasArrow arrowSize={15}>
          <Button>Arrow size - 15px</Button>
        </KvibTooltip>
      </WrapItem>
    </Wrap>
  ),
};

const CustomCard = forwardRef(({ children, ...rest }, ref) => (
  <Box p="1">
    <Tag ref={ref} {...rest}>
      {children}
    </Tag>
  </Box>
));

export const CustomToolTip: Story = {
  args: { label: "Hover me! (CustomCard)" },
  render: (args) => (
    <KvibTooltip {...args}>
      <CustomCard>Tag Here</CustomCard>
    </KvibTooltip>
  ),
};
