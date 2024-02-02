export const DrawerString = `const DrawerExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>
        Åpne
      </Button>
      <Drawer isOpen={isOpen} placement="right" onClose={onClose}>
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
      </Drawer>
    </>
  );
};`;

export const DrawerPlacementString = `const PlacementExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const [placement, setPlacement] = useState<"right" | "left" | "top" | "bottom">("right");

  const handlePlacementChange = (nextValue: "right" | "left" | "top" | "bottom") => {
    setPlacement(nextValue);
  };

  return (
    <>
      <RadioGroup defaultValue={placement} onChange={handlePlacementChange}>
        <Stack direction="row" mb="4">
          <Radio value="top">Topp</Radio>
          <Radio value="right">Høyre</Radio>
          <Radio value="bottom">Bunn</Radio>
          <Radio value="left">Venstre</Radio>
        </Stack>
      </RadioGroup>
      <Button colorScheme="blue" onClick={onOpen}>
        Åpne
      </Button>
      <Drawer placement={placement} onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth="1px">Drawer</DrawerHeader>
          <DrawerBody>
            <p>Noe innhold...</p>
            <p>Noe innhold...</p>
            <p>Noe innhold...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};`;

export const DrawerFocusString = `const DrawerFocusExample = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const firstField = useRef<HTMLInputElement>(null);

  return (
    <>
      <Button colorScheme="green" onClick={onOpen}>
        Lag bruker
      </Button>
      <Drawer isOpen={isOpen} placement="right" initialFocusRef={firstField} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader borderBottomWidth="1px">Lag en ny konto</DrawerHeader>

          <DrawerBody>
            <Stack spacing="24px">
              <Box>
                <FormLabel htmlFor="username">Navn</FormLabel>
                <Input ref={firstField} id="username" placeholder="Brukernavn" />
              </Box>

              <Box>
                <FormLabel htmlFor="url">Url</FormLabel>
                <InputGroup>
                  <InputLeftAddon>https://</InputLeftAddon>
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
            </Stack>
          </DrawerBody>

          <DrawerFooter borderTopWidth="1px">
            <Button variant="outline" mr={3} onClick={onClose}>
              Avbryt
            </Button>
            <Button colorScheme="blue">Send inn</Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  );
};`;

export const DrawerSizesString = `const SizeExample = () => {
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
        <Button onClick={() => handleClick(size)} key={size} m={4}>{\`Åpne \${size} Drawer\`}</Button>
      ))}

      <Drawer onClose={onClose} isOpen={isOpen} size={size}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>{\`\${size} drawer innhold\`}</DrawerHeader>
          <DrawerBody>
            <p>
              Kartverket er Norges nasjonale kartmyndighet, og har som sin primære oppgave å bidra med geografisk
              informasjon og tjenester av høy kvalitet til samfunnet. Dette omfatter både produksjon av kart og
              oppmålingstjenester, samt forvaltning av eiendomsinformasjon.
            </p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};`;

export const DrawerFormString = `export const App = () => {
  const { isOpen, onOpen, onClose } = useDisclosure()
  return (
    <>
      <Button onClick={onOpen}>Open</Button>
      <Drawer isOpen={isOpen} onClose={onClose}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerHeader>Create your account</DrawerHeader>

          <DrawerBody>
            <form
              id='my-form'
              onSubmit={(e) => {
                e.preventDefault()
                console.log('submitted')
              }}
            >
              <Input name='nickname' placeholder='Type here...' />
            </form>
          </DrawerBody>

          <DrawerFooter>
            <Button type='submit' form='my-form'>
              Save
            </Button>
          </DrawerFooter>
        </DrawerContent>
      </Drawer>
    </>
  )
}`;
