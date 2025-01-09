import { Button, KvibMenu, MenuContent, MenuItem, MenuTrigger } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<KvibMenu.RootProps> = {
  title: "Komponenter/Menu",
  component: KvibMenu.Root,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    closeOnSelect: {
      description: "If true, the menu will close when a menu item is clicked",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    defaultOpen: {
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    id: {
      table: {
        type: { summary: "string" },
      },
      control: "text",
    },
    lazyMount: {
      description: "Performance 🚀: If true, the MenuItem rendering will be deferred until the menu is open.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
    open: {
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },

    onExitComplete: {
      description: "Function called when the animation ends in the closed state",
      table: {
        type: { summary: "() => void" },
      },
      control: "text",
    },
    onOpenChange: {
      description: "Function called when the menu opens or closes.",
      table: {
        type: { summary: "() => void" },
      },
      control: "text",
    },
    positioning: {
      description: "The placement of the popper relative to its reference.",
      table: {
        type: { summary: "PositioningOptions" },
        defaultValue: { summary: "bottom" },
      },
      control: "text",
    },
  },
};

export default meta;
interface Props extends KvibMenu.RootProps {
  colorPalette: "green" | "blue";
}
type Story = StoryObj<Props>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
KvibMenu.Root.displayName = "Menu";
MenuTrigger.displayName = "MenuTrigger";
MenuContent.displayName = "MenuContent";
MenuItem.displayName = "MenuItem";
Button.displayName = "Button";

export const Preview: Story = {
  render: (args: Props) => (
    <KvibMenu.Root {...args}>
      <MenuTrigger asChild>
        <Button colorPalette={args.colorPalette}>Open Menu</Button>
      </MenuTrigger>
      <MenuContent>
        <MenuItem value="op1">Option 1</MenuItem>
        <MenuItem value="op2">Option 2</MenuItem>
        <MenuItem value="op3">Option 3</MenuItem>
      </MenuContent>
    </KvibMenu.Root>
  ),
};
