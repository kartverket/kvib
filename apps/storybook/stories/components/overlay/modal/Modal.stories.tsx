import {
  Button,
  Modal as KvibModal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  useDisclosure,
  Text,
  FormControl,
  FormLabel,
  Input,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";
import { SetStateAction, useRef, useState } from "react";

const meta: Meta<typeof KvibModal> = {
  title: "Overlay/Modal",
  component: KvibModal,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    isOpen: {
      name: "isOpen*",
      description: "If true, the modal will be open.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
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
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    autoFocus: {
      description:
        "If true, the modal will autofocus the first enabled and interactive element within the ModalContent",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
      control: "boolean",
    },
    blockScrollOnMount: {
      description: "If true, scrolling will be disabled on the body when the modal opens.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
      control: "boolean",
    },
    closeOnEsc: {
      description: "If true, the modal will close when the Esc key is pressed",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
      control: "boolean",
    },
    closeOnOverlayClick: {
      description: "If true, the modal will close when the overlay is clicked",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
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
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    lockFocusAcrossFrames: {
      description:
        "Enables aggressive focus capturing within iframes. - If true: keep focus in the lock, no matter where lock is active - If false: allows focus to move outside of iframe",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
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
        defaultValue: { summary: true },
      },
      control: "boolean",
    },
    returnFocusOnClose: {
      description: "If true, the modal will return focus to the element that triggered it when it closes.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
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
        defaultValue: { summary: true },
      },
      control: "boolean",
    },
    useInert: {
      description:
        "A11y: If true, the siblings of the modal will have `aria-hidden` set to true so that screen readers can only see the modal. This is commonly known as making the other elements **inert**",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
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
      <Button onClick={onOpen}>Åpne Modal</Button>

      <KvibModal {...args} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Historiske kart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Vil du ha eit gammalt kart på hytteveggen? Historiske kart kan lastast ned og skrivast ut gratis. Ta ein
            kikk i vårt arkiv!
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="green" variant="secondary" mr={3} onClick={onClose}>
              Lukk
            </Button>
            <Button>Ta en kikk</Button>
          </ModalFooter>
        </ModalContent>
      </KvibModal>
    </>
  );
};

export const Modal: Story = {
  args: {},
  render: (args) => <ModalExample {...args} />,
};

const ModalScrollingExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Åpne modal</Button>

      <KvibModal {...args} blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal tittel</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Text fontWeight="bold" mb="1rem">
              Du kan scrolle i innholdet bak modalen
            </Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Lukk
            </Button>
            <Button variant="ghost">Annen handling</Button>
          </ModalFooter>
        </ModalContent>
      </KvibModal>
    </>
  );
};

export const ModalScrolling: Story = {
  args: {},
  render: (args) => <ModalScrollingExample {...args} />,
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
          <ModalHeader>Lag konto</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Fornavn</FormLabel>
              <Input ref={initialRef} placeholder="Fornavn" />
            </FormControl>

            <FormControl>
              <FormLabel>Etternavn</FormLabel>
              <Input placeholder="Etternavn" />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3}>
              Lagre
            </Button>
            <Button onClick={onClose}>Avbryt</Button>
          </ModalFooter>
        </ModalContent>
      </KvibModal>
    </>
  );
};

export const ModalFocus: Story = {
  args: {},
  render: (args) => <ModalFocusExample {...args} />,
};

const ModalCenteredExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Åpne modal</Button>

      <KvibModal {...args} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Sentrering</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Modalen har 3.75rem vertical offset. Den kan endres ved å legge "top" til ModalContent. Hvis du skal
            sentrere vertikalt legger du isCentered i Modal.
          </ModalBody>
          <ModalFooter>
            <Button onClick={onClose}>Lukk</Button>
          </ModalFooter>
        </ModalContent>
      </KvibModal>
    </>
  );
};

export const ModalCentered: Story = {
  args: {},
  render: (args) => <ModalCenteredExample {...args} />,
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
          <ModalBody>
            Modal kommer med scale transition, men du kan endre den med motionPreset-propen. Sett verdien til
            "slideInBottom", "slideInRight", "scale" eller "none".
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Lukk
            </Button>
            <Button variant="ghost">Annen handling</Button>
          </ModalFooter>
        </ModalContent>
      </KvibModal>
    </>
  );
};

export const ModalTransition: Story = {
  args: {},
  render: (args) => <ModalTransitionExample {...args} />,
};

const ModalSizeExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [size, setSize] = useState("md");

  const handleSizeClick = (newSize: SetStateAction<string>) => {
    setSize(newSize);
    onOpen();
  };

  const sizes = ["xs", "sm", "md", "lg", "xl", "full"];

  return (
    <>
      {sizes.map((size) => (
        <Button onClick={() => handleSizeClick(size)} key={size} m={4}>{`Åpne ${size} Modal`}</Button>
      ))}

      <KvibModal {...args} onClose={onClose} size={size} isOpen={isOpen}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Størrelser</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Bruk size-proppen hvis du vil endre størrelse. Verdiene du kan velge mellom er xs, sm, md, lg, xl, eller
            full.
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
  args: {},
  render: (args) => <ModalSizeExample {...args} />,
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
        Bruk overlay 1
      </Button>
      <Button
        ml="4"
        onClick={() => {
          setOverlay(<OverlayTwo />);
          onOpen();
        }}
      >
        Bruk overlay 2
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
  args: {},
  render: (args) => <ModalBackdropExample {...args} />,
};
