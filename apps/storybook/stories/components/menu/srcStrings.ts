export const MenuString = `
<Box h="60">
  <Menu>
    <MenuButton as={Button} rightIcon={"expand_more"}>
      Handlinger
    </MenuButton>
    <MenuList>
      <MenuItem>Nedlast</MenuItem>
      <MenuItem>Lag en kopi</MenuItem>
      <MenuItem>Marker som utkast</MenuItem>
      <MenuItem>Slett</MenuItem>
      <MenuItem>Bli med på en workshop</MenuItem>
    </MenuList>
  </Menu>
</Box>
`;

export const MenuStateString = `
<Box h="40">
  <Menu>
    {({ isOpen }) => (
      <>
        <MenuButton as={Button} rightIcon={"expand_more"}>
          {isOpen ? "Lukk" : "Åpne"}
        </MenuButton>
        <MenuList>
          <MenuItem>Nedlast</MenuItem>
          <MenuItem onClick={() => alert("Kopi")}>Lag en kopi</MenuItem>
        </MenuList>
      </>
    )}
  </Menu>
</Box>
`;

export const MenuIconsCommandsString = `
<Box h="40">
  <Menu>
    <MenuButton as={IconButton} aria-label="Options" icon={"menu"} variant="outline" />
    <MenuList>
      <MenuItem icon={<Icon weight={300} icon="add" />} command="⌘T">
        Ny fane
      </MenuItem>
      <MenuItem icon={<Icon weight={300} icon="open_in_new" />} command="⌘N">
        Nytt vindu
      </MenuItem>
      <MenuItem icon={<Icon weight={300} icon="cached" />} command="⌘⇧N">
        Åpne lukket fane
      </MenuItem>
      <MenuItem icon={<Icon weight={300} icon="file_open" />} command="⌘O">
        Åpne fil...
      </MenuItem>
    </MenuList>
  </Menu>
</Box>
`;

export const MenuGroupString = `
<Box h="60">
  <Menu>
    <MenuButton as={Button} colorScheme="green">
      Profil
    </MenuButton>
    <MenuList>
      <MenuGroup title="Profil">
        <MenuItem>Min konto</MenuItem>
        <MenuItem>Betaling</MenuItem>
      </MenuGroup>
      <MenuDivider />
      <MenuGroup title="Hjelp">
        <MenuItem>Dokumentasjon</MenuItem>
        <MenuItem>FAQ</MenuItem>
      </MenuGroup>
    </MenuList>
  </Menu>
</Box>
`;

export const MenuLinkString = `
<Box h="20">
  <Menu>
    <MenuButton>Åpne meny</MenuButton>
    <MenuList>
      <MenuItem as="a" href="#">
        Link 1
      </MenuItem>
      <MenuItem as="a" href="#">
        Link 2
      </MenuItem>
    </MenuList>
  </Menu>
</Box>
`;

export const MenuOptionGroupsString = `
<Box h="80">
  <Menu closeOnSelect={false}>
    <MenuButton as={Button} colorScheme="blue">
      Sorter og filtrer
    </MenuButton>
    <MenuList minWidth="240px">
      <MenuOptionGroup defaultValue="asc" title="Rekkefølge" type="radio">
        <MenuItemOption value="asc">Stigende</MenuItemOption>
        <MenuItemOption value="desc">Synkende</MenuItemOption>
      </MenuOptionGroup>
      <MenuDivider />
      <MenuOptionGroup title="Filtrer" type="checkbox">
        <MenuItemOption value="email">Email</MenuItemOption>
        <MenuItemOption value="phone">Telefon</MenuItemOption>
        <MenuItemOption value="country">Land</MenuItemOption>
      </MenuOptionGroup>
    </MenuList>
  </Menu>
</Box>
`;
