export const DisclosureStrings = `function Example() {
  const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <>
      <Button onClick={onOpen}>Open Drawer</Button>
      <Drawer placement='right' onClose={onClose} isOpen={isOpen}>
        <DrawerOverlay />
        <DrawerContent>
          <DrawerHeader borderBottomWidth='1px'>Basic Drawer</DrawerHeader>
          <DrawerBody>
            <p>Some contents...</p>
            <p>Some contents...</p>
            <p>Some contents...</p>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  )
}`;

export const DisclosurePropsStrings = `function Basic() {
  const { getDisclosureProps, getButtonProps } = useDisclosure()

  const buttonProps = getButtonProps()
  const disclosureProps = getDisclosureProps()
  return (
    <>
      <Button {...buttonProps}>Toggle Me</Button>
      <Text {...disclosureProps} mt={4}>
        This text is being visibly toggled hidden and shown by the button.
        <br />
        (Inspect these components to see the rendered attributes)
      </Text>
    </>
  )
}`;
