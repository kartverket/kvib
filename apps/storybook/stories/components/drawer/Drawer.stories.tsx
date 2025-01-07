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
  Input,
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
      canvas: { sourceState: "shown" },
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

const DrawerExample = (args: Props) => {
  const { open, onOpen, onClose } = useDisclosure();
  return (
    <Drawer {...args} open={open} onExitComplete={onClose}>
      <DrawerTrigger asChild>
        <Button colorPalette={args.colorPalette} onClick={onOpen}>
          Åpne
        </Button>
      </DrawerTrigger>
      <DrawerPositioner>
        <DrawerContent>
          <DrawerCloseTrigger />
          <DrawerHeader>
            <DrawerTitle>Lag din konto</DrawerTitle>
          </DrawerHeader>
          <DrawerBody>
            <Input placeholder="Skriv her..." />
          </DrawerBody>
          <DrawerFooter>
            <Button colorPalette={args.colorPalette} variant="secondary" mr={3} onClick={onClose}>
              Avbryt
            </Button>
            <Button colorPalette={args.colorPalette}>Lagre</Button>
          </DrawerFooter>
        </DrawerContent>
      </DrawerPositioner>
    </Drawer>
  );
};

export const Preview: Story = {
  render: args => <DrawerExample {...args} />,
};
