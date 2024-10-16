import {
  AlertDialogBody,
  AlertDialogCloseButton,
  AlertDialogContent,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogOverlay,
  Button,
  AlertDialog as KvibAlertDialog,
  useDisclosure,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";
import { useRef } from "react";
import { AlertDialogCenteredString, AlertDialogString, AlertDialogTransitionString } from "./srcStrings";

const meta: Meta<typeof KvibAlertDialog> = {
  title: "Overlay/Alert Dialog",
  component: KvibAlertDialog,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
    },
  },
  argTypes: {
    isOpen: {
      required: true,
      description: "If true, the modal will be open.",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    leastDestructiveRef: {
      required: true,
      table: {
        type: { summary: "RefObject<FocusableElement>" },
      },
      control: "object",
    },
    onClose: {
      required: true,
      description: "Callback invoked to close the modal.",
      table: {
        type: { summary: "() => void" },
      },
      control: "function",
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
      description: "If true, the modal will close when the overlay is clicked",
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
      control: "object",
    },
    id: {
      description: "The id of the modal",
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    isCentered: {
      description: "If true, the modal will be centered on screen.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "false" },
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
      control: "function",
    },
    onEsc: {
      description: "Callback fired when the escape key is pressed and focus is within modal",
      table: {
        type: { summary: "() => void" },
      },
      control: "function",
    },
    onOverlayClick: {
      description: "Callback fired when the overlay is clicked.",
      table: {
        type: { summary: "() => void" },
      },
      control: "function",
    },
    portalProps: {
      description: "Props to be forwarded to the portal component",
      table: {
        type: { summary: "Pick< PortalProps, 'appendToParentPortal' | 'containerRef' >" },
      },
      control: "object",
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
    scrollBehavior: {
      description:
        "Where scroll behavior should originate. - If set to inside, scroll only occurs within the ModalBody. - If set to outside, the entire ModalContent will scroll within the viewport.",
      table: {
        type: { summary: "ScrollBehavior" },
        defaultValue: { summary: "outside" },
      },
      control: "text",
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
  args: { onClose: undefined, onCloseComplete: undefined, onEsc: undefined, onOverlayClick: undefined },
};

export default meta;
type Story = StoryObj<typeof KvibAlertDialog>;

const AlertDialogExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        Åpne alert dialog
      </Button>

      <KvibAlertDialog {...args} isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
        <AlertDialogOverlay>
          <AlertDialogContent>
            <AlertDialogHeader fontSize="lg" fontWeight="bold">
              Bekreft sletting
              <AlertDialogCloseButton />
            </AlertDialogHeader>

            <AlertDialogBody>Er du sikker på at du vil slette?</AlertDialogBody>

            <AlertDialogFooter>
              <Button ref={cancelRef} onClick={onClose} variant="secondary" colorScheme="blue">
                Avbryt
              </Button>
              <Button onClick={onClose} ml={3} colorScheme="red">
                Slett
              </Button>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialogOverlay>
      </KvibAlertDialog>
    </>
  );
};

export const AlertDialog: Story = {
  render: args => <AlertDialogExample {...args} />,
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: AlertDialogString,
      },
    },
  },
};

const AlertDialogTransitionExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        Åpne alert dialog
      </Button>
      <KvibAlertDialog
        {...args}
        motionPreset="slideInBottom"
        leastDestructiveRef={cancelRef}
        onClose={onClose}
        isOpen={isOpen}
      >
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Bekreft sletting
            <AlertDialogCloseButton />
          </AlertDialogHeader>

          <AlertDialogBody>Er du sikker på at du vil slette?</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose} variant="secondary" colorScheme="blue">
              Avbryt
            </Button>
            <Button onClick={onClose} ml={3} colorScheme="red">
              Slett
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </KvibAlertDialog>
    </>
  );
};

export const AlertDialogTransition: Story = {
  render: args => <AlertDialogTransitionExample {...args} />,
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: AlertDialogTransitionString,
      },
    },
  },
};

const AlertDialogCenteredExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const cancelRef = useRef<HTMLButtonElement>(null);

  return (
    <>
      <Button colorScheme="red" onClick={onOpen}>
        Åpne alert dialog
      </Button>
      <KvibAlertDialog {...args} leastDestructiveRef={cancelRef} onClose={onClose} isOpen={isOpen} isCentered>
        <AlertDialogOverlay />
        <AlertDialogContent>
          <AlertDialogHeader fontSize="lg" fontWeight="bold">
            Bekreft sletting
            <AlertDialogCloseButton />
          </AlertDialogHeader>

          <AlertDialogBody>Er du sikker på at du vil slette?</AlertDialogBody>

          <AlertDialogFooter>
            <Button ref={cancelRef} onClick={onClose} variant="secondary" colorScheme="blue">
              Avbryt
            </Button>
            <Button onClick={onClose} ml={3} colorScheme="red">
              Slett
            </Button>
          </AlertDialogFooter>
        </AlertDialogContent>
      </KvibAlertDialog>
    </>
  );
};

export const AlertDialogCentered: Story = {
  render: args => <AlertDialogCenteredExample {...args} />,
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: AlertDialogCenteredString,
      },
    },
  },
};
