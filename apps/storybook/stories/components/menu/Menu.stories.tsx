import {
  Box,
  Button,
  Icon,
  IconButton,
  Menu as KvibMenu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack as KvibStack,
  MenuGroup as KvibMenuGroup,
  MenuDivider,
  MenuOptionGroup,
  MenuItemOption,
} from "@kvib/react/src";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibMenu> = {
  title: "Komponenter/Menu",
  component: KvibMenu,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "shown" },
    },
  },
  argTypes: {
    arrowPadding: {
      description: "The padding required to prevent the arrow from reaching the very edge of the popper.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 8 },
      },
      control: "number",
    },
    autoSelect: {
      description: "If true, the first enabled menu item will receive focus and be selected when the menu opens.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
      control: "boolean",
    },
    boundary: {
      description: "The boundary area for the popper. Used within the preventOverflow modifier",
      table: {
        type: { summary: `"clippingParents" | "scrollParent" | HTMLElement` },
        defaultValue: { summary: `"clippingParents"` },
      },
      control: { type: "text" },
    },
    closeOnBlur: {
      description: "If true, the menu will close when you click outside the menu list",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
      control: "boolean",
    },
    closeOnSelect: {
      description: "If true, the menu will close when a menu item is clicked",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
      control: "boolean",
    },
    computePositionOnMount: {
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    defaultIsOpen: {
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    direction: {
      table: {
        type: { summary: "ltr | rtl" },
      },
      options: ["lrt", "rtl"],
      control: "radio",
    },
    eventListeners: {
      description:
        "If provided, determines whether the popper will reposition itself on scroll and resize of the window.",
      table: {
        type: {
          summary: "type ONLY_FOR_FORMAT = | boolean | { scroll?: boolean | undefined resize?: boolean | undefined }",
        },
        defaultValue: { summary: true },
      },
      control: "text",
    },
    flip: {
      description:
        "If true, the popper will change its placement and flip when it's about to overflow its boundary area.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
      control: "boolean",
    },
    gutter: {
      description:
        "The distance or margin between the reference and popper. It is used internally to create an offset modifier. NB: If you define offset prop, it'll override the gutter.",
      table: {
        type: { summary: "number" },
        defaultValue: { summary: 8 },
      },
      control: "number",
    },
    id: {
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    initialFocusRef: {
      description: "The ref of the element that should receive focus when the popover opens.",
      table: {
        type: { summary: "RefObject<{ focus(): void }>" },
      },
      control: "object",
    },
    isLazy: {
      description: "Performance 🚀: If true, the MenuItem rendering will be deferred until the menu is open.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
      control: "boolean",
    },
    isOpen: {
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    lazyBehavior: {
      description: `Performance 🚀: The lazy behavior of menu's content when not visible. Only works when "isLazy={true}" - "unmount": The menu's content is always unmounted when not open. - "keepMounted": The menu's content initially unmounted, but stays mounted when menu is open.`,
      table: {
        type: { summary: "LazyMode" },
        defaultValue: { summary: "unmount" },
      },
      control: "text",
    },
    matchWidth: {
      description:
        "If true, the popper will match the width of the reference at all times. It's useful for autocomplete, `date-picker` and select patterns.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: false },
      },
      control: "boolean",
    },
    modifiers: {
      description: "Array of popper.js modifiers. Check the docs to see the list of possible modifiers you can pass.",
      table: {
        type: { summary: "Partial<Modifier<string, any>>[]" },
      },
      control: "text",
    },
    offset: {
      description: "The main and cross-axis offset to displace popper element from its reference element.",
      table: {
        type: { summary: "[number, number]" },
      },
      control: "array",
    },
    onClose: {
      table: {
        type: { summary: "() => void" },
      },
      control: "text",
    },
    onOpen: {
      table: {
        type: { summary: "() => void" },
      },
      control: "text",
    },
    placement: {
      description: "The placement of the popper relative to its reference.",
      table: {
        type: { summary: "PlacementWithLogical" },
        defaultValue: { summary: "bottom" },
      },
      control: "text",
    },
    preventOverflow: {
      description:
        "If true, will prevent the popper from being cut off and ensure it's visible within the boundary area.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: true },
      },
      control: "boolean",
    },
    strategy: {
      description: "The CSS positioning strategy to use.",
      table: {
        type: { summary: "absolute | fixed" },
        defaultValue: { summary: "absolute" },
      },
      options: ["absolute", "fixed"],
      control: { type: "radio" },
    },
  },
  args: { onClose: undefined, onOpen: undefined },
};

export default meta;
type Story = StoryObj<typeof KvibMenu>;

export const Menu: Story = {
  args: {},
  render: (args) => (
    <Box h="60">
      <KvibMenu {...args}>
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
      </KvibMenu>
    </Box>
  ),
};

export const MenuState: Story = {
  args: {},
  render: (args) => (
    <Box h="40">
      <KvibMenu {...args}>
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
      </KvibMenu>
    </Box>
  ),
};

export const MenuIconsCommands: Story = {
  args: {},
  render: (args) => (
    <Box h="40">
      <KvibMenu {...args}>
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
      </KvibMenu>
    </Box>
  ),
};

export const MenuGroup: Story = {
  args: {},
  render: (args) => (
    <Box h="60">
      <KvibMenu {...args}>
        <MenuButton as={Button} colorScheme="green">
          Profil
        </MenuButton>
        <MenuList>
          <KvibMenuGroup title="Profil">
            <MenuItem>Min konto</MenuItem>
            <MenuItem>Betaling</MenuItem>
          </KvibMenuGroup>
          <MenuDivider />
          <KvibMenuGroup title="Hjelp">
            <MenuItem>Dokumentasjon</MenuItem>
            <MenuItem>FAQ</MenuItem>
          </KvibMenuGroup>
        </MenuList>
      </KvibMenu>
    </Box>
  ),
};

export const MenuLink: Story = {
  args: {},
  render: (args) => (
    <Box h="20">
      <KvibMenu {...args}>
        <MenuButton>Åpne meny</MenuButton>
        <MenuList>
          <MenuItem as="a" href="#">
            Link 1
          </MenuItem>
          <MenuItem as="a" href="#">
            Link 2
          </MenuItem>
        </MenuList>
      </KvibMenu>
    </Box>
  ),
};

export const MenuOptionGroups: Story = {
  args: {},
  render: (args) => (
    <Box h="80">
      <KvibMenu {...args} closeOnSelect={false}>
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
      </KvibMenu>
    </Box>
  ),
};
