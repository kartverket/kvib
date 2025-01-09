import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseTrigger,
  DrawerContent,
  DrawerFooter,
  DrawerHeader,
  DrawerPositioner,
  DrawerProps,
  DrawerTitle,
  DrawerTrigger,
  Drawer as KvibDrawer,
  useDisclosure,
} from "@kvib/react";
import { Meta, StoryObj } from "@storybook/react";

const meta: Meta<typeof KvibDrawer> = {
  title: "Komponenter/Drawer",
  component: KvibDrawer,
  parameters: {
    docs: {
      story: { inline: true },
    },
  },
  argTypes: {
    open: {
      description: "If true, the modal will be open.",
      table: {
        type: { summary: "boolean" },
      },
      control: "boolean",
    },
    onExitComplete: {
      description: "Callback invoked to close the modal.",
      table: {
        type: { summary: "() => void" },
      },
      control: "text",
    },
    id: {
      description: "The id of the modal",
      table: {
        type: { summary: "String" },
      },
      control: "text",
    },
    placement: {
      description: "The placement of the drawer",
      table: {
        type: { summary: "bottom | top | start | end" },
      },
      defaultValue: { summary: "end" },
      control: "text",
    },
    size: {
      description: "Size of the Drawer",
      table: {
        type: { summary: "xs | sm | md | lg | xl | full" },
        defaultValue: { summary: "xs" },
      },
      options: ["xs", "sm", "md", "lg", "xl", "full"],
      control: { type: "radio" },
    },
    trapFocus: {
      description:
        "If false, focus lock will be disabled completely. This is useful in situations where you still need to interact with other surrounding elements. 🚨Warning: We don't recommend doing this because it hurts the accessibility of the modal, based on WAI-ARIA specifications.",
      table: {
        type: { summary: "boolean" },
        defaultValue: { summary: "true" },
      },
      control: "boolean",
    },
  },
  args: {
    placement: "end",
    size: "xs",
    trapFocus: true,
  },
};

export default meta;
/** Trenger eget interface for å arve fargepaletten til knappen i eksempelet */
interface Props extends DrawerProps {
  colorPalette: "gray" | "blue" | "green" | "red";
}
type Story = StoryObj<Props>;

/** Manuell navngivning av komponenter for å unngå at kompilert kode vises ved "Show Code" i Storybook */
Drawer.displayName = "Drawer";
DrawerTrigger.displayName = "DrawerTrigger";
DrawerPositioner.displayName = "DrawerPositioner";
DrawerContent.displayName = "DrawerContent";
DrawerHeader.displayName = "DrawerHeader";
DrawerTitle.displayName = "DrawerTitle";
DrawerBody.displayName = "DrawerBody";
DrawerFooter.displayName = "DrawerFooter";
DrawerCloseTrigger.displayName = "DrawerCloseTrigger";
Button.displayName = "Button";

export const Preview: Story = {
  render: args => {
    const { open, onOpen, onClose } = useDisclosure();
    return (
      <Drawer {...args} open={open} onExitComplete={onClose}>
        <DrawerTrigger asChild>
          <Button colorPalette={args.colorPalette} onClick={onOpen}>
            Open Drawer
          </Button>
        </DrawerTrigger>
        <DrawerPositioner>
          <DrawerContent>
            <DrawerCloseTrigger colorPalette={args.colorPalette} onClick={onClose}></DrawerCloseTrigger>

            <DrawerHeader>
              <DrawerTitle>Drawer title</DrawerTitle>
            </DrawerHeader>
            <DrawerBody>Drawer content</DrawerBody>
            <DrawerFooter>
              <Button colorPalette={args.colorPalette} onClick={onClose}>
                Close
              </Button>
            </DrawerFooter>
          </DrawerContent>
        </DrawerPositioner>
      </Drawer>
    );
  },
};
