import { Button, Center, KvibMenu, MenuContent, MenuItem, MenuTrigger } from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<KvibMenu.RootProps> = {
  title: "Komponenter/Menu",
  component: KvibMenu.Root,
  parameters: {
    docs: {
      story: { inline: true },
      canvas: { sourceState: "hidden" },
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

export const Preview: Story = {
  render: (args: Props) => (
    <Center>
      <KvibMenu.Root {...args}>
        <MenuTrigger asChild>
          <Button variant="outline" size="sm" colorPalette={args.colorPalette}>
            Åpne meny
          </Button>
        </MenuTrigger>
        <MenuContent>
          <MenuItem value="new-txt-a">Nedlast</MenuItem>
          <MenuItem value="new-txt-b">Lag en kopi</MenuItem>
          <MenuItem value="new-txt-c">Marker som utkast</MenuItem>
          <MenuItem value="new-txt-d">Slett</MenuItem>
          <MenuItem value="new-txt-e">Bli med på en workshop</MenuItem>
        </MenuContent>
      </KvibMenu.Root>
    </Center>
  ),
};
