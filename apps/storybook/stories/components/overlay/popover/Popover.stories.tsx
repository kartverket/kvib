import {
  Box,
  Button,
  Popover as KvibPopover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverFooter,
  PopoverHeader,
  PopoverTrigger,
  ButtonGroup,
  FormControl,
  FormLabel,
  Input,
  Stack,
  useDisclosure,
  IconButton,
  useBoolean,
  HStack,
  PopoverAnchor,
  RadioGroup,
  Radio,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";
import { forwardRef, useRef, Ref, FC, useState } from "react";
import FocusLock from "react-focus-lock";

const meta: Meta<typeof KvibPopover> = {
  title: "Overlay/Popover",
  component: KvibPopover,
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
        defaultValue: { summary: 8 },
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
        defaultValue: { summary: true },
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
        defaultValue: { summary: 200 },
      },
      control: "number",
    },

    closeOnBlur: {
      description: "If true, the popover will close when you blur out it by clicking outside or tabbing out",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
      control: "boolean",
    },

    closeOnEsc: {
      description: "If true, the popover will close when you hit the Esc key",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
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
        defaultValue: { summary: true },
      },
      control: "object",
    },

    flip: {
      description:
        "If true, the Popover will change its placement and flip when it's about to overflow its boundary area.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
      control: "boolean",
    },

    gutter: {
      description:
        "The distance or margin between the reference and Popover. It is used internally to create an offset modifier. NB: If you define offset prop, it'll override the gutter.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 8 },
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
        defaultValue: { summary: false },
      },
      control: "boolean",
    },

    modifiers: {
      description: "Array of Popover.js modifiers. Check the docs to see the list of possible modifiers you can pass.",
      table: {
        type: { summary: "Partial<Modifier<string, any>>[]" },
      },
      control: "array",
    },

    offset: {
      description: "The main and cross-axis offset to displace Popover element from its reference element.",
      table: {
        type: { summary: "[number, number]" },
      },
      control: "array",
    },

    onClose: {
      description: "Callback fired when the popover closes",
      table: {
        type: { summary: "() => void" },
      },
      control: "function",
    },

    onOpen: {
      description: "Callback fired when the popover opens",
      table: {
        type: { summary: "() => void" },
      },
      control: "function",
    },

    openDelay: {
      description: "",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 200 },
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
        defaultValue: { summary: true },
      },
      control: "boolean",
    },

    returnFocusOnClose: {
      description: "If true, focus will be returned to the element that triggers the popover when it closes",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
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
type Story = StoryObj<typeof KvibPopover>;

export const Popover: Story = {
  args: {},
  render: (args) => (
    <Box h="40">
      <KvibPopover {...args}>
        <PopoverTrigger>
          <Button>Trykk</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverHeader>Bekreftelse!</PopoverHeader>
          <PopoverBody>Er du sikker på at du vil drikke den milkshaken?</PopoverBody>
        </PopoverContent>
      </KvibPopover>
    </Box>
  ),
};

const PopoverFocusExample = ({ ...args }) => {
  const initialFocusRef = useRef(null);
  return (
    <KvibPopover {...args} initialFocusRef={initialFocusRef} placement="bottom" closeOnBlur={false}>
      <PopoverTrigger>
        <Button>Trykk</Button>
      </PopoverTrigger>
      <PopoverContent color="white" bg="blue.800" borderColor="blue.800">
        <PopoverHeader pt={4} fontWeight="bold" border="0">
          Hjelp med oppsett
        </PopoverHeader>
        <PopoverArrow bg="blue.800" />
        <PopoverCloseButton />
        <PopoverBody>Det er lurt å sette opp emailbekreftelse for å få bekreftelse på ordren din.</PopoverBody>
        <PopoverFooter border="0" display="flex" alignItems="center" justifyContent="space-between" pb={4}>
          <Box fontSize="sm">Steg 2 av 4</Box>
          <ButtonGroup size="sm">
            <Button colorScheme="green">Legg til Email</Button>
            <Button colorScheme="blue" ref={initialFocusRef}>
              Neste
            </Button>
          </ButtonGroup>
        </PopoverFooter>
      </PopoverContent>
    </KvibPopover>
  );
};

export const PopoverFocus: Story = {
  args: {},
  render: (args) => <PopoverFocusExample {...args} />,
};

type TextInputProps = {
  label: string;
  id: string;
  [x: string]: any;
};

const TextInput = forwardRef<HTMLInputElement, TextInputProps>((props, ref) => {
  const { id, label, ...restProps } = props;

  return (
    <FormControl>
      <FormLabel htmlFor={id}>{label}</FormLabel>
      <Input ref={ref} id={id} {...restProps} />
    </FormControl>
  );
});

type FormProps = {
  firstFieldRef: Ref<HTMLInputElement>;
  onCancel: () => void;
};

const Form: FC<FormProps> = ({ firstFieldRef, onCancel }) => {
  return (
    <Stack spacing={4}>
      <TextInput label="Fornavn" id="first-name" ref={firstFieldRef} defaultValue="Ola" />
      <TextInput label="Etternavn" id="last-name" defaultValue="Nordmann" />
      <ButtonGroup display="flex" justifyContent="flex-end">
        <Button variant="primary" onClick={onCancel}>
          Avbryt
        </Button>
        <Button isDisabled colorScheme="green">
          Lagre
        </Button>
      </ButtonGroup>
    </Stack>
  );
};

const PopoverForm = ({ ...args }) => {
  const { onOpen, onClose, isOpen } = useDisclosure();
  const firstFieldRef = useRef<HTMLInputElement>(null);

  return (
    <>
      <Box display="inline-block" mr={3}>
        Ola Nordmann
      </Box>
      <KvibPopover
        {...args}
        isOpen={isOpen}
        initialFocusRef={firstFieldRef}
        onOpen={onOpen}
        onClose={onClose}
        placement="right"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <IconButton size="sm" icon={"edit"} aria-label={"edit"} colorScheme="gray" />
        </PopoverTrigger>
        <PopoverContent p={5}>
          <FocusLock returnFocus persistentFocus={false}>
            <PopoverArrow />
            <PopoverCloseButton />
            <Form firstFieldRef={firstFieldRef} onCancel={onClose} />
          </FocusLock>
        </PopoverContent>
      </KvibPopover>
    </>
  );
};

export const PopoverTrappingFocus: Story = {
  args: {},
  render: (args) => <PopoverForm {...args} />,
};

const ControlledUsage = ({ ...args }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <>
      <Button mr={5} onClick={onToggle}>
        Trigger
      </Button>
      <KvibPopover
        {...args}
        returnFocusOnClose={false}
        isOpen={isOpen}
        onClose={onClose}
        placement="right"
        closeOnBlur={false}
      >
        <PopoverTrigger>
          <Button colorScheme="red">Popover</Button>
        </PopoverTrigger>
        <PopoverContent>
          <PopoverHeader fontWeight="semibold">Bekreftelse</PopoverHeader>
          <PopoverArrow />
          <PopoverCloseButton />
          <PopoverBody>Er du sikker på at du vil fortsette?</PopoverBody>
          <PopoverFooter display="flex" justifyContent="flex-end">
            <ButtonGroup size="sm">
              <Button variant="outline">Avbryt</Button>
              <Button colorScheme="red">Godkjenn</Button>
            </ButtonGroup>
          </PopoverFooter>
        </PopoverContent>
      </KvibPopover>
    </>
  );
};

