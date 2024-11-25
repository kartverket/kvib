import {
  Box,
  Button,
  DialogActionTrigger,
  DialogBackdrop,
  DialogBody,
  DialogCloseTrigger,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogProps,
  DialogTitle,
  DialogTrigger,
  Dialog as KvibModal,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibModal> = {
  title: "Komponenter/Dialog",
  component: KvibModal,

  argTypes: {
    isOpen: {
      name: "isOpen*",
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
      name: "isOpen*",
      description: "Handle zoom/pinch gestures on iOS devices when scroll locking is enabled.",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    autoFocus: {
      description:
        "If true, the modal will autofocus the first enabled and interactive element within the ModalContent",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    blockScrollOnMount: {
      description: "If true, scrolling will be disabled on the body when the modal opens.",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    closeOnEsc: {
      description: "If true, the modal will close when the Esc key is pressed",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    closeOnOverlayClick: {
      description: "If true, the modal will close when the overlay is clicked",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    finalFocusRef: {
      description: "The ref of element to receive focus when the modal closes.",
      table: {
        type: { summary: "RefObject<FocusableElement>" },
      },
      control: "object",
    },
    initialFocusRef: {
      description: "The ref of element to receive focus when the modal opens.",
      table: {
        type: { summary: "RefObject<FocusableElement>" },
      },
      control: "object",
    },
    isCentered: {
      description: "If true, the modal will be centered on screen.",
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
      },
      control: "boolean",
    },
    motionPreset: {
      description: "The transition that should be used for the modal",
      table: {
        type: { summary: "MotionPreset" },
        defaultValue: { summary: "scale" },
      },
      control: "text",
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
      },
      control: "boolean",
    },
    returnFocusOnClose: {
      description: "If true, the modal will return focus to the element that triggered it when it closes.",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    scrollBehavior: {
      description:
        "Where scroll behavior should originate. - If set to inside, scroll only occurs within the ModalBody. - If set to outside, the entire ModalContent will scroll within the viewport.",
      table: {
        type: { summary: "ScrollBehavior" },
        defaultValue: { summary: "outside" },
      },
      control: "text",
    },
    size: {
      description: "The size of the Modal",
      table: {
        type: { summary: "xs | sm | md | lg | xl | 2xl | 3xl | 4xl | 5xl | 6xl | full" },
        defaultValue: { summary: "md" },
      },
      options: ["xs", "sm", "md", "lg", "xl", "2xl", "3xl", "4xl", "5xl", "6xl", "full"],
      control: { type: "radio" },
    },
    trapFocus: {
      description:
        "If false, focus lock will be disabled completely. This is useful in situations where you still need to interact with other surrounding elements. 🚨Warning: We don't recommend doing this because it hurts the accessibility of the modal, based on WAI-ARIA specifications.",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    useInert: {
      description:
        "A11y: If true, the siblings of the modal will have `aria-hidden` set to true so that screen readers can only see the modal. This is commonly known as making the other elements **inert**",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    colorPalette: {
      description: "The visual color appearance of the component",
      table: {
        type: { summary: "green | blue | gray | red" },
      },
      defaultValue: { summary: "green" },
      options: ["green", "blue", "gray", "red"],
      control: { type: "radio" },
    },
  },
  args: {
    colorPalette: "green",
    onCloseComplete: undefined,
    onEsc: undefined,
    onOverlayClick: undefined,
    onClose: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof KvibModal>;

const ModalExample = ({ ...args }) => {
  return (
    <>
      <KvibModal {...args}>
        <DialogTrigger asChild>
          <Button colorPalette={args.colorPalette}>Åpne dialog</Button>
        </DialogTrigger>

        <DialogBackdrop />
        <DialogContent>
          <DialogHeader>
            <DialogTitle>Her er en modal</DialogTitle>
          </DialogHeader>
          <DialogBody>
            Modaler må kun vises etter en brukerinteraksjon, og skal ikke avbryte brukeren på noe vis.
          </DialogBody>

          <DialogFooter justifyContent="space-between">
            <Button variant="tertiary" colorPalette={args.colorPalette}>
              Tertiær
            </Button>
            <Box>
              <Button mr={3} variant="secondary" colorPalette={args.colorPalette}>
                Sekundær
              </Button>
              <DialogActionTrigger asChild>
                <Button colorPalette={args.colorPalette}>Primær</Button>
              </DialogActionTrigger>
            </Box>
          </DialogFooter>
          <DialogCloseTrigger />
        </DialogContent>
      </KvibModal>
    </>
  );
};

export const Preview: Story = {
  render: (args: DialogProps) => <ModalExample {...args} />,
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
      },
    },
  },
};
