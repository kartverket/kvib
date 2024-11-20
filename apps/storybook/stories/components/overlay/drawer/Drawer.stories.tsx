import { Drawer, DrawerCloseTrigger, DrawerTitle, DrawerTrigger } from "@kvib/react";
import {
  Button,
  DrawerBackdrop,
  DrawerBody,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerPositioner,
  DrawerProps,
  Input,
  Drawer as KvibDrawer,
  useDisclosure,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibDrawer> = {
  title: "Komponenter/Drawer",
  component: KvibDrawer,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    isOpen: {
      description: "If true, the modal will be open.",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    onClose: {
      description: "Callback invoked to close the modal.",
      table: {
        type: { summary: "() => void" },
      },
      control: "text",
    },
    allowPinchZoom: {
      description: "Handle zoom/pinch gestures on iOS devices when scroll locking is enabled.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    autoFocus: {
      description:
        "If true, the modal will autofocus the first enabled and interactive element within the ModalContent",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    blockScrollOnMount: {
      description: "If true, scrolling will be disabled on the body when the modal opens.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    closeOnEsc: {
      description: "If true, the modal will close when the Esc key is pressed",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    closeOnOverlayClick: {
      description: "f true, the modal will close when the overlay is clicked",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    finalFocusRef: {
      description: "The ref of element to receive focus when the modal closes.",
      table: {
        type: { summary: "RefObject<FocusableElement>" },
      },
      control: "text",
    },
    id: {
      description: "The id of the modal",
      table: {
        type: { summary: "String" },
      },
      control: "text",
    },
    initialFocusRef: {
      description: "The ref of element to receive focus when the modal opens.",
      table: {
        type: { summary: "RefObject<FocusableElement>" },
      },
      control: "text",
    },
    isFullHeight: {
      description:
        "If true and drawer's placement is top or bottom, the drawer will occupy the viewport height (100vh)",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    lockFocusAcrossFrames: {
      description:
        "Enables aggressive focus capturing within iframes. - If true: keep focus in the lock, no matter where lock is active - If false: allows focus to move outside of iframe",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
      },
      control: "boolean",
    },
    onCloseComplete: {
      description: "Fires when all exiting nodes have completed animating out",
      table: {
        type: { summary: "() => void" },
      },
      control: "text",
    },
    onEsc: {
      description: "Callback fired when the escape key is pressed and focus is within modal",
      table: {
        type: { summary: "() => void" },
      },
      control: "text",
    },
    onOverlayClick: {
      description: "Callback fired when the overlay is clicked.",
      table: {
        type: { summary: "() => void" },
      },
      control: "text",
    },
    placement: {
      description: "The placement of the drawer",
      table: {
        type: { summary: "SlideDirection | LogicalPlacement" },
        defaultValue: { summary: "right" },
      },
      control: "text",
    },
    portalProps: {
      description: "Props to be forwarded to the portal component",
      table: {
        type: { summary: `Pick< PortalProps, "appendToParentPortal" | "containerRef" >` },
      },
      control: "text",
    },
    preserveScrollBarGap: {
      description:
        "If true, a `padding-right` will be applied to the body element that's equal to the width of the scrollbar. This can help prevent some unpleasant flickering effect and content adjustment when the modal opens",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    returnFocusOnClose: {
      description: "If true, the modal will return focus to the element that triggered it when it closes.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    size: {
      description: "Size of the Drawer",
      table: {
        type: { summary: "xs | sm | md | lg | xl | full" },
        defaultValue: { summary: "xs" },
      },
      options: ["xs", "sm", "md", "lg", "xl", "full"],
      control: { type: "radio" },
    },
    trapFocus: {
      description:
        "If false, focus lock will be disabled completely. This is useful in situations where you still need to interact with other surrounding elements. 🚨Warning: We don't recommend doing this because it hurts the accessibility of the modal, based on WAI-ARIA specifications.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    useInert: {
      description:
        "A11y: If true, the siblings of the modal will have `aria-hidden` set to true so that screen readers can only see the modal. This is commonly known as making the other elements **inert**",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
  },
  args: {
    allowPinchZoom: false,
    autoFocus: true,
    blockScrollOnMount: true,
    closeOnEsc: true,
    closeOnOverlayClick: true,
    lockFocusAcrossFrames: false,
    placement: "right",
    preserveScrollBarGap: true,
    returnFocusOnClose: true,
    size: "xs",
    trapFocus: true,
    useInert: true,
    onOverlayClick: undefined,
    onClose: undefined,
    onCloseComplete: undefined,
    onEsc: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof KvibDrawer>;

export const DrawerExample = ({ ...args }) => {
  const { open, onOpen, onClose } = useDisclosure();
  return (
    <Drawer {...args} open={open} onClose={onClose}>
      <DrawerBackdrop />
      <Button as={DrawerTrigger} colorPalette={args.colorPalette} onClick={onOpen}>
        Åpne
      </Button>
      <DrawerPositioner>
        <DrawerContent>
          <DrawerCloseTrigger />
          <DrawerHeader>
            <DrawerTitle>Lag din konto</DrawerTitle>
          </DrawerHeader>

          <DrawerBody>
            <Input placeholder="Skriv her..." />
          </DrawerBody>

          <DrawerFooter>
            <Button colorPalette={args.colorPalette} variant="secondary" mr={3} onClick={onClose}>
              Avbryt
            </Button>
            <Button colorPalette={args.colorPalette}>Lagre</Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerPositioner>
    </Drawer>
  );
};

export const Preview: Story = {
  render: (args: DrawerProps) => <DrawerExample {...args} />,
};