export const PopoverControlled: Story = {
  args: {},
  render: (args) => <ControlledUsage {...args} />,
};

const WithPopoverAnchor = ({ ...args }) => {
  const [isEditing, setIsEditing] = useBoolean();
  const [color, setColor] = useState("red");

  return (
    <KvibPopover
      {...args}
      isOpen={isEditing}
      onOpen={setIsEditing.on}
      onClose={setIsEditing.off}
      closeOnBlur={false}
      isLazy
      lazyBehavior="keepMounted"
    >
      <FormLabel htmlFor="anchor text">Prøv å redigere teksten</FormLabel>
      <HStack>
        <PopoverAnchor>
          <Input
            id="anchor text"
            color={color}
            w="auto"
            display="inline-flex"
            isDisabled={!isEditing}
            defaultValue="Popover Anchor"
          />
        </PopoverAnchor>

        <PopoverTrigger>
          <Button h="40px" colorScheme="blue">
            {isEditing ? "Lagre" : "Rediger"}
          </Button>
        </PopoverTrigger>
      </HStack>

      <PopoverContent>
        <PopoverBody>
          Farger:
          <RadioGroup value={color} onChange={(newColor) => setColor(newColor)}>
            <Stack direction="row">
              <Radio value="red">rød</Radio>
              <Radio value="blue">blå</Radio>
              <Radio value="green">grønn</Radio>
              <Radio value="purple">lilla</Radio>
            </Stack>
          </RadioGroup>
        </PopoverBody>
      </PopoverContent>
    </KvibPopover>
  );
};

export const PopoverAnchorExample: Story = {
  args: {},
  render: (args) => <WithPopoverAnchor {...args} />,
};

export const PopoverCustomizing: Story = {
  args: {},
  render: (args) => (
    <Box h="40">
      <KvibPopover {...args}>
        <PopoverTrigger>
          <Box tabIndex={0} role="button" aria-label="Some box" p={5} w="120px" bg="gray.300" children="Klikk her" />
        </PopoverTrigger>
        <PopoverContent bg="tomato" color="white">
          <PopoverHeader fontWeight="semibold">Tilpasning</PopoverHeader>
          <PopoverArrow bg="pink.500" />
          <PopoverCloseButton bg="purple.500" />
          <PopoverBody>Tadaa!! Farge og bakgrunn er endret. Sjekk ut props på hvert komponent.</PopoverBody>
        </PopoverContent>
      </KvibPopover>
    </Box>
  ),
};
