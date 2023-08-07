import {
  Box,
  Button,
  Drawer as KvibDrawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerOverlay,
  DrawerProps,
  FormLabel,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightAddon,
  Radio,
  RadioGroup,
  Select,
  Stack as KvibStack,
  Textarea,
  useDisclosure,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";
import { useRef, useState } from "react";

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
      description: "f true, the modal will close when the overlay is clicked",
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
        defaultValue: { summary: false },
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

const DrawerExample = ({ ...args }: DrawerProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>
        Åpne
      </Button>
      <KvibDrawer {...args} isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Lag din konto</DrawerHeader>

          <DrawerBody>
            <Input placeholder="Skriv her..." />
          </DrawerBody>

          <DrawerFooter>
            <Button variant="outline" mr={3} onClick={onClose}>
              Avbryt
            </Button>
            <Button colorScheme="blue">Lagre</Button>
          </DrawerFooter>
        </DrawerContent>
      </KvibDrawer>
    </>
  );
};

export const Drawer: Story = {
  args: {},
  render: (args) => <DrawerExample {...args} />,
};

const PlacementExample = ({ ...args }: DrawerProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState<"right" | "left" | "top" | "bottom">("right");

  const handlePlacementChange = (nextValue: "right" | "left" | "top" | "bottom") => {
    setPlacement(nextValue);
  };

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={handlePlacementChange}>
        <KvibStack direction="row" mb="4">
          <Radio value="top">Topp</Radio>
          <Radio value="right">Høyre</Radio>
          <Radio value="bottom">Bunn</Radio>
          <Radio value="left">Venstre</Radio>
        </KvibStack>
      </RadioGroup>
      <Button colorScheme="blue" onClick={onOpen}>
        Åpne
      </Button>
      <KvibDrawer {...args} placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Drawer</DrawerHeader>
          <DrawerBody>
            <p>Noe innhold...</p>
            <p>Noe innhold...</p>
            <p>Noe innhold...</p>
          </DrawerBody>
        </DrawerContent>
      </KvibDrawer>
    </>
  );
};

export const DrawerPlacement: Story = {
  args: {},
  render: (args) => <PlacementExample {...args} />,
};

const DrawerFocusExample = ({ ...args }: DrawerProps) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef<HTMLInputElement>(null);

  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>
        Lag bruker
      </Button>
      <KvibDrawer {...args} isOpen={isOpen} placement="right" initialFocusRef={firstField} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Lag en ny konto</DrawerHeader>

          <DrawerBody>
            <KvibStack spacing="24px">
              <Box>
                <FormLabel htmlFor="username">Navn</FormLabel>
                <Input ref={firstField} id="username" placeholder="Brukernavn" />
              </Box>

              <Box>
                <FormLabel htmlFor="url">Url</FormLabel>
                <InputGroup>
                  <InputLeftAddon>http://</InputLeftAddon>
                  <Input type="url" id="url" placeholder="Domene" />
                  <InputRightAddon>.com</InputRightAddon>
                </InputGroup>
              </Box>

              <Box>
                <FormLabel htmlFor="owner">Velg eier</FormLabel>
                <Select id="owner" defaultValue="segun">
                  <option value="ola">Ola Nordmann</option>
                  <option value="kari">Kari Nordmann</option>
                </Select>
              </Box>

              <Box>
                <FormLabel htmlFor="desc">Beskrivelse</FormLabel>
                <Textarea id="desc" />
              </Box>
            </KvibStack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Avbryt
            </Button>
            <Button colorScheme="blue">Send inn</Button>
          </DrawerFooter>
        </DrawerContent>
      </KvibDrawer>
    </>
  );
};

export const DrawerFocus: Story = {
  args: {},
  render: (args) => <DrawerFocusExample {...args} />,
};

const SizeExample = ({ ...args }: DrawerProps) => {
  const [size, setSize] = useState<string | undefined>();
  const { isOpen, onOpen, onClose } = useDisclosure();

  const handleClick = (newSize: string) => {
    setSize(newSize);
    onOpen();
  };

  const sizes: string[] = ["xs", "sm", "md", "lg", "xl", "full"];

  return (
    <>
      {sizes.map((size) => (
        <Button onClick={() => handleClick(size)} key={size} m={4}>{`Åpne ${size} Drawer`}</Button>
      ))}

      <KvibDrawer {...args} onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{`${size} drawer innhold`}</DrawerHeader>
          <DrawerBody>
            <p>
              Kartverket er Norges nasjonale kartmyndighet, og har som sin primære oppgave å bidra med geografisk
              informasjon og tjenester av høy kvalitet til samfunnet. Dette omfatter både produksjon av kart og
              oppmålingstjenester, samt forvaltning av eiendomsinformasjon.
            </p>
          </DrawerBody>
        </DrawerContent>
      </KvibDrawer>
    </>
  );
};

export const DrawerSizes: Story = {
  args: {},
  render: (args) => <SizeExample {...args} />,
};
