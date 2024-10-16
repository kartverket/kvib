export const AlertDialogString = `
const { isOpen, onOpen, onClose } = useDisclosure();
const cancelRef = useRef<HTMLButtonElement>(null);

return (
  <>
    <Button colorScheme="red" onClick={onOpen}>
      Åpne alert dialog
    </Button>

    <AlertDialog isOpen={isOpen} leastDestructiveRef={cancelRef} onClose={onClose}>
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
    </AlertDialog>
  </>
);
`;

export const AlertDialogTransitionString = `
const { isOpen, onOpen, onClose } = useDisclosure();
const cancelRef = useRef<HTMLButtonElement>(null);

return (
  <>
    <Button colorScheme="red" onClick={onOpen}>
      Åpne alert dialog
    </Button>
    <AlertDialog
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
    </AlertDialog>
  </>
);
`;

export const AlertDialogCenteredString = `
const { isOpen, onOpen, onClose } = useDisclosure();
const cancelRef = useRef<HTMLButtonElement>(null);

return (
  <>
    <Button colorScheme="red" onClick={onOpen}>
      Åpne alert dialog
    </Button>
    <AlertDialog
      leastDestructiveRef={cancelRef}
      onClose={onClose}
      isOpen={isOpen}
      isCentered
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
    </AlertDialog>
  </>
);
`;
