import {
  Box,
  Button,
  Icon,
  Menu as KvibMenu,
  MenuButton,
  MenuItem,
  MenuList,
  Stack as KvibStack,
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
    variant: {
      description: "The variant of the Menu",
      table: {
        type: { summary: "solid | subtle | outline" },
        defaultValue: { summary: "subtle" },
      },
      options: ["solid", "subtle", "outline"],
      control: "radio",
    },
    colorScheme: {
      description: "The visual color appearance of the Menu",
      table: {
        type: { summary: "green | blue | red | gray" },
        defultValue: { summary: "gray" },
      },
      options: ["green", "blue", "red", "gray"],
      control: "radio",
    },
  },
};

export default meta;
type Story = StoryObj<typeof KvibMenu>;

export const Menu: Story = {
  args: {},
  render: (args) => (
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
  ),
};

export const MenuState: Story = {
  args: {},
  render: (args) => (
    <Box h="40">
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
    </Box>
  ),
};
