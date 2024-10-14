export const ModalString = `const ModalExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>
        Åpne Modal
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
            <Button onClick={onClose} variant="tertiary">
              Tertiær
            </Button>
            <Box mr={3}>
              <Button mr={3} onClick={onClose} variant="secondary">
                Sekundær
              </Button>
              <Button variant="primary">Primær</Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </KvibModal>
    </>
  );
};`;

export const ModalScrollingString = `const ModalScrollingExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Åpne modal</Button>

      <KvibModal {...args} blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
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
};`;

export const ModalFocusString = `const ModalFocusExample = ({ ...args }) => {
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
              <FormLabel>Navn</FormLabel>
              <Input ref={initialRef} placeholder="Fornavn" />
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
};`;

export const ModalCenteredString = `const ModalCenteredExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Åpne modal</Button>

      <KvibModal {...args} onClose={onClose} isOpen={isOpen} isCentered>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Sentrert modal</ModalHeader>
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
};`;

export const ModalTransitionString = `const ModalTransitionExample = ({ ...args }) => {
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
            Modal kommer med en scale transition som du kan endre med motionPreset-propen. Sett verdien til
            “slidelnBottom”, “slidelnRight”, “scale” eller “none”.
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
};`;

export const ModalSizesString = `const ModalSizeExample = ({ ...args }) => {
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
        <Button onClick={() => handleSizeClick(size)} key={size} m={4}>{\`Åpne \${size} Modal\`}</Button>
      ))}

      <Modal onClose={onClose} size={size} isOpen={isOpen}>
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
      </Modal>
    </>
  );
};`;

export const ModalBackdropString = `const ModalBackdropExample = ({ ...args }) => {
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
};`;
