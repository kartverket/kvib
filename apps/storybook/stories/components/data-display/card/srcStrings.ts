// CardString
export const CardString = `<Card>
  <CardBody>
    <Text>Se alle endringer på eiendomsgrenser i år.</Text>
  </CardBody>
</Card>`;

// CardVariantsString
export const CardVariantsString = `<Stack spacing="4">
  {["elevated", "outline", "filled", "unstyled"].map((variant) => (
    <Card key={variant} variant={variant}>
      <CardHeader>
        <Heading size="md">{variant}</Heading>
      </CardHeader>
      <CardBody>
        <Text>variant = {variant}</Text>
      </CardBody>
    </Card>
  ))}
</Stack>`;

// CardSizesString
export const CardSizesString = `<Stack spacing="4">
  {["sm", "md", "lg"].map((size) => (
    <Card key={size} size={size}>
      <CardHeader>
        <Heading size="md">{size}</Heading>
      </CardHeader>
      <CardBody>
        <Text>size = {size}</Text>
      </CardBody>
    </Card>
  ))}
</Stack>`;

// CardImageString
export const CardImageString = `<Card maxW="sm">
  <CardBody>
    <Image
      src="https://images.unsplash.com/photo-1575520973439-9b31e3e0b6f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
      alt="Boat dock with small boats"
      borderRadius="md"
    />
    <Stack mt="6" spacing="3">
      <Heading size="md">Digitalt løft i havn</Heading>
      <Text>
        Kystverket har tildelt 10,5 millioner kroner til prosjektet «Digital tvilling i havn» for å styrke
        digitaliseringen av havneinfrastrukturen. Dette legger grunnlaget for en mer moderne og smartere
        havnevirksomhet.
      </Text>
    </Stack>
  </CardBody>
  <Divider />
  <CardFooter>
    <ButtonGroup spacing="2">
      <Button variant="solid" colorScheme="blue">
        Les artikkel
      </Button>
      <Button variant="ghost" colorScheme="blue">
        Legg til i leseliste
      </Button>
    </ButtonGroup>
  </CardFooter>
</Card>`;

// CardCenteringString
export const CardCenteringString = `<Card align="center">
  <CardHeader>
    <Heading size="md">Kundeportal</Heading>
  </CardHeader>
  <CardBody>
    <Text>Se et utdrag av bruk den siste måneden.</Text>
  </CardBody>
  <CardFooter>
    <Button colorScheme="blue">Se utdrag</Button>
  </CardFooter>
</Card>`;

// CardHorizontalString
export const CardHorizontalString = `<Card direction="row" overflow="hidden" variant="outline">
  <Image
    objectFit="cover"
    maxW={{ base: "100%", sm: "200px" }}
    src="https://images.unsplash.com/photo-1575520973439-9b31e3e0b6f0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80"
    alt="Boat dock with small boats"
  />
  <Stack>
    <CardBody>
      <Heading size="md">Digitalt løft i havn</Heading>
      <Text py="2">
        Kystverket har tildelt 10,5 millioner kroner til prosjektet «Digital tvilling i havn» for å styrke
        digitaliseringen av havneinfrastrukturen. Dette legger grunnlaget for en mer moderne og smartere
        havnevirksomhet.
      </Text>
    </CardBody>
    <CardFooter>
      <Button variant="solid" colorScheme="blue">
        Les artikkel
      </Button>
    </CardFooter>
  </Stack>
</Card>`;
