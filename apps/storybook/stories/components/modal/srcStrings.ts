export const ModalString = `const ModalExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Åpne Modal</Button>

      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Historiske kart</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            Vil du ha eit gammalt kart på hytteveggen? Historiske kart kan lastast ned og skrivast ut gratis. Ta ein
            kikk i vårt arkiv!
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Lukk
            </Button>
            <Button>Ta en kikk</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
};`;

export const ModalScrollingString = `const ModalScrollingExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Åpne modal</Button>

      <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
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
      </Modal>
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

      <Modal initialFocusRef={initialRef} finalFocusRef={finalRef} isOpen={isOpen} onClose={onClose}>
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
      </Modal>
    </>
  );
};`;

export const ModalCenteredString = `const ModalCenteredExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button onClick={onOpen}>Åpne modal</Button>

      <Modal onClose={onClose} isOpen={isOpen} isCentered>
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
      </Modal>
    </>
  );
};`;

export const ModalTransitionString = `const ModalTransitionExample = ({ ...args }) => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button onClick={onOpen}>Åpne modal</Button>
      <Modal isCentered onClose={onClose} isOpen={isOpen} motionPreset="slideInBottom">
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
      </Modal>
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
