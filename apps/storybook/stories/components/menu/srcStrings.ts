export const MenuString = `
<Box h="60">
<KvibMenu {...args}>
    <MenuButton as={Button}>Handlinger</MenuButton>
    <MenuList>
    <MenuItem>Nedlast</MenuItem>
    <MenuItem>Lag en kopi</MenuItem>
    <MenuItem>Marker som utkast</MenuItem>
    <MenuItem>Slett</MenuItem>
    <MenuItem>Bli med på en workshop</MenuItem>
    </MenuList>
</KvibMenu>
</Box>
    `;

export const MenuStateString = `<Box h="40">
      <KvibMenu {...args}>
        {({ isOpen }) => (
          <>
            <MenuButton as={Button}>{isOpen ? "Lukk" : "Åpne"}</MenuButton>
            <MenuList>
              <MenuItem>Nedlast</MenuItem>
              <MenuItem onClick={() => alert("Kopi")}>Lag en kopi</MenuItem>
            </MenuList>
          </>
        )}
      </KvibMenu>
    </Box>`;
