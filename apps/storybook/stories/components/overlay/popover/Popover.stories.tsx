import {
  Button,
  Popover,
  PopoverArrow,
  PopoverContent,
  PopoverProps,
  PopoverTitle,
  PopoverTrigger,
  Text,
} from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof Popover> = {
  title: "Komponenter/Popover",
  component: Popover,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    arrowPadding: {
      description: "The padding required to prevent the arrow from reaching the very edge of the Popover.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "8" },
      },
      control: "number",
    },

    arrowShadowColor: {
      description: "The `box-shadow` of the popover arrow",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },

    arrowSize: {
      description: "The size of the popover arrow",
      table: {
        type: { summary: "number" },
      },
      control: "number",
    },

    autoFocus: {
      description: "If true, focus will be transferred to the first interactive element when the popover opens",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    boundary: {
      description: "The boundary area for the Popover. Used within the preventOverflow modifier",
      table: {
        type: { summary: '"clippingParents" | "scrollParent" | HTMLElement' },
        defaultValue: { summary: "clippingParents" },
      },
      control: "text",
    },

    closeDelay: {
      description: "",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "200" },
      },
      control: "number",
    },

    closeOnBlur: {
      description: "If true, the popover will close when you blur out it by clicking outside or tabbing out",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },

    closeOnEsc: {
      description: "If true, the popover will close when you hit the Esc key",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },

    computePositionOnMount: {
      description:
        "If true, the popover will be positioned when it mounts (even if it's not open) Note 🚨: We don't recommend using this in a popover/menu intensive UI or page as it might affect scrolling performance.",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },

    defaultIsOpen: {
      description: "If true, the popover will be initially opened.",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },

    direction: {
      description: "Theme direction ltr or rtl. Popover's placement will be set accordingly",
      table: {
        type: { summary: '"ltr" | "rtl"' },
        defaultValue: { summary: "ltr" },
      },
      options: ["ltr", "rtl"],
      control: { type: "radio" },
    },

    eventListeners: {
      description:
        "If provided, determines whether the Popover will reposition itself on scroll and resize of the window.",
      table: {
        type: { summary: "boolean | { scroll?: boolean | undefined resize?: boolean | undefined }" },
        defaultValue: { summary: "true" },
      },
      control: "object",
    },

    flip: {
      description:
        "If true, the Popover will change its placement and flip when it's about to overflow its boundary area.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },

    gutter: {
      description:
        "The distance or margin between the reference and Popover. It is used internally to create an offset modifier. NB: If you define offset prop, it'll override the gutter.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "8" },
      },
      control: "number",
    },

    id: {
      description:
        "The html id attribute of the popover. If not provided, we generate a unique id. This id is also used to auto-generate the `aria-labelledby` and `aria-describedby` attributes that points to the PopoverHeader and PopoverBody",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },

    initialFocusRef: {
      description: "The ref of the element that should receive focus when the popover opens.",
      table: {
        type: { summary: "RefObject<{ focus(): void }>" },
      },
      control: "object",
    },

    isLazy: {
      description: "Performance 🚀: If true, the PopoverContent rendering will be deferred until the popover is open.",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },

    isOpen: {
      description: "If true, the popover will be opened in controlled mode.",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },

    lazyBehavior: {
      description:
        "Performance 🚀: The lazy behavior of popover's content when not visible. Only works when `isLazy={true}` - 'unmount': The popover's content is always unmounted when not open. - 'keepMounted': The popover's content initially unmounted, but stays mounted when popover is open.",
      table: {
        type: { summary: "LazyMode" },
        defaultValue: { summary: "unmount" },
      },
      control: "text",
    },

    matchWidth: {
      description:
        "If true, the Popover will match the width of the reference at all times. It's useful for autocomplete, `date-picker` and select patterns.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },

    modifiers: {
      description: "Array of Popover.js modifiers. Check the docs to see the list of possible modifiers you can pass.",
      table: {
        type: { summary: "Partial<Modifier<string, any>>[]" },
      },
    },

    offset: {
      description: "The main and cross-axis offset to displace Popover element from its reference element.",
      table: {
        type: { summary: "[number, number]" },
      },
    },

    onClose: {
      description: "Callback fired when the popover closes",
      table: {
        type: { summary: "() => void" },
      },
    },

    onOpen: {
      description: "Callback fired when the popover opens",
      table: {
        type: { summary: "() => void" },
      },
    },

    openDelay: {
      description: "",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: "200" },
      },
      control: "number",
    },

    placement: {
      description: "The placement of the Popover relative to its reference.",
      table: {
        type: { summary: "PlacementWithLogical" },
        defaultValue: { summary: "bottom" },
      },
      control: "text",
    },

    preventOverflow: {
      description:
        "If true, will prevent the popover from being cut off and ensure it's visible within the boundary area.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },

    returnFocusOnClose: {
      description: "If true, focus will be returned to the element that triggers the popover when it closes",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },

    strategy: {
      description: "The CSS positioning strategy to use.",
      table: {
        type: { summary: '"absolute" | "fixed"' },
        defaultValue: { summary: "absolute" },
      },
      options: ["absolute", "fixed"],
      control: {
        type: "radio",
      },
    },

    trigger: {
      description:
        "The interaction that triggers the popover. 'hover' means the popover will open when you hover with mouse or focus with keyboard on the popover trigger. 'click' means the popover will open on click or press Enter to Space on keyboard.",
      table: {
        type: { summary: '"click" | "hover"' },
        defaultValue: { summary: "click" },
      },
      control: {
        type: "radio",
      },
      options: ["click", "hover"],
    },
  },
  args: { onClose: undefined, onOpen: undefined },
};

export default meta;
type Story = StoryObj<typeof Popover>;

export const Preview: Story = {
  render: (args: PopoverProps) => (
    <Popover {...args}>
      <PopoverTrigger asChild>
        <Button size="sm" variant="outline" colorPalette={args.colorPalette}>
          Vis popover
        </Button>
      </PopoverTrigger>
      <PopoverContent>
        <PopoverTitle>Dette er en popover</PopoverTitle>
        <PopoverArrow />
        <Text my="4">Hovedtekst i popover</Text>
      </PopoverContent>
    </Popover>
  ),
};
