export const ModalString = `
const { isOpen, onOpen, onClose } = useDisclosure();
return (
  <>
    <Button onClick={onOpen} colorScheme={args.colorScheme}>
      Åpne modal
    </Button>

    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Her er en modal</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Modaler må kun vises etter en brukerinteraksjon, og skal ikke avbryte brukeren på noe vis.
        </ModalBody>

        <ModalFooter justifyContent="space-between">
          <Button onClick={onClose} variant="tertiary">
            Tertiær
          </Button>
          <Box>
            <Button mr={3} onClick={onClose} variant="secondary">
              Sekundær
            </Button>
            <Button>Primær</Button>
          </Box>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
);
`;

export const ModalScrollingString = `
const { isOpen, onOpen, onClose } = useDisclosure();
return (
  <>
    <Button onClick={onOpen}>Åpne modal med scroll</Button>

    <Modal isOpen={isOpen} onClose={onClose}>
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
          <Button>Bekreft</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
);
`;

export const ModalFocusString = `
const { isOpen, onOpen, onClose } = useDisclosure();

const initialRef = useRef(null);
const finalRef = useRef(null);

return (
  <>
    <Button onClick={onOpen}>Åpne modal</Button>
    <Button ml={4} ref={finalRef}>
      Jeg får fokus på close
    </Button>

    <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
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
          <Button mr={3} variant="secondary">
            Avbryt
          </Button>
          <Button onClick={onClose}>
            Send inn skjema
          </Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
);
`;

export const ModalCenteredString = `
const { isOpen, onOpen, onClose } = useDisclosure();
return (
  <>
    <Button onClick={onOpen}>Åpne modal</Button>

    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Sentrert modal</ModalHeader>
        <ModalCloseButton />
        <ModalBody>Denne modalen vises i midten av skjermen.</ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Lukk</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
);
`;

export const ModalTransitionString = `
const { isOpen, onOpen, onClose } = useDisclosure();
return (
  <>
    <Button onClick={onOpen}>Åpne modal</Button>
    <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
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
    </Modal>
  </>
);
`;

export const ModalSizesString = `
const { isOpen, onOpen, onClose } = useDisclosure();
const [size, setSize] = useState("md");
const sizes = ["xs", "sm", "md", "lg", "xl", "full"];

return (
  <>
    <Flex gap="1rem" alignItems="center">
      <Select onChange={e => setSize(e.target.value)} value={size} w="8rem">
        {sizes.map(size => (
          <option key={size} value={size}>
            {size}
          </option>
        ))}
      </Select>
      <Button onClick={onOpen} m={4}>
        Åpne modal
      </Button>
    </Flex>

    <Modal onClose={onClose} size={size} isOpen={isOpen}>
      <ModalOverlay />
      <ModalContent>
        <ModalHeader>Modal Størrelser</ModalHeader>
        <ModalCloseButton />
        <ModalBody>
          Du har åpnet modalen i størrelse <b>{size}</b>.
        </ModalBody>
        <ModalFooter>
          <Button onClick={onClose}>Lukk</Button>
        </ModalFooter>
      </ModalContent>
    </Modal>
  </>
);
`;

export const ModalBackdropString = `
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
    <Modal isCentered isOpen={isOpen} onClose={onClose}>
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
    </Modal>
  </>
);
`;
