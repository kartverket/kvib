export const PopoverFocusString = `const PopoverFocusExample = ({ ...args }) => {
  const initialFocusRef = useRef(null);
  return (
    <Popover initialFocusRef={initialFocusRef} placement="bottom" closeOnBlur={false}>
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
    </Popover>
  );
};`;

export const PopoverTrappingFocusString = `type TextInputProps = {
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
        <Button variant="outline" onClick={onCancel}>
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
      <Popover
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
      </Popover>
    </>
  );
};`;

export const PopoverControlledString = `const ControlledUsage = ({ ...args }) => {
  const { isOpen, onToggle, onClose } = useDisclosure();

  return (
    <>
      <Button mr={5} onClick={onToggle}>
        Trigger
      </Button>
      <Popover
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
      </Popover>
    </>
  );
};`;

export const PopoverAnchorString = `const WithPopoverAnchor = ({ ...args }) => {
  const [isEditing, setIsEditing] = useBoolean();
  const [color, setColor] = useState("red");
  return (
    <Popover
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
    </Popover>
  );
};`;
