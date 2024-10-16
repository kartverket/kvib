import {
  Box,
  Button,
  Flex,
  FormControl,
  FormLabel,
  Input,
  Modal as KvibModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Select,
  Text,
  useDisclosure,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";
import { useRef, useState } from "react";
import {
  ModalBackdropString,
  ModalCenteredString,
  ModalFocusString,
  ModalScrollingString,
  ModalSizesString,
  ModalString,
  ModalTransitionString,
} from "./srcStrings";

const meta: Meta<typeof KvibModal> = {
  title: "Overlay/Modal",
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
  },
  args: {
    onCloseComplete: undefined,
    onEsc: undefined,
    onOverlayClick: undefined,
    onClose: undefined,
  },
};

export default meta;
type Story = StoryObj<typeof KvibModal>;

const ModalExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen} colorScheme={args.colorScheme}>
        Åpne modal
      </Button>

      <KvibModal {...args} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Her er en modal</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Modaler må kun vises etter en brukerinteraksjon, og skal ikke avbryte brukeren på noe vis.
          </ModalBody>

          <ModalFooter justifyContent="space-between">
            <Button onClick={onClose} variant="tertiary" colorScheme={args.colorScheme}>
              Tertiær
            </Button>
            <Box>
              <Button mr={3} onClick={onClose} variant="secondary" colorScheme={args.colorScheme}>
                Sekundær
              </Button>
              <Button colorScheme={args.colorScheme}>Primær</Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </KvibModal>
    </>
  );
};

export const Modal: Story = {
  render: args => <ModalExample {...args} />,
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: ModalString,
      },
    },
  },
};

const ModalScrollingExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Åpne modal med scroll</Button>

      <KvibModal {...args} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal med scroll</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              Her er en modal hvor du kan scrolle innholdet bak.
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose} variant="secondary">
              Avbryt
            </Button>
            <Button variant="primary">Bekreft</Button>
          </ModalFooter>
        </ModalContent>
      </KvibModal>
    </>
  );
};

export const ModalScrolling: Story = {
  render: args => <ModalScrollingExample {...args} />,
  args: {
    blockScrollOnMount: false,
  },
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: ModalScrollingString,
      },
    },
  },
};

const ModalFocusExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  const initialRef = useRef(null);
  const finalRef = useRef(null);

  return (
    <>
      <Button onClick={onOpen}>Åpne modal</Button>
      <Button ml={4} ref={finalRef}>
        Jeg får fokus på close
      </Button>

      <KvibModal {...args} initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal med skjema</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Skriv inn noe</FormLabel>
              <Input ref={initialRef} placeholder="Placeholder" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme={args.colorScheme} mr={3} variant="secondary">
              Avbryt
            </Button>
            <Button colorScheme={args.colorScheme} onClick={onClose} variant="primary">
              Send inn skjema
            </Button>
          </ModalFooter>
        </ModalContent>
      </KvibModal>
    </>
  );
};

export const ModalFocus: Story = {
  render: args => <ModalFocusExample {...args} />,
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: ModalFocusString,
      },
    },
  },
};

const ModalCenteredExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Åpne modal</Button>

      <KvibModal {...args} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sentrert modal</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Denne modalen vises i midten av skjermen.</ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Lukk</Button>
          </ModalFooter>
        </ModalContent>
      </KvibModal>
    </>
  );
};

export const ModalCentered: Story = {
  render: args => <ModalCenteredExample {...args} />,
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: ModalCenteredString,
      },
    },
  },
};

const ModalTransitionExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Åpne modal</Button>
      <KvibModal {...args} isCentered onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Transition</ModalHeader>
          <ModalCloseButton />
          <ModalBody>Denne modalen skyves inn med animasjon.</ModalBody>
          <ModalFooter>
            <Button mr={3} onClick={onClose} variant="secondary">
              Avbryt
            </Button>
            <Button>Bekreft</Button>
          </ModalFooter>
        </ModalContent>
      </KvibModal>
    </>
  );
};

export const ModalTransition: Story = {
  render: args => <ModalTransitionExample {...args} />,
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: ModalTransitionString,
      },
    },
  },
};

const ModalSizeExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("md");
  const sizes = ["xs", "sm", "md", "lg", "xl", "full"];

  return (
    <>
      <FormControl>
        <FormLabel htmlFor="select">Velg størrelse for modal</FormLabel>
        <Flex gap="0.5rem">
          <Select id="select" onChange={e => setSize(e.target.value)} value={size} w="12rem">
            {sizes.map(size => (
              <option key={size} value={size}>
                {size}
              </option>
            ))}
          </Select>
          <Button onClick={onOpen}>Åpne modal</Button>
        </Flex>
      </FormControl>

      <KvibModal {...args} onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal i forskjellige størrelser</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Du har åpnet modalen i størrelse <b>{size}</b>.
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Lukk</Button>
          </ModalFooter>
        </ModalContent>
      </KvibModal>
    </>
  );
};

export const ModalSizes: Story = {
  render: args => <ModalSizeExample {...args} />,
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: ModalSizesString,
      },
    },
  },
};

const ModalBackdropExample = ({ ...args }) => {
  const OverlayOne = () => <ModalOverlay bg="blackAlpha.300" backdropFilter="blur(10px) hue-rotate(90deg)" />;

  const OverlayTwo = () => <ModalOverlay bg="none" backdropFilter="auto" backdropInvert="80%" backdropBlur="2px" />;

  const { isOpen, onOpen, onClose } = useDisclosure();
  const [overlay, setOverlay] = useState(<OverlayOne />);

  return (
    <>
      <Button
        onClick={() => {
          setOverlay(<OverlayOne />);
          onOpen();
        }}
      >
        Åpne modal med blurry bakgrunn
      </Button>
      <Button
        ml="4"
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        Åpne modal med inverterte farger
      </Button>
      <KvibModal {...args} isCentered isOpen={isOpen} onClose={onClose}>
        {overlay}
        <ModalContent>
          <ModalHeader>Bakteppe</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text>Egendefinerte baktepper!</Text>
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Lukk</Button>
          </ModalFooter>
        </ModalContent>
      </KvibModal>
    </>
  );
};

export const ModalBackdrop: Story = {
  render: args => <ModalBackdropExample {...args} />,
  parameters: {
    docs: {
      source: {
        type: "code",
        language: "tsx",
        code: ModalBackdropString,
      },
    },
  },
};
